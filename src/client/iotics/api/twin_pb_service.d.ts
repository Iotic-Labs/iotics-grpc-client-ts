// package: iotics.api
// file: iotics/api/twin.proto

import * as iotics_api_twin_pb from "../../iotics/api/twin_pb";
import {grpc} from "@improbable-eng/grpc-web";

type TwinAPICreateTwin = {
  readonly methodName: string;
  readonly service: typeof TwinAPI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof iotics_api_twin_pb.CreateTwinRequest;
  readonly responseType: typeof iotics_api_twin_pb.CreateTwinResponse;
};

type TwinAPIUpsertTwin = {
  readonly methodName: string;
  readonly service: typeof TwinAPI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof iotics_api_twin_pb.UpsertTwinRequest;
  readonly responseType: typeof iotics_api_twin_pb.UpsertTwinResponse;
};

type TwinAPIDeleteTwin = {
  readonly methodName: string;
  readonly service: typeof TwinAPI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof iotics_api_twin_pb.DeleteTwinRequest;
  readonly responseType: typeof iotics_api_twin_pb.DeleteTwinResponse;
};

type TwinAPIUpdateTwin = {
  readonly methodName: string;
  readonly service: typeof TwinAPI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof iotics_api_twin_pb.UpdateTwinRequest;
  readonly responseType: typeof iotics_api_twin_pb.UpdateTwinResponse;
};

type TwinAPIDescribeTwin = {
  readonly methodName: string;
  readonly service: typeof TwinAPI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof iotics_api_twin_pb.DescribeTwinRequest;
  readonly responseType: typeof iotics_api_twin_pb.DescribeTwinResponse;
};

type TwinAPIListAllTwins = {
  readonly methodName: string;
  readonly service: typeof TwinAPI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof iotics_api_twin_pb.ListAllTwinsRequest;
  readonly responseType: typeof iotics_api_twin_pb.ListAllTwinsResponse;
};

export class TwinAPI {
  static readonly serviceName: string;
  static readonly CreateTwin: TwinAPICreateTwin;
  static readonly UpsertTwin: TwinAPIUpsertTwin;
  static readonly DeleteTwin: TwinAPIDeleteTwin;
  static readonly UpdateTwin: TwinAPIUpdateTwin;
  static readonly DescribeTwin: TwinAPIDescribeTwin;
  static readonly ListAllTwins: TwinAPIListAllTwins;
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

export class TwinAPIClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  createTwin(
    requestMessage: iotics_api_twin_pb.CreateTwinRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: iotics_api_twin_pb.CreateTwinResponse|null) => void
  ): UnaryResponse;
  createTwin(
    requestMessage: iotics_api_twin_pb.CreateTwinRequest,
    callback: (error: ServiceError|null, responseMessage: iotics_api_twin_pb.CreateTwinResponse|null) => void
  ): UnaryResponse;
  upsertTwin(
    requestMessage: iotics_api_twin_pb.UpsertTwinRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: iotics_api_twin_pb.UpsertTwinResponse|null) => void
  ): UnaryResponse;
  upsertTwin(
    requestMessage: iotics_api_twin_pb.UpsertTwinRequest,
    callback: (error: ServiceError|null, responseMessage: iotics_api_twin_pb.UpsertTwinResponse|null) => void
  ): UnaryResponse;
  deleteTwin(
    requestMessage: iotics_api_twin_pb.DeleteTwinRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: iotics_api_twin_pb.DeleteTwinResponse|null) => void
  ): UnaryResponse;
  deleteTwin(
    requestMessage: iotics_api_twin_pb.DeleteTwinRequest,
    callback: (error: ServiceError|null, responseMessage: iotics_api_twin_pb.DeleteTwinResponse|null) => void
  ): UnaryResponse;
  updateTwin(
    requestMessage: iotics_api_twin_pb.UpdateTwinRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: iotics_api_twin_pb.UpdateTwinResponse|null) => void
  ): UnaryResponse;
  updateTwin(
    requestMessage: iotics_api_twin_pb.UpdateTwinRequest,
    callback: (error: ServiceError|null, responseMessage: iotics_api_twin_pb.UpdateTwinResponse|null) => void
  ): UnaryResponse;
  describeTwin(
    requestMessage: iotics_api_twin_pb.DescribeTwinRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: iotics_api_twin_pb.DescribeTwinResponse|null) => void
  ): UnaryResponse;
  describeTwin(
    requestMessage: iotics_api_twin_pb.DescribeTwinRequest,
    callback: (error: ServiceError|null, responseMessage: iotics_api_twin_pb.DescribeTwinResponse|null) => void
  ): UnaryResponse;
  listAllTwins(
    requestMessage: iotics_api_twin_pb.ListAllTwinsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: iotics_api_twin_pb.ListAllTwinsResponse|null) => void
  ): UnaryResponse;
  listAllTwins(
    requestMessage: iotics_api_twin_pb.ListAllTwinsRequest,
    callback: (error: ServiceError|null, responseMessage: iotics_api_twin_pb.ListAllTwinsResponse|null) => void
  ): UnaryResponse;
}

