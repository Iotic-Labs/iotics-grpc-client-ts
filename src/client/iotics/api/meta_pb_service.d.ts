// package: iotics.api
// file: iotics/api/meta.proto

import * as iotics_api_meta_pb from "../../iotics/api/meta_pb";
import {grpc} from "@improbable-eng/grpc-web";

type MetaAPISparqlQuery = {
  readonly methodName: string;
  readonly service: typeof MetaAPI;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof iotics_api_meta_pb.SparqlQueryRequest;
  readonly responseType: typeof iotics_api_meta_pb.SparqlQueryResponse;
};

type MetaAPISparqlUpdate = {
  readonly methodName: string;
  readonly service: typeof MetaAPI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof iotics_api_meta_pb.SparqlUpdateRequest;
  readonly responseType: typeof iotics_api_meta_pb.SparqlUpdateResponse;
};

export class MetaAPI {
  static readonly serviceName: string;
  static readonly SparqlQuery: MetaAPISparqlQuery;
  static readonly SparqlUpdate: MetaAPISparqlUpdate;
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

export class MetaAPIClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  sparqlQuery(requestMessage: iotics_api_meta_pb.SparqlQueryRequest, metadata?: grpc.Metadata): ResponseStream<iotics_api_meta_pb.SparqlQueryResponse>;
  sparqlUpdate(
    requestMessage: iotics_api_meta_pb.SparqlUpdateRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: iotics_api_meta_pb.SparqlUpdateResponse|null) => void
  ): UnaryResponse;
  sparqlUpdate(
    requestMessage: iotics_api_meta_pb.SparqlUpdateRequest,
    callback: (error: ServiceError|null, responseMessage: iotics_api_meta_pb.SparqlUpdateResponse|null) => void
  ): UnaryResponse;
}

