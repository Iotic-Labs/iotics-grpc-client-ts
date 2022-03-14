/**
 * @license
 * Copyright © 2022 IOTIC LABS LTD. info@iotics.com
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://github.com/Iotic-Labs/iotics-grpc-client-ts/blob/main/LICENSE
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * SPDX-License-Identifier: Apache-2.0
 */

import { grpc } from "@improbable-eng/grpc-web";
import { END, eventChannel } from "redux-saga";

import { getShortUUID } from "./helpers";
import { Scope } from "./twins";
import * as pbCommonModel from "./client/iotics/api/common_pb";
import * as pbMetaService from "./client/iotics/api/meta_pb_service";
import {
    SparqlQueryRequest,
    SparqlQueryResponse,
    SparqlResultType,
    SparqlResultTypeMap,
} from "./client/iotics/api/meta_pb";
import { Timestamp } from "google-protobuf/google/protobuf/timestamp_pb";

export interface IQueryResult {
    status: { code?: number; message: string };
    results?: {
        hostId?: string;
        data: string;
    };
}

interface IChunk {
    b64data: string;
    lastValue: boolean;
}

const LOCAL_HOST_ID = "local";

/**
 * Executes a sparql query against the local host (or all hosts depending on scope)
 * @param accessToken api access token
 * @param grpcUrl url of web grpc
 * @param query sparql query to run
 * @param scope whether to run the query just on the local host or on all the hosts on the network
 * @param resultContentType what format the results should be in, default SPARQL_JSON
 * @param timeout how long until the query times out in seconds, default 5 seconds
 * @returns an event channel into which results are emitted
 */
export const sparqlQuery = (
    accessToken: string,
    grpcUrl: string,
    query: string,
    scope: Scope = Scope.GLOBAL,
    resultContentType: SparqlResultTypeMap[keyof SparqlResultTypeMap] = SparqlResultType.SPARQL_JSON,
    timeout: number = 5
) => {
    return eventChannel((emit) => {
        const request = createRequest(timeout, query, resultContentType, scope);

        const metadata = new grpc.Metadata();
        metadata.set("authorization", `bearer ${accessToken}`);

        const client = new pbMetaService.MetaAPIClient(grpcUrl);
        const responseStream = client.sparqlQuery(request, metadata);

        const resultChunks: Record<string, Map<number, IChunk>> = {};

        responseStream.on("data", (response) => {
            handleDataResponse(response, resultChunks, emit);
        });

        responseStream.on("end", (status) => {
            emit({
                status: { message: status?.details, code: status?.code },
            } as IQueryResult);
            emit(END);
        });

        return () => {
            responseStream.cancel();
        };
    });
};

const handleDataResponse = (
    response: SparqlQueryResponse,
    resultChunks: Record<string, Map<number, IChunk>>,
    emit: (input: unknown) => void
) => {
    const responsePayload = response.getPayload();

    const status = responsePayload?.getStatus();
    if (status && status?.getCode() !== 0) {
        // eslint-disable-next-line no-console
        console.error("sparqlQuery error received:", status.getMessage());
        emit({
            status: { message: status.getMessage(), code: status.getCode() },
        } as IQueryResult);
        emit(END);
        return;
    }

    const chunkData = responsePayload?.getResultchunk_asB64();
    const chunkSeqNum = responsePayload?.getSeqnum();
    const hostId = responsePayload?.getRemotehostid();
    const hostIdValue = hostId?.getValue() ?? LOCAL_HOST_ID;

    if (chunkData === undefined || chunkSeqNum === undefined) {
        console.error(
            `sparqlQuery received an empty chunk of data or one with an undefined chunkSeqNum from host ${hostIdValue}`
        );
        return;
    }

    const chunk = {
        b64data: chunkData,
        lastValue: !!responsePayload?.getLast(),
    };

    if (!resultChunks[hostIdValue]) {
        resultChunks[hostIdValue] = new Map();
    }
    resultChunks[hostIdValue].set(chunkSeqNum, chunk);

    let decodedData;

    try {
        decodedData = checkDecodeData(resultChunks[hostIdValue]);
    } catch (error: any) {
        console.error("sparqlQuery failed decoding results", error);
        return;
    }

    if (decodedData) {
        emit({
            status: { message: "OK" },
            results: {
                hostId: hostId?.getValue(),
                data: decodedData,
            },
        } as IQueryResult);
    }
};

/**
 * check if all the chunks have been received from a host
 * if so order the chunks and decode and return
 * otherwise return undefined
 */
const checkDecodeData = (hostData: Map<number, IChunk>): string | undefined => {
    const seqNums = [...hostData.keys()].sort();
    const lastSeqNum: number = seqNums[seqNums.length - 1];

    if (!hostData.get(lastSeqNum)?.lastValue) {
        // havent received the last value yet
        return;
    }

    let data = "";

    for (let ii = 0; ii <= lastSeqNum; ii++) {
        const b64Data = hostData.get(ii)?.b64data;
        if (b64Data === undefined) {
            // missing a chunk
            return;
        }

        data += atob(b64Data);
    }

    return data;
};

const createRequest = (
    timeout: number,
    query: string,
    resultContentType: SparqlResultTypeMap[keyof SparqlResultTypeMap],
    scope: Scope
): SparqlQueryRequest => {
    const request = new SparqlQueryRequest();
    const headers = new pbCommonModel.Headers();

    const clientAppId = getShortUUID();
    headers.setClientappid(clientAppId);
    headers.setTransactionrefList([clientAppId]);
    headers.setRequesttimeout(
        Timestamp.fromDate(new Date(Date.now() + 1000 * timeout))
    );
    request.setHeaders(headers);

    const searchPayload = new SparqlQueryRequest.Payload();
    searchPayload.setQuery(btoa(query));
    searchPayload.setResultcontenttype(resultContentType);
    request.setPayload(searchPayload);
    request.setScope(scope);

    return request;
};
