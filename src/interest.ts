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

import { getShortUUID, Status, TOKEN_EXPIRED_STATUS_CODE } from './helpers';
import * as pbCommonModel from './client/iotics/api/common_pb';
import * as pbInput from './client/iotics/api/input_pb';
import { FetchInterestRequest, Interest, SendInputMessageRequest } from './client/iotics/api/interest_pb';
import * as pbInterestService from './client/iotics/api/interest_pb_service';
import * as pbInterestModel from './client/iotics/api/interest_pb';
import { InputMessage } from './client/iotics/api/input_pb';
import { Timestamp } from 'google-protobuf/google/protobuf/timestamp_pb';
import { FeedID } from '.';

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

        const feedId = new FeedID();
        feedId.setId(followedFeedId);
        feedId.setHostid(followedHostId);
        feedId.setTwinid(followedTwinId);

        const followerTwin = new pbCommonModel.TwinID();
        followerTwin.setId(followerTwinId);

        const interest = new Interest();
        interest.setFollowedfeedid(feedId);
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

/**
 * Sends a message to the input of a local or remote twin.
 *
 * @param message What to send the remote twin, usually in the form of an object with keys matching the input's Values
 * @param senderTwinId The twin sending the message
 * @param receiverTwinId The twin receiving the message
 * @param inputId The ID of the input where the message will be sent
 * @param remoteHostId If the receiver twin is remote, its host ID (undefined if local)
 * @param headers optional request headers
 *
 * Returns: Response object indicating success
 */
export const sendInputMessage = (
    accessToken: string,
    grpcUrl: string,
    message: Object,
    senderTwinId: string,
    receiverTwinId: string,
    inputId: string,
    remoteHostId?: string,
) => {
    return new Promise<pbInterestModel.SendInputMessageResponse>((resolve, reject) => {
        const client = new pbInterestService.InterestAPIClient(grpcUrl);
        const clientAppId = getShortUUID();
        const metadata = new grpc.Metadata();
        metadata.set('authorization', `bearer ${accessToken}`);

        const headers = new pbCommonModel.Headers();
        headers.setClientappid(clientAppId);
        headers.setTransactionrefList([clientAppId]);

        const inputInterest = new pbInterestModel.InputInterest();
        const senderTwin = new pbCommonModel.TwinID();
        senderTwin.setId(senderTwinId);
        inputInterest.setSendertwinid(senderTwin);
        const input = new pbInput.InputID();
        input.setId(inputId);
        if (remoteHostId) {
            input.setHostid(remoteHostId);
        }
        input.setTwinid(receiverTwinId);
        inputInterest.setDestinputid(input);

        const inputMessage = new InputMessage();
        const currentTimestamp = new Timestamp();
        currentTimestamp.fromDate(new Date());
        inputMessage.setOccurredat(currentTimestamp);
        inputMessage.setMime('application/json');
        inputMessage.setData(new TextEncoder().encode(JSON.stringify(message)));

        const request = new SendInputMessageRequest();
        request.setHeaders(headers);
        const args = new SendInputMessageRequest.Arguments();
        args.setInterest(inputInterest);
        request.setArgs(args);
        const payload = new SendInputMessageRequest.Payload();
        payload.setMessage(inputMessage);
        request.setPayload(payload);

        return client.sendInputMessage(request, metadata, (error, responseMessage) => {
            if (error) {
                // eslint-disable-next-line no-console
                console.warn('sendInputMessage:', error);
                reject(error);
                return;
            }
            if (responseMessage == null) {
                const msg = 'sendInputMessage: Response message is null.';
                // eslint-disable-next-line no-console
                console.warn(msg);
                reject(new Error(msg));
                return;
            }
            resolve(responseMessage);
        });
    });
};
