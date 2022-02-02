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

        let lastPage = 0;

        // receive results
        const searchResponsesHeaders = new pbCommonModel.SubscriptionHeaders();
        searchResponsesHeaders.setClientappid(clientAppId);
        const searchResponseStream = client.receiveAllSearchResponses(searchResponsesHeaders, metadata);

        searchResponseStream.on('data', (handler) => {
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

            const twins = handler.getPayload()?.getTwinsList();
            const clientRef = handler.getHeaders()!.getClientref();
            const page = parseInt(clientRef.split('_page')[1], 10);

            if (twins && twins.length >= PAGE_LENGTH && page >= lastPage) {
                lastPage += 1;
                requestResultsPage(client, clientAppId, metadata, searchRequestPayload, scope, lastPage, emit);
            }
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
