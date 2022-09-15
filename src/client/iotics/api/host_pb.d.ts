// package: iotics.api
// file: iotics/api/host.proto

import * as jspb from "google-protobuf";
import * as iotics_api_common_pb from "../../iotics/api/common_pb";

export class GetHostIDRequest extends jspb.Message {
  hasHeaders(): boolean;
  clearHeaders(): void;
  getHeaders(): iotics_api_common_pb.Headers | undefined;
  setHeaders(value?: iotics_api_common_pb.Headers): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetHostIDRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetHostIDRequest): GetHostIDRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetHostIDRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetHostIDRequest;
  static deserializeBinaryFromReader(message: GetHostIDRequest, reader: jspb.BinaryReader): GetHostIDRequest;
}

export namespace GetHostIDRequest {
  export type AsObject = {
    headers?: iotics_api_common_pb.Headers.AsObject,
  }
}

export class GetHostIDResponse extends jspb.Message {
  hasHeaders(): boolean;
  clearHeaders(): void;
  getHeaders(): iotics_api_common_pb.Headers | undefined;
  setHeaders(value?: iotics_api_common_pb.Headers): void;

  hasPayload(): boolean;
  clearPayload(): void;
  getPayload(): GetHostIDResponse.Payload | undefined;
  setPayload(value?: GetHostIDResponse.Payload): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetHostIDResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetHostIDResponse): GetHostIDResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetHostIDResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetHostIDResponse;
  static deserializeBinaryFromReader(message: GetHostIDResponse, reader: jspb.BinaryReader): GetHostIDResponse;
}

export namespace GetHostIDResponse {
  export type AsObject = {
    headers?: iotics_api_common_pb.Headers.AsObject,
    payload?: GetHostIDResponse.Payload.AsObject,
  }

  export class Payload extends jspb.Message {
    getHostid(): string;
    setHostid(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Payload.AsObject;
    static toObject(includeInstance: boolean, msg: Payload): Payload.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Payload, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Payload;
    static deserializeBinaryFromReader(message: Payload, reader: jspb.BinaryReader): Payload;
  }

  export namespace Payload {
    export type AsObject = {
      hostid: string,
    }
  }
}

