// package: iotics.api
// file: iotics/api/feed.proto

import * as iotics_api_feed_pb from "../../iotics/api/feed_pb";
import {grpc} from "@improbable-eng/grpc-web";

type FeedAPICreateFeed = {
  readonly methodName: string;
  readonly service: typeof FeedAPI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof iotics_api_feed_pb.CreateFeedRequest;
  readonly responseType: typeof iotics_api_feed_pb.CreateFeedResponse;
};

type FeedAPIDeleteFeed = {
  readonly methodName: string;
  readonly service: typeof FeedAPI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof iotics_api_feed_pb.DeleteFeedRequest;
  readonly responseType: typeof iotics_api_feed_pb.DeleteFeedResponse;
};

type FeedAPIUpdateFeed = {
  readonly methodName: string;
  readonly service: typeof FeedAPI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof iotics_api_feed_pb.UpdateFeedRequest;
  readonly responseType: typeof iotics_api_feed_pb.UpdateFeedResponse;
};

type FeedAPIShareFeedData = {
  readonly methodName: string;
  readonly service: typeof FeedAPI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof iotics_api_feed_pb.ShareFeedDataRequest;
  readonly responseType: typeof iotics_api_feed_pb.ShareFeedDataResponse;
};

type FeedAPIListAllFeeds = {
  readonly methodName: string;
  readonly service: typeof FeedAPI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof iotics_api_feed_pb.ListAllFeedsRequest;
  readonly responseType: typeof iotics_api_feed_pb.ListAllFeedsResponse;
};

type FeedAPIDescribeFeed = {
  readonly methodName: string;
  readonly service: typeof FeedAPI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof iotics_api_feed_pb.DescribeFeedRequest;
  readonly responseType: typeof iotics_api_feed_pb.DescribeFeedResponse;
};

export class FeedAPI {
  static readonly serviceName: string;
  static readonly CreateFeed: FeedAPICreateFeed;
  static readonly DeleteFeed: FeedAPIDeleteFeed;
  static readonly UpdateFeed: FeedAPIUpdateFeed;
  static readonly ShareFeedData: FeedAPIShareFeedData;
  static readonly ListAllFeeds: FeedAPIListAllFeeds;
  static readonly DescribeFeed: FeedAPIDescribeFeed;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class FeedAPIClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  createFeed(
    requestMessage: iotics_api_feed_pb.CreateFeedRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: iotics_api_feed_pb.CreateFeedResponse|null) => void
  ): UnaryResponse;
  createFeed(
    requestMessage: iotics_api_feed_pb.CreateFeedRequest,
    callback: (error: ServiceError|null, responseMessage: iotics_api_feed_pb.CreateFeedResponse|null) => void
  ): UnaryResponse;
  deleteFeed(
    requestMessage: iotics_api_feed_pb.DeleteFeedRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: iotics_api_feed_pb.DeleteFeedResponse|null) => void
  ): UnaryResponse;
  deleteFeed(
    requestMessage: iotics_api_feed_pb.DeleteFeedRequest,
    callback: (error: ServiceError|null, responseMessage: iotics_api_feed_pb.DeleteFeedResponse|null) => void
  ): UnaryResponse;
  updateFeed(
    requestMessage: iotics_api_feed_pb.UpdateFeedRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: iotics_api_feed_pb.UpdateFeedResponse|null) => void
  ): UnaryResponse;
  updateFeed(
    requestMessage: iotics_api_feed_pb.UpdateFeedRequest,
    callback: (error: ServiceError|null, responseMessage: iotics_api_feed_pb.UpdateFeedResponse|null) => void
  ): UnaryResponse;
  shareFeedData(
    requestMessage: iotics_api_feed_pb.ShareFeedDataRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: iotics_api_feed_pb.ShareFeedDataResponse|null) => void
  ): UnaryResponse;
  shareFeedData(
    requestMessage: iotics_api_feed_pb.ShareFeedDataRequest,
    callback: (error: ServiceError|null, responseMessage: iotics_api_feed_pb.ShareFeedDataResponse|null) => void
  ): UnaryResponse;
  listAllFeeds(
    requestMessage: iotics_api_feed_pb.ListAllFeedsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: iotics_api_feed_pb.ListAllFeedsResponse|null) => void
  ): UnaryResponse;
  listAllFeeds(
    requestMessage: iotics_api_feed_pb.ListAllFeedsRequest,
    callback: (error: ServiceError|null, responseMessage: iotics_api_feed_pb.ListAllFeedsResponse|null) => void
  ): UnaryResponse;
  describeFeed(
    requestMessage: iotics_api_feed_pb.DescribeFeedRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: iotics_api_feed_pb.DescribeFeedResponse|null) => void
  ): UnaryResponse;
  describeFeed(
    requestMessage: iotics_api_feed_pb.DescribeFeedRequest,
    callback: (error: ServiceError|null, responseMessage: iotics_api_feed_pb.DescribeFeedResponse|null) => void
  ): UnaryResponse;
}

