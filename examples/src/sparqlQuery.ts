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

import { runSparqlQuery } from "./sparqlQueryRunner";

function main() {
    // query for all of the models and return their labels
    const query = `PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
        PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
        PREFIX iotics: <http://data.iotics.com/iotics#>
        PREFIX ioticsApp: <https://data.iotics.com/app#>
        
        SELECT ?label
        WHERE
        {
            ?twin rdf:type iotics:DigitalTwin .
            ?twin rdf:type ioticsApp:Model .
            ?twin rdfs:label ?label .
        }
        ORDER BY ?label`;
    runSparqlQuery(query);
}

main();
