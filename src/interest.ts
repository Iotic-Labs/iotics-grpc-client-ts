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
import { BoolValue } from 'google-protobuf/google/protobuf/wrappers_pb';

import { getShortUUID } from './helpers';
import * as pbCommonModel from './client/iotics/api/common_pb';
import { Feed } from './client/iotics/api/feed_pb';
import { FetchInterestRequest, Interest } from './client/iotics/api/interest_pb';
import * as pbInterestService from './client/iotics/api/interest_pb_service';
import * as pbInterestModel from './client/iotics/api/interest_pb';

const TOKEN_EXPIRED_STATUS_CODE = 16;

export enum Status {
    ERROR = 'ERROR',
    OK = 'OK',
    TOKEN_EXPIRED = 'TOKEN_EXPIRED',
}

export interface IInterestResult {
    status: string;
    results?: pbInterestModel.FetchInterestResponse.Payload;
}

export const follow = (
    accessToken: string,
    grpcUrl: string,
    followedHostId: string,
    followedTwinId: string,
    followedFeedId: string,
    followerTwinId: string,
    fetchLastStored?: boolean,
) => {
    return eventChannel((emit) => {
        const client = new pbInterestService.InterestAPIClient(grpcUrl);
        const clientAppId = getShortUUID();
        const metadata = new grpc.Metadata();
        metadata.set('authorization', `bearer ${accessToken}`);

        // create the request message
        const requestMessage = new FetchInterestRequest();
        if (fetchLastStored) {
            const value = new BoolValue();
            value.setValue(fetchLastStored);
            requestMessage.setFetchlaststored(value);
        }
        const headers = new pbCommonModel.Headers();
        headers.setClientappid(clientAppId);
        headers.setTransactionrefList([clientAppId]);
        requestMessage.setHeaders(headers);

        const feed = new Feed();
        const feedId = new pbCommonModel.FeedID();
        feedId.setValue(followedFeedId);
        const twinId = new pbCommonModel.TwinID();
        twinId.setValue(followedTwinId);
        feed.setId(feedId);
        feed.setTwinid(twinId);

        const followedFeed = new Interest.FollowedFeed();
        const hostId = new pbCommonModel.HostID();
        hostId.setValue(followedHostId);
        followedFeed.setHostid(hostId);
        followedFeed.setFeed(feed);

        const interest = new Interest();
        interest.setFollowedfeed(followedFeed);
        const followerTwin = new pbCommonModel.TwinID();
        followerTwin.setValue(followerTwinId);
        interest.setFollowertwinid(followerTwin);

        const args = new FetchInterestRequest.Arguments();
        args.setInterest(interest);
        requestMessage.setArgs(args);

        const fetchResponseStream = client.fetchInterests(requestMessage, metadata);

        fetchResponseStream.on('data', (handler) => {
            const responsePayload = handler.getPayload();
            if (!responsePayload) {
                // eslint-disable-next-line no-console
                console.warn('grpc::fetchResponseStream: Empty payload.');
                emit({ status: Status.ERROR } as IInterestResult);
                emit(END);
                return;
            }

            emit({
                status: Status.OK,
                results: responsePayload,
            } as IInterestResult);
        });

        fetchResponseStream.on('end', (status) => {
            // emit the token expired message so that the client
            // can restart the follow
            if (status?.code === TOKEN_EXPIRED_STATUS_CODE) {
                emit({
                    status: Status.TOKEN_EXPIRED,
                });
            }

            emit(END);
        });

        return () => {
            fetchResponseStream.cancel();
        };
    });
};
