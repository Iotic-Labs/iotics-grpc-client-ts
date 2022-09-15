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
    sparqlUpdate,
    GRPCStatusCodes,
} from '../../src';
import { DEFAULT_TIMEOUT } from '../../src/sparqlUpdate';
import { runSparqlQuery } from './sparqlQuery';
import { sleep } from './helpers';

// Enable the use of gRPC-Web in NodeJS.
grpc.setDefaultTransport(NodeHttpTransport());

async function main() {
    // Get values from environment variables:
    const url = process.env.GRPC_URL;
    const token = process.env.GRPC_TOKEN;
    const timeoutInS = parseFloat(process.env.GRPC_TIMEOUT ?? DEFAULT_TIMEOUT.toString());
    let update = `
PREFIX iotg: <http://data.iotics.com/graph#>
INSERT DATA {
    GRAPH iotg:custom-public {
        <http://myontology.com/foo> a <http://myontology.com/bar> .
    }
}
`;

    const query = `
PREFIX iotg: <http://data.iotics.com/graph#>
SELECT ?s ?p ?o
FROM iotg:custom-public
WHERE {
    ?s ?p ?o
}
`;

    const cleanup = `
PREFIX iotg: <http://data.iotics.com/graph#>
DELETE DATA {
    GRAPH iotg:custom-public {
        <http://myontology.com/foo> a <http://myontology.com/bar> .
    }
}
`;

    if (!url) {
        console.error('Required "GRPC_URL" environment variable is not set!');
        process.exit(1);
    }
    if (!token) {
        console.error('Required "GRPC_TOKEN" environment variable is not set!');
        process.exit(1);
    }

    console.info('SparQL Update.');

    try {
        console.log('Doing initial query');
        runSparqlQuery(query);
        await sleep(1000);

        console.log('Doing update');
        let results = await sparqlUpdate(token, url, update, timeoutInS);
        console.log(JSON.stringify(results.toObject(), undefined, 4));
        await sleep(timeoutInS * 1000);

        console.log('Doing query');
        runSparqlQuery(query);

        // Changes are visible via SparqlQuery , within 5 seconds
        await sleep(timeoutInS * 1000);
        console.log('Doing cleanup');
        results = await sparqlUpdate(token, url, cleanup, timeoutInS);
        console.log(JSON.stringify(results.toObject(), undefined, 4));
        console.log('Doing RE-QUERY (bindings should be empty)');
        runSparqlQuery(query);
    } catch (error: any) {
        if (error?.code === GRPCStatusCodes.UNAUTHENTICATED) {
            console.info('Your GRPC_TOKEN may have expired please try setting another one');
        }

        if (error?.code === GRPCStatusCodes.UNKNOWN) {
            console.log('Response closed without headers');
        }
    }
}

main();
