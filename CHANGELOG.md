# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).


## [Unreleased]
### Added
- gRPC export in the main file to be used with Node.js based projects utilising the
  [`setDefaultTransport`](https://github.com/improbable-eng/grpc-web/tree/master/client/grpc-web-node-http-transport).
- An example usage of search run with the `ts-node`.

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


[Unreleased]: https://github.com/Iotic-Labs/iotics-grpc-client-ts/compare/v1.0.2...HEAD
[1.0.2]: https://github.com/Iotic-Labs/iotics-grpc-client-ts/compare/v1.0.1...v1.0.2
[1.0.1]: https://github.com/Iotic-Labs/iotics-grpc-client-ts/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/Iotic-Labs/iotics-grpc-client-ts/releases/tag/v1.0.0
