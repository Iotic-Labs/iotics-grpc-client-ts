# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).


## [Unreleased]

## [1.3.0] - 2022-05-21
### Changed
- Update Iotics API to v0.0.9
- Regenerated client files from v0.0.9 of [api](https://github.com/Iotic-Labs/api)
- Created wrapper of SPARQLUpdate RPC call
- Created example of calling sparqlUpdate wrapper to run a simple query

## [1.2.0] - 2022-04-22
### Changed
- Changed describeTwinApi call to now also take a remote host id in order to describe twins in remote spaces

## [1.1.1] - 2022-04-12
### Fixed
- sparqlQuery returns no results where there are > 9 chunks returned.

## [1.1.0] - 2022-03-24
### Added
- gRPC export in the main file to be used with Node.js based projects utilising the
  [`setDefaultTransport`](https://github.com/improbable-eng/grpc-web/tree/master/client/grpc-web-node-http-transport).
- An example usage of search run with the `ts-node`.
- Regenerated client files from v0.0.8 of [api](https://github.com/Iotic-Labs/api)
- Created thin wrapper of sparqlQuery RPC call
- Created example of calling sparqlQuery wrapper to run a simple query

### Fixed
- Missing `whatwg-fetch` dependency.

## [1.0.2] - 2022-03-08
### Added
- Copyright and license information


## [1.0.1] - 2022-02-17
### Changed
- Improvements in `listAllTwins` for better pagination and error handlings.


## [1.0.0] - 2022-02-16
### Added
- Initial release of `iotics-grpc-client-ts`.


[Unreleased]: https://github.com/Iotic-Labs/iotics-grpc-client-ts/compare/v1.3.0...HEAD
[1.3.0]: https://github.com/Iotic-Labs/iotics-grpc-client-ts/compare/v1.2.0...v1.3.0
[1.2.0]: https://github.com/Iotic-Labs/iotics-grpc-client-ts/compare/v1.1.1...v1.2.0
[1.1.1]: https://github.com/Iotic-Labs/iotics-grpc-client-ts/compare/v1.1.0...v1.1.1
[1.1.0]: https://github.com/Iotic-Labs/iotics-grpc-client-ts/compare/v1.0.2...v1.1.0
[1.0.2]: https://github.com/Iotic-Labs/iotics-grpc-client-ts/compare/v1.0.1...v1.0.2
[1.0.1]: https://github.com/Iotic-Labs/iotics-grpc-client-ts/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/Iotic-Labs/iotics-grpc-client-ts/releases/tag/v1.0.0
