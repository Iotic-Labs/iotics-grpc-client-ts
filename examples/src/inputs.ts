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
import { NodeHttpTransport } from '@improbable-eng/grpc-web-node-http-transport';
import { END, EventChannel } from 'redux-saga';
import {
    // Note the import - it is important for setting default transport to Node for the same instance of gRPC that
    // the `@iotics/grpc-client` is using (in a case of multiple `node_modules`).
    grpc,
    describeTwinApi,
    GRPCStatusCodes,
    upsertTwinApi,
    deleteTwinApi,
    Value,
    sendInputMessage,
    IInputResult,
    receiveInputMessages,
    describeInput,
    deleteInput,
} from '../../src';
import { UpsertInputWithMeta } from '../../src/client/iotics/api/input_pb';
import { channelToGenerator, getShortUUID, Status } from '../../src/helpers';

const INPUT_NAME = 'test message input';
const VALUE_NAME = 'a character of the test message';

// Enable the use of gRPC-Web in NodeJS.
grpc.setDefaultTransport(NodeHttpTransport());

/**
 * Send messages to an input on a twin
 */
async function main() {
    // Get values from environment variables:
    const url = process.env.GRPC_URL;
    const token = process.env.GRPC_TOKEN;
    const senderTwinDid = process.env.SENDER_TWIN_DID;
    const receiverTwinDid = process.env.RECEIVER_TWIN_DID;

    if (!url) {
        console.error('Required "GRPC_URL" environment variable is not set!');
        process.exit(1);
    }
    if (!token) {
        console.error('Required "GRPC_TOKEN" environment variable is not set!');
        process.exit(1);
    }
    if (!senderTwinDid) {
        console.error('Required "SENDER_TWIN_DID" twin to send input values is not set!');
        process.exit(1);
    }
    if (!receiverTwinDid) {
        console.error('Required "RECEIVER_TWIN_DID" twin to receive input values is not set!');
        process.exit(1);
    }

    try {
        // create the receiver and sender twins
        await createTwins(url, token, senderTwinDid, receiverTwinDid);

        // the message we are going to send one character at a time
        const message = 'HELLO, IOTICS!';

        // start sending the messages and listening for them
        await transmitAndReceiveMessages(message, token, url, senderTwinDid, receiverTwinDid);

        // clean up all the twins
        await deleteTwins(url, token, senderTwinDid, receiverTwinDid);
    } catch (error: any) {
        if (error?.code === GRPCStatusCodes.UNAUTHENTICATED) {
            console.info('Your GRPC_TOKEN may have expired please try setting another one');
        }
    }
}

async function transmitAndReceiveMessages(
    message: string,
    token: string,
    url: string,
    senderTwinDid: string,
    receiverTwinDid: string,
) {
    const channel: EventChannel<IInputResult> = receiveInputMessages(
        url,
        token,
        receiverTwinDid,
        INPUT_NAME,
    ) as EventChannel<IInputResult>;

    const inputMessageGenerator = channelToGenerator(channel);

    // start the timer which sends the message one character at a time
    startSendingInputMessages(message, token, url, senderTwinDid, receiverTwinDid);

    await processMessages(inputMessageGenerator, message[message.length - 1]);

    channel.close();
}

/**
 * Create the receiver twin with an input on it
 * and a sender twin to send messages to the receiver twin's input
 */
async function createTwins(url: string, token: string, senderTwinDid: string, receiverTwinDid: string) {
    // create the sender twin
    await upsertTwinApi(url, token, getShortUUID(), getShortUUID(), senderTwinDid, 0, [], [], [], undefined);

    // just for this example describe the twin so the user can see what the twin looks like
    const descResults = await describeTwinApi(url, token, getShortUUID(), getShortUUID(), senderTwinDid, undefined);
    console.log('Created sender twin');
    console.log(JSON.stringify(descResults.toObject(), undefined, 4));

    const input = new UpsertInputWithMeta();
    input.setId(INPUT_NAME);

    const inputValue = new Value();
    inputValue.setLabel(VALUE_NAME);
    inputValue.setComment('part of the message');
    inputValue.setDatatype('string');

    input.setValuesList([inputValue]);
    // create the receiver twin with an input on it
    await upsertTwinApi(url, token, getShortUUID(), getShortUUID(), receiverTwinDid, 0, [], [], [input], undefined);

    // just for this example describe the twin so the user can see what the twin looks like
    const descReceiverTwinResults = await describeTwinApi(
        url,
        token,
        getShortUUID(),
        getShortUUID(),
        receiverTwinDid,
        undefined,
    );
    console.log('Created receiver twin');
    console.log(JSON.stringify(descReceiverTwinResults.toObject(), undefined, 4));

    // just for this example describe the twin's input so the user can see what it looks like
    const descInput = await describeInput(url, token, receiverTwinDid, INPUT_NAME);
    console.log('Describe input');
    console.log(JSON.stringify(descInput.toObject(), undefined, 4));
}

/**
 * start a timer to send the message one character at a time
 */
async function startSendingInputMessages(
    message: string,
    token: string,
    url: string,
    senderTwinDid: string,
    receiverTwinDid: string,
) {
    let messageIndex = 0;

    const intervalId = setInterval(async () => {
        if (messageIndex === message.length - 1) {
            clearInterval(intervalId);
        }

        await sendInputMessage(
            token,
            url,
            {
                [VALUE_NAME]: message[messageIndex],
            },
            senderTwinDid,
            receiverTwinDid,
            INPUT_NAME,
        );

        messageIndex++;
    }, 500);
}

/**
 * wait for messages on the input and stop listening when we have received the last character of the message
 */
async function processMessages(
    inputMessageGenerator: AsyncGenerator<IInputResult | END, void, unknown>,
    lastCharacter: string,
) {
    for await (const message of inputMessageGenerator) {
        const inputResp = message as IInputResult;
        if ((message as IInputResult).status === Status.OK) {
            const objData = inputResp.results?.getMessage()?.getData_asU8();
            const parsedData = JSON.parse(new TextDecoder().decode(objData));

            console.log(`Received message: ${parsedData[VALUE_NAME]}`);

            if (parsedData[VALUE_NAME] === lastCharacter) {
                break;
            }
        }
    }
}

/**
 * clean up all the twins
 */
async function deleteTwins(url: string, token: string, senderTwinDid: string, receiverTwinDid: string) {
    const deleteResp = await deleteTwinApi(url, token, getShortUUID(), getShortUUID(), senderTwinDid);
    console.log('Deleted sender twin');
    console.log(JSON.stringify(deleteResp.toObject(), undefined, 4));

    // just for this example this is how you can delete an input
    const deleteInputResp = await deleteInput(url, token, receiverTwinDid, INPUT_NAME);
    console.log('Deleted twin input');
    console.log(JSON.stringify(deleteInputResp.toObject(), undefined, 4));

    // describe the twin to show that the input is gone
    const descReceiverTwinResults = await describeTwinApi(
        url,
        token,
        getShortUUID(),
        getShortUUID(),
        receiverTwinDid,
        undefined,
    );
    console.log('Describe receiver twin without input');
    console.log(JSON.stringify(descReceiverTwinResults.toObject(), undefined, 4));

    const deleteReceiverResp = await deleteTwinApi(url, token, getShortUUID(), getShortUUID(), receiverTwinDid);
    console.log('Deleted receiver twin');
    console.log(JSON.stringify(deleteReceiverResp.toObject(), undefined, 4));
}

main();
