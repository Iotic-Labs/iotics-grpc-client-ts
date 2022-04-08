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

import "whatwg-fetch";

export { grpc } from "@improbable-eng/grpc-web";

export {
    FeedID,
    TwinID,
    Value,
    GeoCircle,
    GeoLocation,
    LangLiteral,
    Literal,
    Property,
    PropertyUpdate,
    StringLiteral,
    Uri,
    Visibility,
} from "./client/iotics/api/common_pb";
export {
    DescribeFeedResponse,
    Feed,
    UpsertFeedWithMeta,
} from "./client/iotics/api/feed_pb";
export { FetchInterestResponse } from "./client/iotics/api/interest_pb";
export {
    ResponseType,
    SearchRequest,
    SearchResponse,
} from "./client/iotics/api/search_pb";
export {
    DescribeTwinResponse,
    UpsertTwinRequest,
    UpsertTwinResponse,
    UpdateTwinRequest,
    UpdateTwinResponse,
    VisibilityUpdate,
    GeoLocationUpdate,
    Twin,
    FeedMeta,
    ListAllTwinsRequest,
    ListAllTwinsResponse,
} from "./client/iotics/api/twin_pb";
export { describeFeedApi, shareFeedDataApi } from "./feeds";
export { search } from "./search";
export type { ISearchResult } from "./search";
export {
    Scope,
    Visibility as TwinVisibility,
    describeTwinApi,
    upsertTwinApi,
    updateTwinApi,
    deleteTwinApi,
} from "./twins";
export { follow, Status } from "./interest";
export type { IInterestResult } from "./interest";
export { listAllTwins, LIST_ALL_TWINS_PAGE_LENGTH } from "./listAllTwins";
export type { IListResult } from "./listAllTwins";
export { PropertyType, createProperty } from "./properties";
export {
    SparqlQueryRequest,
    SparqlQueryResponse,
    SparqlResultType,
} from "./client/iotics/api/meta_pb";
export { sparqlQuery } from "./sparqlQuery";
export type { IQueryResult } from "./sparqlQuery";

// https://grpc.github.io/grpc/core/md_doc_statuscodes.html
export enum GRPCStatusCodes {
    OK = 0,
    CANCELLED = 1,
    UNKNOWN = 2,
    INVALID_ARGUMENT = 3,
    DEADLINE_EXCEEDED = 4,
    NOT_FOUND = 5,
    ALREADY_EXISTS = 6,
    PERMISSION_DENIED = 7,
    RESOURCE_EXHAUSTED = 8,
    FAILED_PRECONDITION = 9,
    ABORTED = 10,
    OUT_OF_RANGE = 11,
    UNIMPLEMENTED = 12,
    INTERNAL = 13,
    UNAVAILABLE = 14,
    DATA_LOSS = 15,
    UNAUTHENTICATED = 16,
}
