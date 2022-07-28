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

import { NodeHttpTransport } from "@improbable-eng/grpc-web-node-http-transport";
import { EventChannel } from "redux-saga";

import {
    grpc,
    explorerQuery,
    GRPCStatusCodes,
    IQueryResult,
    Scope,
    SparqlResultType,
} from "../../src";
import { channelToGenerator } from "../../src/helpers";

const DEFAULT_TIMEOUT = 10;
// Enable the use of gRPC-Web in NodeJS.
grpc.setDefaultTransport(NodeHttpTransport());

function main() {
    // query for all of the models and return their labels
    const keyword = `waterloo`;
    runExplorerQuery(keyword);
}

export const runExplorerQuery = async (keyword: string) => {
    // Get values from environment variables:
    const url = process.env.GRPC_URL;
    const token = process.env.GRPC_TOKEN;
    const timeoutInS = parseFloat(
        process.env.GRPC_TIMEOUT ?? DEFAULT_TIMEOUT.toString()
    );

    if (!url) {
        console.error('Required "GRPC_URL" environment variable is not set!');
        process.exit(1);
    }
    if (!token) {
        console.error('Required "GRPC_TOKEN" environment variable is not set!');
        process.exit(1);
    }

    console.info(`Explorer Query for twin models in "${url}".`);

    const channel: EventChannel<IQueryResult> = explorerQuery(
        token,
        url,
        keyword,
        Scope.GLOBAL,
        SparqlResultType.RDF_TURTLE,
        timeoutInS
    ) as EventChannel<IQueryResult>;

    const searchGenerator = channelToGenerator(channel);

    for await (const message of searchGenerator) {
        const msg = message as IQueryResult;
        console.info("Message received with status:", msg.status);
        if (msg.status.message === "OK" && msg.results) {
            console.info("Query results:");
            console.info(msg.results.data);
        } else {
            if (msg.status?.code === GRPCStatusCodes.UNAUTHENTICATED) {
                console.warn(
                    "The GRPC_TOKEN has expired please set another one."
                );
            } else if (msg.status?.code !== GRPCStatusCodes.DEADLINE_EXCEEDED) {
                // if not context deadline exceeded messages
                console.warn("Query error:", msg.status);
            }
        }
    }
};

main();
