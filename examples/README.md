# Iotics gRPC-Web example with ts-node
An example project showing how to use the Iotics gRPC-Web TypeScript client in Node.js runtime environment
to communicate with IOTICSpaces to e.g. search twin models.


## Quick start
* The version of Node.js needed to run the examples is set in the [.node_version](./.node-version) file.
* `yarn` - install dependencies.
* Set a URL to the gRPC-Web server of the space you want to send queries to and an access token:
  ```bash
   export GRPC_URL=
   export GRPC_TOKEN=
  ```
* Run an example:
  * [`searchModels.ts`](./src/searchModels.ts) - look for twin models using RDF property, in a GLOBAL scope:
    * `yarn search-twin-models` - default timeout: 3 seconds.
    * `GRPC_TIMEOUT=0.2 yarn search-twin-models` - search with custom timeout.
  * [`sparqlQuery.ts`](./src/sparqlQuery.ts) - Run a sparql query which returns the labels of all the model twins in the LOCAL scope:
    * `yarn run-sparql-query` - default timeout: 3 seconds.
  * [`describeTwin.ts`](./src/describeTwin.ts) - Describe a twin, set TWIN_DID and optionally REMOTE_HOST_ID environment variables: 
    * `TWIN_DID=did:iotics:abcdefg yarn run-describe-twin`
  * [`sparqlUpdate.ts`](./src/sparqlUpdate.ts) - Run a sparql update which creates, queries and deletes nodes in a custom graph:
    * `yarn run-sparql-update` - default timeout: 5 seconds.
