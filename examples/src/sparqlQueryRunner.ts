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
import { EventChannel, Saga, runSaga } from "redux-saga";
import {
    CancelledEffect,
    call,
    cancelled,
    fork,
    take,
} from "redux-saga/effects";

import {
    Scope,
    // Note the import - it is important for setting default transport to Node for the same instance of gRPC that
    // the `@iotics/grpc-client` is using (in a case of multiple `node_modules`).
    grpc,
    IQueryResult,
    sparqlQuery,
    SparqlResultType,
    GRPCStatusCodes,
} from "../../src";

const DEFAULT_TIMEOUT = 3; // Seconds

// Enable the use of gRPC-Web in NodeJS.
grpc.setDefaultTransport(NodeHttpTransport());

function* runWithQuery(
    grpcUrl: string,
    accessToken: string,
    timeoutInS: number,
    query: string
) {
    const channel: EventChannel<IQueryResult> = yield call(
        sparqlQuery,
        accessToken,
        grpcUrl,
        query,
        Scope.LOCAL,
        SparqlResultType.SPARQL_JSON,
        timeoutInS
    );
    yield fork(sparqlQueryResultsWatcher, channel);
}

function* sparqlQueryResultsWatcher(channel: EventChannel<IQueryResult>) {
    // Handle query results in here:
    try {
        try {
            console.info("Wait for a message...");
            const message: IQueryResult = yield take(channel);
            console.info("Message received with status:", message.status);
            if (message.status.message === "OK" && message?.results) {
                console.info(
                    "Host id:",
                    message?.results.hostId ?? "local host"
                );
                console.info("Query results:");
                console.info(message?.results.data);
            } else {
                if (message?.status?.code === GRPCStatusCodes.UNAUTHENTICATED) {
                    console.warn(
                        "The GRPC_TOKEN has expired please set another one."
                    );
                } else if (
                    message?.status?.code !== GRPCStatusCodes.DEADLINE_EXCEEDED
                ) {
                    // if not context deadline exceeded messages
                    console.warn("Query error:", message?.status);
                }
            }
        } catch (error) {
            console.warn("Unhandled sparqlQueryResultsWatcher error:", error);
        }
    } finally {
        const cancelledEffect: CancelledEffect = yield cancelled();
        if (cancelledEffect) {
            console.info("Generator has been cancelled.");
        }
        channel.close();
        console.info("Channel closed.");
    }
}

export function runSparqlQuery(query: string) {
    // Get values from environment variables:
    const url = process.env.GRPC_URL;
    const token = process.env.GRPC_TOKEN;
    const timeoutInS = parseFloat(
        process.env.GRPC_TIMEOUT ?? DEFAULT_TIMEOUT.toString()
    );
    const timeoutInMs = timeoutInS * 1000;

    if (!url) {
        console.error('Required "GRPC_URL" environment variable is not set!');
        process.exit(1);
    }
    if (!token) {
        console.error('Required "GRPC_TOKEN" environment variable is not set!');
        process.exit(1);
    }

    console.info(`Query for twin models in "${url}".`);

    // Run the query and listen for results:
    const sagaTask = runSaga(
        {},
        runWithQuery as Saga,
        url,
        token,
        timeoutInS,
        query
    );

    // Set timeout after which to stop listening for results.
    setTimeout(() => sagaTask.cancel(), timeoutInMs);
}
