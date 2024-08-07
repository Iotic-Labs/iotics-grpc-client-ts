# Iotics gRPC-Web

A JavaScript/TypeScript client for interacting with Iotics API.

## Usage and Version Compatibility with Iotics host:

| iotics-grpc-client-ts             | iotics-host |
| --------------------------------- | ----------- |
| `yarn add @iotics/grpc-client@^6` | `>= 5`      |
| `yarn add @iotics/grpc-client@^5` | `>= 5`      |
| `yarn add @iotics/grpc-client@^4` | `>= 5`      |
| `yarn add @iotics/grpc-client@^3` | `>= 5`      |
| `yarn add @iotics/grpc-client@^2` | `>= 5`      |
| `yarn add @iotics/grpc-client@^1` | `>= 4`      |

### gRPC-Web transports

Iotics client can be run over WebSocket in case HTTP2 is not available or bidirectional streaming is required. To use
WebSockets instead of HTTP, import the `grpc` from the Iotics client and set the default transport like so:

```ts
import { grpc } from '@iotics/grpc-client';
grpc.setDefaultTransport(grpc.WebsocketTransport());
```

Additionally, to be able to run Iotics client using Node.js (see [Examples](#examples) section below), the transport could be set to:

```ts
grpc.setDefaultTransport(NodeHttpTransport());
```

By default, the transport is set to cross browser:

```ts
grpc.setDefaultTransport(grpc.CrossBrowserHttpTransport({ withCredentials: false }));
```

### Examples

-   [ts-node](./examples/README.md) - example usages within Node.js runtime environment.

## Contributing

### Installing dependencies and generating gRPC client

-   To satisfy all dependencies and generate client - in a fresh clone of this repo:
    ```shell
    make build
    ```
-   To update dependencies and regenerate files - in already existing local repo:
    ```shell
    make clean build
    ```
-   To update the Iotics API version and regenerate client  
    (proto files are submoduled in [./iotics-api.git/](./iotics-api.git)
    from [Iotics API](https://github.com/Iotic-Labs/api) repo)  
    use the following as guidelines:
    ```bash
    git submodule update --init
    _ver=vX.X.X
    pushd iotics-api.git
    git fetch --tags
    git checkout "tags/$_ver"
    popd
    make generate-update
    # After addressing the changes of the new client in `src`, please update "Unreleased" section in CHANGELOG.md
    git add CHANGELOG.md iotics-api.git src
    git commit -m "Update Iotics API to $_ver"
    git push
    ```

### PRs

Should contain a summary of the changes in [CHANGELOG.md](./CHANGELOG.md) under the "Unreleased" section.

### Releasing

> **Note:**
> Currently this package is not easy to use,
> hence it may contain breaking changes between patches until v2 is realeased.

-   Update package version in [package.json](./package.json) for the release:
    ```bash
    yarn version --no-git-tag-version --patch
    ```
    -   For release candidates:
        ```bash
        yarn version --no-git-tag-version --preid rc --prerelease
        ```
    -   More about updating version: https://classic.yarnpkg.com/en/docs/cli/version
-   Update [CHANGELOG.md](./CHANGELOG.md) (move notes from unreleased section, ensure right tags are used, etc.)
    and any other files as needed.
-   Commit changes and create a [PR](https://github.com/Iotic-Labs/iotics-grpc-client-ts/compare).
-   Once PR is merged, tag the commit:
    ```bash
    _ver=vX.X.X  # _ver="v$(grep version package.json |cut -d'"' -f4)"
    git tag -a "$_ver" -m "$_ver"
    git push origin "$_ver"
    ```
-   The [Draft Release GitHub Action](https://github.com/Iotic-Labs/iotics-grpc-client-ts/actions/workflows/draft_release.yml)
    will pick it up and create a draft release in [releases](https://github.com/Iotic-Labs/iotics-grpc-client-ts/releases).
-   Update the release's information and publish it.
-   The [Publish GitHub Action](https://github.com/Iotic-Labs/iotics-grpc-client-ts/actions/workflows/publish.yml)
    will create a package and will publish it to the [NPM](https://www.npmjs.com/package/@iotics/grpc-client).
    Note that at this point, the package for the specified version can no longer be changed.
    To learn more about how the npm registry treats versions, see their
    [unpublish policies](https://docs.npmjs.com/policies/unpublish).
