// package: iotics.api
// file: iotics/api/search.proto

import * as iotics_api_search_pb from "../../iotics/api/search_pb";
import * as iotics_api_common_pb from "../../iotics/api/common_pb";
import {grpc} from "@improbable-eng/grpc-web";

type SearchAPIDispatchSearchRequest = {
  readonly methodName: string;
  readonly service: typeof SearchAPI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof iotics_api_search_pb.SearchRequest;
  readonly responseType: typeof iotics_api_search_pb.DispatchSearchResponse;
};

type SearchAPISynchronousSearch = {
  readonly methodName: string;
  readonly service: typeof SearchAPI;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof iotics_api_search_pb.SearchRequest;
  readonly responseType: typeof iotics_api_search_pb.SearchResponse;
};

type SearchAPIReceiveAllSearchResponses = {
  readonly methodName: string;
  readonly service: typeof SearchAPI;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof iotics_api_common_pb.SubscriptionHeaders;
  readonly responseType: typeof iotics_api_search_pb.SearchResponse;
};

type SearchAPIAdvancedSearch = {
  readonly methodName: string;
  readonly service: typeof SearchAPI;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof iotics_api_search_pb.AdvancedSearchRequest;
  readonly responseType: typeof iotics_api_search_pb.SearchResponse;
};

export class SearchAPI {
  static readonly serviceName: string;
  static readonly DispatchSearchRequest: SearchAPIDispatchSearchRequest;
  static readonly SynchronousSearch: SearchAPISynchronousSearch;
  static readonly ReceiveAllSearchResponses: SearchAPIReceiveAllSearchResponses;
  static readonly AdvancedSearch: SearchAPIAdvancedSearch;
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

export class SearchAPIClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  dispatchSearchRequest(
    requestMessage: iotics_api_search_pb.SearchRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: iotics_api_search_pb.DispatchSearchResponse|null) => void
  ): UnaryResponse;
  dispatchSearchRequest(
    requestMessage: iotics_api_search_pb.SearchRequest,
    callback: (error: ServiceError|null, responseMessage: iotics_api_search_pb.DispatchSearchResponse|null) => void
  ): UnaryResponse;
  synchronousSearch(requestMessage: iotics_api_search_pb.SearchRequest, metadata?: grpc.Metadata): ResponseStream<iotics_api_search_pb.SearchResponse>;
  receiveAllSearchResponses(requestMessage: iotics_api_common_pb.SubscriptionHeaders, metadata?: grpc.Metadata): ResponseStream<iotics_api_search_pb.SearchResponse>;
  advancedSearch(requestMessage: iotics_api_search_pb.AdvancedSearchRequest, metadata?: grpc.Metadata): ResponseStream<iotics_api_search_pb.SearchResponse>;
}

