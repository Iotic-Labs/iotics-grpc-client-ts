// package: iotics.api
// file: iotics/api/host.proto

import * as iotics_api_host_pb from "../../iotics/api/host_pb";
import {grpc} from "@improbable-eng/grpc-web";

type HostAPIGetHostID = {
  readonly methodName: string;
  readonly service: typeof HostAPI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof iotics_api_host_pb.GetHostIDRequest;
  readonly responseType: typeof iotics_api_host_pb.GetHostIDResponse;
};

export class HostAPI {
  static readonly serviceName: string;
  static readonly GetHostID: HostAPIGetHostID;
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

export class HostAPIClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getHostID(
    requestMessage: iotics_api_host_pb.GetHostIDRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: iotics_api_host_pb.GetHostIDResponse|null) => void
  ): UnaryResponse;
  getHostID(
    requestMessage: iotics_api_host_pb.GetHostIDRequest,
    callback: (error: ServiceError|null, responseMessage: iotics_api_host_pb.GetHostIDResponse|null) => void
  ): UnaryResponse;
}

