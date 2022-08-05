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
import * as pbCommonModel from './client/iotics/api/common_pb';
import * as pbFeedModel from './client/iotics/api/feed_pb';
import { FeedAPIClient } from './client/iotics/api/feed_pb_service';

export const describeFeedApi = async (
    hostAddress: string,
    accessToken: string,
    clientAppId: string,
    clientRef: string,
    hostId: string,
    twinId: string,
    feedId: string,
    transactionRef?: string,
) => {
    return new Promise<pbFeedModel.DescribeFeedResponse.Payload>((resolve, reject) => {
        const client = new FeedAPIClient(hostAddress);
        const metadata = new grpc.Metadata();
        metadata.set('authorization', `bearer ${accessToken}`);
        const request = new pbFeedModel.DescribeFeedRequest();
        const headers = new pbCommonModel.Headers();
        headers.setClientappid(clientAppId);
        headers.setClientref(clientRef);
        if (transactionRef) {
            headers.setTransactionrefList([transactionRef]);
        } else {
            headers.setTransactionrefList([clientRef]);
        }
        request.setHeaders(headers as unknown as pbCommonModel.Headers);
        const twinID = new pbCommonModel.TwinID();
        twinID.setValue(twinId);
        const feedID = new pbCommonModel.FeedID();
        feedID.setValue(feedId);
        const feed = new pbFeedModel.Feed();
        feed.setTwinid(twinID);
        feed.setId(feedID);
        const args = new pbFeedModel.DescribeFeedRequest.Arguments();
        args.setFeed(feed);
        if (hostId) {
            const hostID = new pbCommonModel.HostID();
            hostID.setValue(hostId);
            args.setRemotehostid(hostID);
        }
        request.setArgs(args);

        client.describeFeed(request, metadata, (error, responseMessage) => {
            if (error) {
                // eslint-disable-next-line no-console
                console.warn('describeFeedApi:', error);
                reject(error);
                return;
            }
            if (responseMessage == null) {
                const msg = 'describeFeedApi: Response message is null.';
                // eslint-disable-next-line no-console
                console.warn(msg);
                reject(new Error(msg));
                return;
            }
            const payload = responseMessage.getPayload();
            if (!payload) {
                const msg = 'describeFeedApi: Payload is empty.';
                // eslint-disable-next-line no-console
                console.warn(msg);
                reject(new Error(msg));
                return;
            }
            resolve(payload);
        });
    });
};

export const shareFeedDataApi = async (
    hostAddress: string,
    accessToken: string,
    clientAppId: string,
    clientRef: string,
    twinId: string,
    feedId: string,
    data: Record<string, string | number>,
    occurredAt?: Date,
    transactionRef?: string,
) => {
    return new Promise<pbFeedModel.ShareFeedDataResponse>((resolve, reject) => {
        const client = new FeedAPIClient(hostAddress);
        const metadata = new grpc.Metadata();
        metadata.set('authorization', `bearer ${accessToken}`);
        const request = new pbFeedModel.ShareFeedDataRequest();
        const headers = new pbCommonModel.Headers();
        headers.setClientappid(clientAppId);
        headers.setClientref(clientRef);
        if (transactionRef) {
            headers.setTransactionrefList([transactionRef]);
        } else {
            headers.setTransactionrefList([clientRef]);
        }
        request.setHeaders(headers as unknown as pbCommonModel.Headers);
        const twinID = new pbCommonModel.TwinID();
        twinID.setValue(twinId);
        const feedID = new pbCommonModel.FeedID();
        feedID.setValue(feedId);
        const feed = new pbFeedModel.Feed();
        feed.setTwinid(twinID);
        feed.setId(feedID);
        const args = new pbFeedModel.ShareFeedDataRequest.Arguments();
        args.setFeed(feed);
        request.setArgs(args);

        const payload = new pbFeedModel.ShareFeedDataRequest.Payload();
        const payloadData = new pbCommonModel.FeedData();
        payloadData.setOccurredat(Timestamp.fromDate(occurredAt ?? new Date()));
        const encodedData = btoa(JSON.stringify(data));
        payloadData.setData(encodedData);
        payload.setSample(payloadData);
        request.setPayload(payload);

        client.shareFeedData(request, metadata, (error, responseMessage) => {
            if (error) {
                // eslint-disable-next-line no-console
                console.warn('shareFeedDataApi:', error);
                reject(error);
                return;
            }

            if (responseMessage == null) {
                const msg = 'shareFeedDataApi: Response message is null.';
                // eslint-disable-next-line no-console
                console.warn(msg);
                reject(new Error(msg));
                return;
            }

            resolve(responseMessage);
        });
    });
};
