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
import { END, eventChannel } from 'redux-saga';

import { getShortUUID } from './helpers';
import { Scope } from './twins';
import * as pbCommonModel from './client/iotics/api/common_pb';
import * as pbSearchModel from './client/iotics/api/search_pb';
import * as pbSearchService from './client/iotics/api/search_pb_service';

const PAGE_LENGTH = 100;

export interface ISearchResult {
    status: string;
    results?: pbSearchModel.SearchResponse.Payload;
}

const requestResultsPage = (
    client: pbSearchService.SearchAPIClient,
    clientAppId: string,
    metadata: grpc.Metadata,
    searchRequestPayload: pbSearchModel.SearchRequest.Payload,
    scope: Scope,
    page: number,
    emit: (input: unknown) => void,
) => {
    const request = new pbSearchModel.SearchRequest();
    const header = new pbCommonModel.Headers();
    const range = new pbCommonModel.Range();
    const limit = new pbCommonModel.Limit();
    const offset = new pbCommonModel.Offset();
    header.setClientappid(clientAppId);
    header.setClientref(`${clientAppId}_page${page}`);
    header.setTransactionrefList([clientAppId]);
    limit.setValue(PAGE_LENGTH);
    offset.setValue(PAGE_LENGTH * page);
    range.setLimit(limit);
    range.setOffset(offset);
    request.setHeaders(header);
    request.setPayload(searchRequestPayload);
    request.setRange(range);
    request.setScope(scope);

    const dispatchSearchCallback = (error: pbSearchService.ServiceError | null) => {
        if (error != null) {
            // eslint-disable-next-line no-console
            console.warn('grpc::dispatchSearchCallback ServiceError', error);
            emit({ status: 'ERROR' } as ISearchResult);
            emit(END);
        }
    };

    client.dispatchSearchRequest(request, metadata, dispatchSearchCallback);
};

export const search = (
    accessToken: string,
    grpcUrl: string,
    searchRequestPayload: pbSearchModel.SearchRequest.Payload,
    scope: Scope = Scope.GLOBAL,
) => {
    return eventChannel((emit) => {
        const client = new pbSearchService.SearchAPIClient(grpcUrl);
        const clientAppId = getShortUUID();
        const metadata = new grpc.Metadata();
        metadata.set('authorization', `bearer ${accessToken}`);

        // receive results
        const searchResponsesHeaders = new pbCommonModel.SubscriptionHeaders();
        searchResponsesHeaders.setClientappid(clientAppId);
        const searchResponseStream = client.receiveAllSearchResponses(searchResponsesHeaders, metadata);

        let lastPage = 0;
        searchResponseStream.on('data', (handler) => {
            const twins = handler.getPayload()?.getTwinsList();
            const clientRef = handler.getHeaders()!.getClientref();
            const page = parseInt(clientRef.split('_page')[1], 10);
            if (twins?.length >= PAGE_LENGTH && page >= lastPage) {
                lastPage += 1;
                requestResultsPage(client, clientAppId, metadata, searchRequestPayload, scope, lastPage, emit);
            }
            if (twins?.length === 0 && page > 0) {
                // Do not emit redundant responses if paginated search is called with global scope.
                return;
            }

            const searchResponsePayload = handler.getPayload();
            if (!searchResponsePayload) {
                // eslint-disable-next-line no-console
                console.warn('grpc::searchResponseStream: Empty payload.');
                emit({ status: 'ERROR' } as ISearchResult);
                emit(END);
                return;
            }

            const status = searchResponsePayload.getStatus();
            if (status && status?.getCode() !== 0) {
                // eslint-disable-next-line no-console
                console.warn('grpc::searchResponseStream:', status.getMessage());
                emit({ status: 'ERROR' } as ISearchResult);
                emit(END);
                return;
            }

            emit({
                status: 'OK',
                results: searchResponsePayload,
            } as ISearchResult);
        });

        searchResponseStream.on('end', () => {
            emit(END);
        });

        // dispatch searches
        requestResultsPage(client, clientAppId, metadata, searchRequestPayload, scope, lastPage, emit);

        return () => {
            searchResponseStream.cancel();
        };
    });
};
