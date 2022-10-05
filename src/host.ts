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

import { Headers } from './client/iotics/api/common_pb';
import { GetHostIDRequest, GetHostIDResponse } from './client/iotics/api/host_pb';
import { HostAPIClient } from './client/iotics/api/host_pb_service';
import { getShortUUID } from './helpers';

export const getLocalHostId = async (hostAddress: string, accessToken: string) => {
    return new Promise<GetHostIDResponse.Payload>((resolve, reject) => {
        const client = new HostAPIClient(hostAddress);

        const metadata = new grpc.Metadata();
        metadata.set('authorization', `bearer ${accessToken}`);

        const request = new GetHostIDRequest();

        const clientAppId = getShortUUID();

        const headers = new Headers();
        headers.setClientappid(clientAppId);
        headers.setTransactionrefList([clientAppId]);
        request.setHeaders(headers);

        client.getHostID(request, metadata, (err, response) => {
            if (err) {
                // eslint-disable-next-line no-console
                console.warn('getLocalHostId:', err);
                reject(err);
            }

            const payload = response?.getPayload();

            if (!payload) {
                const msg = 'getLocalHostId: payload null.';
                // eslint-disable-next-line no-console
                console.warn(msg);
                reject(new Error(msg));
            } else {
                resolve(payload);
            }
        });
    });
};
