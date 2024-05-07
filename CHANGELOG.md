# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

-   Updated IOTICS API to v1.1.0
    -   Now a federated knowledge graph (FKG) query is performed on a call to SparqlQuery when global scope is requested

## [4.1.0] - 2024-03-25

-   Add exposing fetch store last call and example

## [4.0.1] - 2024-03-15

-   Fixed how we're declaring how we do modules in the package

## [4.0.0] - 2024-01-24

-   BREAKING CHANGE - IOTICS Public API v1.0.1 - removed createdAt from SearchResponse, ListAllTwinsResponse, and DescribeTwinResponse

## [3.1.0] - 2023-06-28

-   Updated IOTICS API to v0.0.19

## [3.0.4] - 2023-04-21

-   Updated README with how to use WebSocket transport.
-   Changed search to not return empty responses for multiple pages.
-   Fixed list all twins to check for error responses before other actions.

## [3.0.3] - 2022-12-22

-   Set mime type of feed share to application/json

## [3.0.2] - 2022-12-14

-   Added function to convert js Date to google protobuf timestamp

## [3.0.1] - 2022-11-01

-   README compatibility table update

## [3.0.0] - 2022-11-01

-   Removed deprecated visibility

## [2.0.1] - 2022-10-12

-   Exposed missing import types

## [2.0.2] - 2022-10-31

-   change to use API v0.0.16 instead of PR

## [2.0.1] - 2022-10-12

-   Exposed missing import types

## [2.0.0] - 2022-10-11

-   BREAKING CHANGE - Update to handle breaking changes in Iotics API, major change here is the change of TwinID Protobuf definition to include hostId (HostTwinDID)

## [1.5.0] - 2022-09-26

-   Update Iotics API to v0.0.13
-   Added wrappers and example for Inputs
-   Added Prettier formatter script via `yarn prettier:write`
-   Added linting script via `yarn lint`
-   Added precommit script via `yarn precommit`
-   Fixed examples/sparqlUpdate.ts invalid import
-   Added github action for linting

## [1.4.0] - 2022-08-04

### Changed

-   Update Iotics API to v0.0.11
-   Regenerated client files from v0.0.11 of [api](https://github.com/Iotic-Labs/api)
-   Added wrapper of ExplorerRequest
-   Added example to use a keyword to initiate ExplorerRequest

## [1.3.0] - 2022-05-21

### Changed

-   Update Iotics API to v0.0.9
-   Regenerated client files from v0.0.9 of [api](https://github.com/Iotic-Labs/api)
-   Created wrapper of SPARQLUpdate RPC call
-   Created example of calling sparqlUpdate wrapper to run a simple query

## [1.2.0] - 2022-04-22

### Changed

-   Changed describeTwinApi call to now also take a remote host id in order to describe twins in remote spaces

## [1.1.1] - 2022-04-12

### Fixed

-   sparqlQuery returns no results where there are > 9 chunks returned.

## [1.1.0] - 2022-03-24

### Added

-   gRPC export in the main file to be used with Node.js based projects utilising the
    [`setDefaultTransport`](https://github.com/improbable-eng/grpc-web/tree/master/client/grpc-web-node-http-transport).
-   An example usage of search run with the `ts-node`.
-   Regenerated client files from v0.0.8 of [api](https://github.com/Iotic-Labs/api)
-   Created thin wrapper of sparqlQuery RPC call
-   Created example of calling sparqlQuery wrapper to run a simple query

### Fixed

-   Missing `whatwg-fetch` dependency.

## [1.0.2] - 2022-03-08

### Added

-   Copyright and license information

## [1.0.1] - 2022-02-17

### Changed

-   Improvements in `listAllTwins` for better pagination and error handlings.

## [1.0.0] - 2022-02-16

### Added

-   Initial release of `iotics-grpc-client-ts`.

[Unreleased]: https://github.com/Iotic-Labs/iotics-grpc-client-ts/compare/v4.1.0...HEAD
[4.1.0]: https://github.com/Iotic-Labs/iotics-grpc-client-ts/compare/v4.0.1...v4.1.0
[4.0.1]: https://github.com/Iotic-Labs/iotics-grpc-client-ts/compare/v4.0.0...v4.0.1
[4.0.0]: https://github.com/Iotic-Labs/iotics-grpc-client-ts/compare/v3.1.0...v4.0.0
[3.1.0]: https://github.com/Iotic-Labs/iotics-grpc-client-ts/compare/v3.0.4...v3.1.0
[3.0.4]: https://github.com/Iotic-Labs/iotics-grpc-client-ts/compare/v3.0.3...v3.0.4
[3.0.3]: https://github.com/Iotic-Labs/iotics-grpc-client-ts/compare/v3.0.2...v3.0.3
[3.0.2]: https://github.com/Iotic-Labs/iotics-grpc-client-ts/compare/v3.0.1...v3.0.2
[3.0.1]: https://github.com/Iotic-Labs/iotics-grpc-client-ts/compare/v3.0.0...v3.0.1
[3.0.0]: https://github.com/Iotic-Labs/iotics-grpc-client-ts/compare/v2.0.1...v3.0.0
[2.0.2]: https://github.com/Iotic-Labs/iotics-grpc-client-ts/compare/v2.0.1...v2.0.2
[2.0.1]: https://github.com/Iotic-Labs/iotics-grpc-client-ts/compare/v2.0.0...v2.0.1
[2.0.0]: https://github.com/Iotic-Labs/iotics-grpc-client-ts/compare/v1.5.0...v2.0.0
[1.5.0]: https://github.com/Iotic-Labs/iotics-grpc-client-ts/compare/v1.4.0...v1.5.0
[1.4.0]: https://github.com/Iotic-Labs/iotics-grpc-client-ts/compare/v1.3.0...v1.4.0
[1.3.0]: https://github.com/Iotic-Labs/iotics-grpc-client-ts/compare/v1.2.0...v1.3.0
[1.2.0]: https://github.com/Iotic-Labs/iotics-grpc-client-ts/compare/v1.1.1...v1.2.0
[1.1.1]: https://github.com/Iotic-Labs/iotics-grpc-client-ts/compare/v1.1.0...v1.1.1
[1.1.0]: https://github.com/Iotic-Labs/iotics-grpc-client-ts/compare/v1.0.2...v1.1.0
[1.0.2]: https://github.com/Iotic-Labs/iotics-grpc-client-ts/compare/v1.0.1...v1.0.2
[1.0.1]: https://github.com/Iotic-Labs/iotics-grpc-client-ts/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/Iotic-Labs/iotics-grpc-client-ts/releases/tag/v1.0.0
