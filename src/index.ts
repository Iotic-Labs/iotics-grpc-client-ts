import 'whatwg-fetch';

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
} from './client/iotics/api/common_pb';
export { DescribeFeedResponse, Feed, UpsertFeedWithMeta } from './client/iotics/api/feed_pb';
export { FetchInterestResponse } from './client/iotics/api/interest_pb';
export { ResponseType, SearchRequest, SearchResponse } from './client/iotics/api/search_pb';
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
} from './client/iotics/api/twin_pb';
export { describeFeedApi, shareFeedDataApi } from './feeds';
export { search } from './search';
export type { ISearchResult } from './search';
export { Scope, Visibility as TwinVisibility, describeTwinApi, upsertTwinApi, updateTwinApi, deleteTwinApi } from './twins';
export { follow, Status } from './interest';
export type { IInterestResult } from './interest';
