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
import { EventChannel, runSaga, Saga } from 'redux-saga';
import { call, cancelled, CancelledEffect, fork, take } from 'redux-saga/effects';

import {
    ISearchResult,
    PropertyType,
    Scope,
    SearchRequest,
    createProperty,
    // Note the import - it is important for setting default transport to Node for the same instance of gRPC that
    // the `@iotics/grpc-client` is using (in a case of multiple `node_modules`).
    grpc,
    search,
} from '../../src';

const DEFAULT_TIMEOUT = 3; // Seconds

// Enable the use of gRPC-Web in NodeJS.
grpc.setDefaultTransport(NodeHttpTransport());

const RDF_PROPERTY_TYPE = 'http://www.w3.org/1999/02/22-rdf-syntax-ns#type';
const RDF_PROPERTY_TYPE_VALUE_MODEL = 'https://data.iotics.com/app#Model';

function* searchModels(grpcUrl: string, accessToken: string) {
    // Prepare search criteria in here:
    const searchRequestPayload = new SearchRequest.Payload();
    const filter = new SearchRequest.Payload.Filter();
    // Set RDF property to find only twin models:
    filter.setPropertiesList([createProperty(RDF_PROPERTY_TYPE, RDF_PROPERTY_TYPE_VALUE_MODEL, PropertyType.Uri)]);
    searchRequestPayload.setFilter(filter);
    // Start the search.
    const channel: EventChannel<ISearchResult> = yield call(
        search,
        accessToken,
        grpcUrl,
        searchRequestPayload,
        Scope.GLOBAL,
    );
    yield fork(searchModelsWatcher, channel);
}

function* searchModelsWatcher(channel: EventChannel<ISearchResult>) {
    // Handle search results in here:
    let hosts = new Map<string, number>();

    try {
        // Use while loop to ensure that all result messages are handled, i.e. results from remote spaces.
        while (true) {
            console.info('Waiting for a message… ');
            const message: ISearchResult = yield take(channel);
            const hostId = message.results?.getHostid() ?? 'local';
            const twinCount = message.results?.getTwinsList().length ?? 0;
            hosts.set(hostId, (hosts.get(hostId) ?? 0) + twinCount);
            console.info(`Status: "${message.status}" host (ID): "${hostId}" number of twins found: ${twinCount}.`);
        }
    } finally {
        const cancelledEffect: CancelledEffect = yield cancelled();
        if (cancelledEffect) {
            console.info('Generator has been cancelled.');
        }
        channel.close();
        console.info('Channel closed.');
        let totalNumberOfTwins = 0;
        for (let numberOfTwins of hosts.values()) {
            totalNumberOfTwins += numberOfTwins;
        }
        console.info(`Total number of twin models found: ${totalNumberOfTwins} (across ${hosts.size} spaces).`);
    }
}

function main() {
    // Get values from environment variables:
    const url = process.env.GRPC_URL;
    const token = process.env.GRPC_TOKEN;
    const timeoutInMs = parseFloat(process.env.GRPC_TIMEOUT ?? DEFAULT_TIMEOUT.toString()) * 1000;
    if (!url) {
        console.error('Required "GRPC_URL" environment variable is not set!');
        process.exit(1);
    }
    if (!token) {
        console.error('Required "GRPC_TOKEN" environment variable is not set!');
        process.exit(1);
    }
    console.info(`Search for twin models in "${url}".`);
    // Start the search and listen for results:
    const sagaTask = runSaga({}, searchModels as Saga, url, token);
    // Set timeout after which to stop listening for results.
    // Note that some results from remote hosts may be lost if the timeout set is too short.
    setTimeout(() => sagaTask.cancel(), timeoutInMs);
}

main();
