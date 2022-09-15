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

import shortUUID from 'short-uuid';
import { END, EventChannel } from 'redux-saga';
import { NotUndefined } from '@redux-saga/types';
import * as pbCommonModel from './client/iotics/api/common_pb';
import { Input } from './client/iotics/api/input_pb';

export const getShortUUID = () => shortUUID().new();

export enum Status {
    ERROR = 'ERROR',
    OK = 'OK',
    TOKEN_EXPIRED = 'TOKEN_EXPIRED',
}
export const TOKEN_EXPIRED_STATUS_CODE = 16;

/**
 * According to the given channel it takes message(s) from the channel, waits for the message
 * and yields the message until there is nothing to take from the channel. The message(s) can be
 * consumed by a generator iterator.
 * @param channel EventChannel
 * @yields an event channel message which can be consumed by a generator iterator
 */
export async function* channelToGenerator<T extends NotUndefined>(channel: EventChannel<T>) {
    const createTakePromise = (channel: EventChannel<T>): Promise<T | END> => {
        return new Promise((res, rej) => {
            channel.take((data: T | END) => {
                if (data !== END) res(data);
                rej();
            });
        });
    };

    let p = createTakePromise(channel);

    while (true) {
        try {
            const message = await p;

            if (message !== END) {
                yield message;
            } else {
                return;
            }

            p = createTakePromise(channel);
        } catch {
            return;
        }
    }
}

export function createInputObj(twinId: string, inputId: string) {
    const input = new Input();
    const twinIdObj = new pbCommonModel.TwinID();
    twinIdObj.setValue(twinId);
    input.setTwinid(twinIdObj);
    const inputIdObj = new pbCommonModel.InputID();
    inputIdObj.setValue(inputId);
    input.setId(inputIdObj);
    return input;
}
