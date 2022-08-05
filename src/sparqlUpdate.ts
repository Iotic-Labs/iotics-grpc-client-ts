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

import { grpc } from '@improbable-eng/grpc-web';
import { Timestamp } from 'google-protobuf/google/protobuf/timestamp_pb';
import * as pbMetaService from './client/iotics/api/meta_pb_service';

import { SparqlUpdateRequest, SparqlUpdateResponse } from './client/iotics/api/meta_pb';
import * as pbCommonModel from './client/iotics/api/common_pb';
import { getShortUUID } from './helpers';

export const DEFAULT_TIMEOUT = 5; // Seconds

const createRequest = (timeout: number, update: string): SparqlUpdateRequest => {
    const request = new SparqlUpdateRequest();
    const headers = new pbCommonModel.Headers();

    const clientAppId = getShortUUID();
    headers.setClientappid(clientAppId);
    headers.setTransactionrefList([clientAppId]);
    headers.setRequesttimeout(Timestamp.fromDate(new Date(Date.now() + 1000 * timeout)));
    request.setHeaders(headers);

    const updatePayload = new SparqlUpdateRequest.Payload();
    updatePayload.setUpdate(btoa(update));
    request.setPayload(updatePayload);

    return request;
};

/**
 * Allows to insert/update/delete metadata in a set of explicitly specified graphs as well as query said metadata
 * from the localhost (and from the network). Changes are visible via SparqlQuery , within 5 seconds.
 * Only a fixed set of graphs can be written to (and become visible during SPARQL queries)
 * At the moment, the only supported graph is http://data.iotics.com/graph#custom-public,
 * referred to as iotg:custom-public
 * @param accessToken api access token
 * @param grpcUrl url of web grpc
 * @param update sparql update to run
 * @param timeout how long until the query times out in seconds, default 5 seconds
 * @returns a SparqlUpdateResponse Promise
 */
export const sparqlUpdate = (
    accessToken: string,
    grpcUrl: string,
    update: string,
    timeout: number = DEFAULT_TIMEOUT,
) => {
    return new Promise<SparqlUpdateResponse>((resolve, reject) => {
        const request = createRequest(timeout, update);

        const metadata = new grpc.Metadata();
        metadata.set('authorization', `bearer ${accessToken}`);

        const client = new pbMetaService.MetaAPIClient(grpcUrl);
        client.sparqlUpdate(request, metadata, (error, responseMessage) => {
            if (error) {
                // eslint-disable-next-line no-console
                console.warn('sparqlUpdateApi:', error);
                reject(error);
                return;
            }
            if (responseMessage == null) {
                const msg = 'sparqlUpdateApi: Response message is null.';
                // eslint-disable-next-line no-console
                console.warn(msg);
                reject(new Error(msg));
                return;
            }

            if (!responseMessage) {
                const msg = 'sparqlUpdateApi: Payload is empty.';
                // eslint-disable-next-line no-console
                console.warn(msg);
                reject(new Error(msg));
                return;
            }
            resolve(responseMessage);
        });
    });
};
