# Iotics gRPC-Web
A JavaScript/TypeScript browser client for doing calls to Iotics API.


## Usage
```shell
yarn add @iotics/grpc-client
```


# Examples
* [ts-node](./examples/tsnode/README.md) - example usages within Node.js runtime environment.


## Contributing


### Installing dependencies and generating gRPC client
* To satisfy all dependencies and generate client - in a fresh clone of this repo:
  ```shell
  make build
  ```
* To update dependencies and regenerate files - in already existing local repo:
  ```shell
  make clean build
  ```
* To update the Iotics API version and regenerate client  
  (proto files are submoduled in [./iotics-api.git/](./iotics-api.git)
  from [Iotics API](https://github.com/Iotic-Labs/api) repo)  
  use the following as guidelines:
  ```bash
  _ver=vX.X.X
  pushd iotics-api.git
  git fetch --tags
  git checkout "tags/$_ver"
  popd
  make generate-update
  # Address usages of the new client in `src` and update "Unreleased" section in CHANGELOG.md
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
* Update package version in [package.json](./package.json) for the release:
  ```bash
  yarn version --no-git-tag-version --patch
  ```
  * For release candidates:
    ```bash
    yarn version --no-git-tag-version --preid rc --prerelease
    ```
  * More about updating version: https://classic.yarnpkg.com/en/docs/cli/version
* Update [CHANGELOG.md](./CHANGELOG.md) (move notes from unreleased section, ensure right tags are used, etc.)
  and any other files as needed.
* Commit changes and create a [PR](https://github.com/Iotic-Labs/iotics-grpc-client-ts/compare).
* Once PR is merged, tag the commit:
  ```bash
  _ver=vX.X.X  # _ver="v$(grep version package.json |cut -d'"' -f4)"
  git tag -a "$_ver" -m "$_ver"
  git push origin "$_ver"
  ```
* The [Draft Release GitHub Action](https://github.com/Iotic-Labs/iotics-grpc-client-ts/actions/workflows/draft_release.yml)
  will pick it up and create a draft release in [releases](https://github.com/Iotic-Labs/iotics-grpc-client-ts/releases).
* Update the release's information and publish it.
* The [Publish GitHub Action](https://github.com/Iotic-Labs/iotics-grpc-client-ts/actions/workflows/publish.yml)
  will create a package and will publish it to the [NPM](https://www.npmjs.com/package/@iotics/grpc-client).
  Note that at this point, the package for the specified version can no longer be changed.
  To learn more about how the npm registry treats versions, see their
  [unpublish policies](https://docs.npmjs.com/policies/unpublish).
