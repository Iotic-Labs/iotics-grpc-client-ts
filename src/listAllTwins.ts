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
import { ListAllTwinsRequest, ListAllTwinsResponse } from ".";
import {
    TwinAPIClient,
    ServiceError,
} from "./client/iotics/api/twin_pb_service";
import { Headers, Range, Limit, Offset } from "./client/iotics/api/common_pb";
import { getShortUUID } from "./helpers";

export const LIST_ALL_TWINS_PAGE_LENGTH = 100;

export interface IListResult {
    error?: string;
    results?: ListAllTwinsResponse.Payload;
}

const listResult: IListResult = {};

const requestListAllTwins = (
    client: TwinAPIClient,
    clientAppId: string,
    metadata: grpc.Metadata,
    page: number,
    callback: any
) => {
    const request = new ListAllTwinsRequest();
    const headers = new Headers();
    const range = new Range();
    const limit = new Limit();
    const offset = new Offset();
    clientAppId = getShortUUID();

    headers.setClientappid(clientAppId);
    headers.setClientref(`${clientAppId}_page${page}`);
    headers.setTransactionrefList([clientAppId]);
    limit.setValue(LIST_ALL_TWINS_PAGE_LENGTH);
    offset.setValue(LIST_ALL_TWINS_PAGE_LENGTH * page);
    range.setLimit(limit);
    range.setOffset(offset);
    request.setRange(range);
    request.setHeaders(headers);

    client.listAllTwins(request, metadata, callback);
};

const callBackListAllTwins = (
    emit: (input: unknown) => void,
    client: TwinAPIClient,
    clientAppId: string,
    metadata: grpc.Metadata
) => {
    const listCallback = (
        error: ServiceError | null,
        responseMessage: ListAllTwinsResponse | null
    ) => {
        const headers = responseMessage?.getHeaders();
        const clientRef = headers?.getClientref();
        const page = parseInt(clientRef!.split("_page")[1], 10);
        const payload = responseMessage?.getPayload();
        const twins = payload?.getTwinsList();

        if (error) {
            // eslint-disable-next-line no-console
            console.warn("listAllTwinsApi:", error);
            listResult.error = `ERROR ${error.message}`;
            listResult.results = undefined;
            emit(listResult);
            emit(END);
            return;
        }
        if (responseMessage == null) {
            const msg = "ERROR: Response message is null.";
            // eslint-disable-next-line no-console
            console.warn(msg);
            listResult.error = msg;
            listResult.results = undefined;
            emit(listResult);
            emit(END);
            return;
        }

        if (!payload) {
            const msg = "listAllTwinsApi: Payload is empty.";
            // eslint-disable-next-line no-console
            console.warn(msg);
            listResult.error = msg;
            listResult.results = undefined;
            emit(listResult);
            emit(END);
            return;
        }

        listResult.error = undefined;
        listResult.results = payload;
        emit(listResult);

        if (twins && twins.length >= LIST_ALL_TWINS_PAGE_LENGTH) {
            requestListAllTwins(
                client,
                clientAppId,
                metadata,
                page + 1,
                listCallback
            );
        } else {
            emit(END);
        }
    };
    return listCallback;
};

export const listAllTwins = (hostAddress: string, accessToken: string) => {
    const client = new TwinAPIClient(hostAddress);
    const metadata = new grpc.Metadata();
    const clientAppId = getShortUUID();
    metadata.set("authorization", `bearer ${accessToken}`);

    return eventChannel((emit) => {
        requestListAllTwins(
            client,
            clientAppId,
            metadata,
            0,
            callBackListAllTwins(emit, client, clientAppId.toString(), metadata)
        );
        return () => {
            // the subscriber must return an unsubscribe function
            // https://redux-saga.js.org/docs/advanced/Channels/
            // In this case nothing to be done here
        };
    });
};
