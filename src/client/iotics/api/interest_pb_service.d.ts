// package: iotics.api
// file: iotics/api/interest.proto

import * as iotics_api_interest_pb from "../../iotics/api/interest_pb";
import {grpc} from "@improbable-eng/grpc-web";

type InterestAPIFetchInterests = {
  readonly methodName: string;
  readonly service: typeof InterestAPI;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof iotics_api_interest_pb.FetchInterestRequest;
  readonly responseType: typeof iotics_api_interest_pb.FetchInterestResponse;
};

type InterestAPIFetchLastStored = {
  readonly methodName: string;
  readonly service: typeof InterestAPI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof iotics_api_interest_pb.FetchLastStoredRequest;
  readonly responseType: typeof iotics_api_interest_pb.FetchInterestResponse;
};

type InterestAPIListAllInterests = {
  readonly methodName: string;
  readonly service: typeof InterestAPI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof iotics_api_interest_pb.ListAllInterestsRequest;
  readonly responseType: typeof iotics_api_interest_pb.ListAllInterestsResponse;
};

type InterestAPICreateInterest = {
  readonly methodName: string;
  readonly service: typeof InterestAPI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof iotics_api_interest_pb.CreateInterestRequest;
  readonly responseType: typeof iotics_api_interest_pb.CreateInterestResponse;
};

type InterestAPIDeleteInterest = {
  readonly methodName: string;
  readonly service: typeof InterestAPI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof iotics_api_interest_pb.DeleteInterestRequest;
  readonly responseType: typeof iotics_api_interest_pb.DeleteInterestResponse;
};

type InterestAPISendInputMessage = {
  readonly methodName: string;
  readonly service: typeof InterestAPI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof iotics_api_interest_pb.SendInputMessageRequest;
  readonly responseType: typeof iotics_api_interest_pb.SendInputMessageResponse;
};

export class InterestAPI {
  static readonly serviceName: string;
  static readonly FetchInterests: InterestAPIFetchInterests;
  static readonly FetchLastStored: InterestAPIFetchLastStored;
  static readonly ListAllInterests: InterestAPIListAllInterests;
  static readonly CreateInterest: InterestAPICreateInterest;
  static readonly DeleteInterest: InterestAPIDeleteInterest;
  static readonly SendInputMessage: InterestAPISendInputMessage;
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

export class InterestAPIClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  fetchInterests(requestMessage: iotics_api_interest_pb.FetchInterestRequest, metadata?: grpc.Metadata): ResponseStream<iotics_api_interest_pb.FetchInterestResponse>;
  fetchLastStored(
    requestMessage: iotics_api_interest_pb.FetchLastStoredRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: iotics_api_interest_pb.FetchInterestResponse|null) => void
  ): UnaryResponse;
  fetchLastStored(
    requestMessage: iotics_api_interest_pb.FetchLastStoredRequest,
    callback: (error: ServiceError|null, responseMessage: iotics_api_interest_pb.FetchInterestResponse|null) => void
  ): UnaryResponse;
  listAllInterests(
    requestMessage: iotics_api_interest_pb.ListAllInterestsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: iotics_api_interest_pb.ListAllInterestsResponse|null) => void
  ): UnaryResponse;
  listAllInterests(
    requestMessage: iotics_api_interest_pb.ListAllInterestsRequest,
    callback: (error: ServiceError|null, responseMessage: iotics_api_interest_pb.ListAllInterestsResponse|null) => void
  ): UnaryResponse;
  createInterest(
    requestMessage: iotics_api_interest_pb.CreateInterestRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: iotics_api_interest_pb.CreateInterestResponse|null) => void
  ): UnaryResponse;
  createInterest(
    requestMessage: iotics_api_interest_pb.CreateInterestRequest,
    callback: (error: ServiceError|null, responseMessage: iotics_api_interest_pb.CreateInterestResponse|null) => void
  ): UnaryResponse;
  deleteInterest(
    requestMessage: iotics_api_interest_pb.DeleteInterestRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: iotics_api_interest_pb.DeleteInterestResponse|null) => void
  ): UnaryResponse;
  deleteInterest(
    requestMessage: iotics_api_interest_pb.DeleteInterestRequest,
    callback: (error: ServiceError|null, responseMessage: iotics_api_interest_pb.DeleteInterestResponse|null) => void
  ): UnaryResponse;
  sendInputMessage(
    requestMessage: iotics_api_interest_pb.SendInputMessageRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: iotics_api_interest_pb.SendInputMessageResponse|null) => void
  ): UnaryResponse;
  sendInputMessage(
    requestMessage: iotics_api_interest_pb.SendInputMessageRequest,
    callback: (error: ServiceError|null, responseMessage: iotics_api_interest_pb.SendInputMessageResponse|null) => void
  ): UnaryResponse;
}

