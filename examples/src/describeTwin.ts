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
import {
    // Note the import - it is important for setting default transport to Node for the same instance of gRPC that
    // the `@iotics/grpc-client` is using (in a case of multiple `node_modules`).
    grpc,
    describeTwinApi,
    GRPCStatusCodes,
    getShortUUID,
    describeFeedApi,
    fetchLastStored,
} from '@iotics/grpc-client';


// Enable the use of gRPC-Web in NodeJS.
grpc.setDefaultTransport(NodeHttpTransport());

async function main() {
    // Get values from environment variables:
    const url = process.env.GRPC_URL;
    const token = process.env.GRPC_TOKEN;
    const twinDid = process.env.TWIN_DID;

    // optional remote host id for describing a twin that is in a different space
    const remoteHostId = process.env.REMOTE_HOST_ID;

    if (!url) {
        console.error('Required "GRPC_URL" environment variable is not set!');
        process.exit(1);
    }
    if (!token) {
        console.error('Required "GRPC_TOKEN" environment variable is not set!');
        process.exit(1);
    }
    if (!twinDid) {
        console.error('Required "TWIN_DID" twin to be described variable is not set!');
        process.exit(1);
    }

    console.info(`Describe twin "${twinDid}".`);

    let results;
    try {
        results = await describeTwinApi(url, token, getShortUUID(), getShortUUID(), twinDid, remoteHostId);
        console.log(JSON.stringify(results.toObject(), undefined, 4));
    } catch (error: any) {
        if (error?.code === GRPCStatusCodes.UNAUTHENTICATED) {
            console.info('Your GRPC_TOKEN may have expired please try setting another one');
        }
    }

    const feedsList = results?.getResult()?.getFeedsList() ?? [];

    if (feedsList.length === 0) {
        console.info('No feeds to describe');
        return;
    }

    console.info(`Describing feeds of twin "${twinDid}".`);

    try {
        for (const feedMeta of feedsList) {
            const feedId = feedMeta.getFeedid()?.getId();
            if (!feedId) {
                console.error(`Could not get feed id of feed ${feedMeta}`);
                continue;
            }

            const feedDescribePayload = await describeFeedApi(url, token, getShortUUID(),
                getShortUUID(), remoteHostId ?? '', twinDid, feedId);

            console.log(JSON.stringify(feedDescribePayload.toObject(), undefined, 4));

            console.info(`Getting last value on feed id: "${feedId}".`);

            const lastStoredPayload = await fetchLastStored(url, token, getShortUUID(),
                getShortUUID(), twinDid, twinDid, feedId, remoteHostId);

            console.log(JSON.stringify(lastStoredPayload?.getFeeddata()?.toObject()));

            console.info('Decoding feed data.');
            const data64 = lastStoredPayload?.getFeeddata()?.getData_asB64() ?? '';
            const decodedData = decodeURIComponent(escape(atob(data64)));
            try {
                console.log(JSON.stringify(JSON.parse(decodedData)));
            } catch (err) {
                console.error(`Failed parsing update from twin: ${twinDid}, data: ${data64}`);
            }
        }
    }
    catch (error: any) {
        if (error?.code === GRPCStatusCodes.UNAUTHENTICATED) {
            console.info('Your GRPC_TOKEN may have expired please try setting another one');
        }
    }
}

main();
