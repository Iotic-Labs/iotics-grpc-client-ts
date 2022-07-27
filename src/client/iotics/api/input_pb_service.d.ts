// package: iotics.api
// file: iotics/api/input.proto

import * as iotics_api_input_pb from "../../iotics/api/input_pb";
import {grpc} from "@improbable-eng/grpc-web";

type InputAPIDeleteInput = {
  readonly methodName: string;
  readonly service: typeof InputAPI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof iotics_api_input_pb.DeleteInputRequest;
  readonly responseType: typeof iotics_api_input_pb.DeleteInputResponse;
};

type InputAPIDescribeInput = {
  readonly methodName: string;
  readonly service: typeof InputAPI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof iotics_api_input_pb.DescribeInputRequest;
  readonly responseType: typeof iotics_api_input_pb.DescribeInputResponse;
};

type InputAPIReceiveInputMessages = {
  readonly methodName: string;
  readonly service: typeof InputAPI;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof iotics_api_input_pb.ReceiveInputMessageRequest;
  readonly responseType: typeof iotics_api_input_pb.ReceiveInputMessageResponse;
};

export class InputAPI {
  static readonly serviceName: string;
  static readonly DeleteInput: InputAPIDeleteInput;
  static readonly DescribeInput: InputAPIDescribeInput;
  static readonly ReceiveInputMessages: InputAPIReceiveInputMessages;
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

export class InputAPIClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  deleteInput(
    requestMessage: iotics_api_input_pb.DeleteInputRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: iotics_api_input_pb.DeleteInputResponse|null) => void
  ): UnaryResponse;
  deleteInput(
    requestMessage: iotics_api_input_pb.DeleteInputRequest,
    callback: (error: ServiceError|null, responseMessage: iotics_api_input_pb.DeleteInputResponse|null) => void
  ): UnaryResponse;
  describeInput(
    requestMessage: iotics_api_input_pb.DescribeInputRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: iotics_api_input_pb.DescribeInputResponse|null) => void
  ): UnaryResponse;
  describeInput(
    requestMessage: iotics_api_input_pb.DescribeInputRequest,
    callback: (error: ServiceError|null, responseMessage: iotics_api_input_pb.DescribeInputResponse|null) => void
  ): UnaryResponse;
  receiveInputMessages(requestMessage: iotics_api_input_pb.ReceiveInputMessageRequest, metadata?: grpc.Metadata): ResponseStream<iotics_api_input_pb.ReceiveInputMessageResponse>;
}

