// package: iotics.api
// file: iotics/api/input.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as iotics_api_common_pb from "../../iotics/api/common_pb";

export class Input extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): iotics_api_common_pb.InputID | undefined;
  setId(value?: iotics_api_common_pb.InputID): void;

  hasTwinid(): boolean;
  clearTwinid(): void;
  getTwinid(): iotics_api_common_pb.TwinID | undefined;
  setTwinid(value?: iotics_api_common_pb.TwinID): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Input.AsObject;
  static toObject(includeInstance: boolean, msg: Input): Input.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Input, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Input;
  static deserializeBinaryFromReader(message: Input, reader: jspb.BinaryReader): Input;
}

export namespace Input {
  export type AsObject = {
    id?: iotics_api_common_pb.InputID.AsObject,
    twinid?: iotics_api_common_pb.TwinID.AsObject,
  }
}

export class DeleteInputRequest extends jspb.Message {
  hasHeaders(): boolean;
  clearHeaders(): void;
  getHeaders(): iotics_api_common_pb.Headers | undefined;
  setHeaders(value?: iotics_api_common_pb.Headers): void;

  hasArgs(): boolean;
  clearArgs(): void;
  getArgs(): DeleteInputRequest.Arguments | undefined;
  setArgs(value?: DeleteInputRequest.Arguments): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteInputRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteInputRequest): DeleteInputRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteInputRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteInputRequest;
  static deserializeBinaryFromReader(message: DeleteInputRequest, reader: jspb.BinaryReader): DeleteInputRequest;
}

export namespace DeleteInputRequest {
  export type AsObject = {
    headers?: iotics_api_common_pb.Headers.AsObject,
    args?: DeleteInputRequest.Arguments.AsObject,
  }

  export class Arguments extends jspb.Message {
    hasInput(): boolean;
    clearInput(): void;
    getInput(): Input | undefined;
    setInput(value?: Input): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Arguments.AsObject;
    static toObject(includeInstance: boolean, msg: Arguments): Arguments.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Arguments, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Arguments;
    static deserializeBinaryFromReader(message: Arguments, reader: jspb.BinaryReader): Arguments;
  }

  export namespace Arguments {
    export type AsObject = {
      input?: Input.AsObject,
    }
  }
}

export class DeleteInputResponse extends jspb.Message {
  hasHeaders(): boolean;
  clearHeaders(): void;
  getHeaders(): iotics_api_common_pb.Headers | undefined;
  setHeaders(value?: iotics_api_common_pb.Headers): void;

  hasPayload(): boolean;
  clearPayload(): void;
  getPayload(): DeleteInputResponse.Payload | undefined;
  setPayload(value?: DeleteInputResponse.Payload): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteInputResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteInputResponse): DeleteInputResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteInputResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteInputResponse;
  static deserializeBinaryFromReader(message: DeleteInputResponse, reader: jspb.BinaryReader): DeleteInputResponse;
}

export namespace DeleteInputResponse {
  export type AsObject = {
    headers?: iotics_api_common_pb.Headers.AsObject,
    payload?: DeleteInputResponse.Payload.AsObject,
  }

  export class Payload extends jspb.Message {
    hasInput(): boolean;
    clearInput(): void;
    getInput(): Input | undefined;
    setInput(value?: Input): void;

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
      input?: Input.AsObject,
    }
  }
}

export class DescribeInputRequest extends jspb.Message {
  hasHeaders(): boolean;
  clearHeaders(): void;
  getHeaders(): iotics_api_common_pb.Headers | undefined;
  setHeaders(value?: iotics_api_common_pb.Headers): void;

  hasArgs(): boolean;
  clearArgs(): void;
  getArgs(): DescribeInputRequest.Arguments | undefined;
  setArgs(value?: DescribeInputRequest.Arguments): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DescribeInputRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DescribeInputRequest): DescribeInputRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DescribeInputRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DescribeInputRequest;
  static deserializeBinaryFromReader(message: DescribeInputRequest, reader: jspb.BinaryReader): DescribeInputRequest;
}

export namespace DescribeInputRequest {
  export type AsObject = {
    headers?: iotics_api_common_pb.Headers.AsObject,
    args?: DescribeInputRequest.Arguments.AsObject,
  }

  export class Arguments extends jspb.Message {
    hasInput(): boolean;
    clearInput(): void;
    getInput(): Input | undefined;
    setInput(value?: Input): void;

    hasRemotehostid(): boolean;
    clearRemotehostid(): void;
    getRemotehostid(): iotics_api_common_pb.HostID | undefined;
    setRemotehostid(value?: iotics_api_common_pb.HostID): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Arguments.AsObject;
    static toObject(includeInstance: boolean, msg: Arguments): Arguments.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Arguments, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Arguments;
    static deserializeBinaryFromReader(message: Arguments, reader: jspb.BinaryReader): Arguments;
  }

  export namespace Arguments {
    export type AsObject = {
      input?: Input.AsObject,
      remotehostid?: iotics_api_common_pb.HostID.AsObject,
    }
  }
}

export class DescribeInputResponse extends jspb.Message {
  hasHeaders(): boolean;
  clearHeaders(): void;
  getHeaders(): iotics_api_common_pb.Headers | undefined;
  setHeaders(value?: iotics_api_common_pb.Headers): void;

  hasPayload(): boolean;
  clearPayload(): void;
  getPayload(): DescribeInputResponse.Payload | undefined;
  setPayload(value?: DescribeInputResponse.Payload): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DescribeInputResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DescribeInputResponse): DescribeInputResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DescribeInputResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DescribeInputResponse;
  static deserializeBinaryFromReader(message: DescribeInputResponse, reader: jspb.BinaryReader): DescribeInputResponse;
}

export namespace DescribeInputResponse {
  export type AsObject = {
    headers?: iotics_api_common_pb.Headers.AsObject,
    payload?: DescribeInputResponse.Payload.AsObject,
  }

  export class MetaResult extends jspb.Message {
    clearValuesList(): void;
    getValuesList(): Array<iotics_api_common_pb.Value>;
    setValuesList(value: Array<iotics_api_common_pb.Value>): void;
    addValues(value?: iotics_api_common_pb.Value, index?: number): iotics_api_common_pb.Value;

    clearPropertiesList(): void;
    getPropertiesList(): Array<iotics_api_common_pb.Property>;
    setPropertiesList(value: Array<iotics_api_common_pb.Property>): void;
    addProperties(value?: iotics_api_common_pb.Property, index?: number): iotics_api_common_pb.Property;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MetaResult.AsObject;
    static toObject(includeInstance: boolean, msg: MetaResult): MetaResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MetaResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MetaResult;
    static deserializeBinaryFromReader(message: MetaResult, reader: jspb.BinaryReader): MetaResult;
  }

  export namespace MetaResult {
    export type AsObject = {
      valuesList: Array<iotics_api_common_pb.Value.AsObject>,
      propertiesList: Array<iotics_api_common_pb.Property.AsObject>,
    }
  }

  export class Payload extends jspb.Message {
    hasInput(): boolean;
    clearInput(): void;
    getInput(): Input | undefined;
    setInput(value?: Input): void;

    hasResult(): boolean;
    clearResult(): void;
    getResult(): DescribeInputResponse.MetaResult | undefined;
    setResult(value?: DescribeInputResponse.MetaResult): void;

    hasRemotehostid(): boolean;
    clearRemotehostid(): void;
    getRemotehostid(): iotics_api_common_pb.HostID | undefined;
    setRemotehostid(value?: iotics_api_common_pb.HostID): void;

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
      input?: Input.AsObject,
      result?: DescribeInputResponse.MetaResult.AsObject,
      remotehostid?: iotics_api_common_pb.HostID.AsObject,
    }
  }
}

export class UpsertInputWithMeta extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  clearValuesList(): void;
  getValuesList(): Array<iotics_api_common_pb.Value>;
  setValuesList(value: Array<iotics_api_common_pb.Value>): void;
  addValues(value?: iotics_api_common_pb.Value, index?: number): iotics_api_common_pb.Value;

  clearPropertiesList(): void;
  getPropertiesList(): Array<iotics_api_common_pb.Property>;
  setPropertiesList(value: Array<iotics_api_common_pb.Property>): void;
  addProperties(value?: iotics_api_common_pb.Property, index?: number): iotics_api_common_pb.Property;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpsertInputWithMeta.AsObject;
  static toObject(includeInstance: boolean, msg: UpsertInputWithMeta): UpsertInputWithMeta.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpsertInputWithMeta, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpsertInputWithMeta;
  static deserializeBinaryFromReader(message: UpsertInputWithMeta, reader: jspb.BinaryReader): UpsertInputWithMeta;
}

export namespace UpsertInputWithMeta {
  export type AsObject = {
    id: string,
    valuesList: Array<iotics_api_common_pb.Value.AsObject>,
    propertiesList: Array<iotics_api_common_pb.Property.AsObject>,
  }
}

export class InputMessage extends jspb.Message {
  hasOccurredat(): boolean;
  clearOccurredat(): void;
  getOccurredat(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setOccurredat(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getMime(): string;
  setMime(value: string): void;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InputMessage.AsObject;
  static toObject(includeInstance: boolean, msg: InputMessage): InputMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InputMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InputMessage;
  static deserializeBinaryFromReader(message: InputMessage, reader: jspb.BinaryReader): InputMessage;
}

export namespace InputMessage {
  export type AsObject = {
    occurredat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    mime: string,
    data: Uint8Array | string,
  }
}

export class ReceiveInputMessageRequest extends jspb.Message {
  hasHeaders(): boolean;
  clearHeaders(): void;
  getHeaders(): iotics_api_common_pb.Headers | undefined;
  setHeaders(value?: iotics_api_common_pb.Headers): void;

  hasArgs(): boolean;
  clearArgs(): void;
  getArgs(): ReceiveInputMessageRequest.Arguments | undefined;
  setArgs(value?: ReceiveInputMessageRequest.Arguments): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReceiveInputMessageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReceiveInputMessageRequest): ReceiveInputMessageRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReceiveInputMessageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReceiveInputMessageRequest;
  static deserializeBinaryFromReader(message: ReceiveInputMessageRequest, reader: jspb.BinaryReader): ReceiveInputMessageRequest;
}

export namespace ReceiveInputMessageRequest {
  export type AsObject = {
    headers?: iotics_api_common_pb.Headers.AsObject,
    args?: ReceiveInputMessageRequest.Arguments.AsObject,
  }

  export class Arguments extends jspb.Message {
    hasInput(): boolean;
    clearInput(): void;
    getInput(): Input | undefined;
    setInput(value?: Input): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Arguments.AsObject;
    static toObject(includeInstance: boolean, msg: Arguments): Arguments.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Arguments, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Arguments;
    static deserializeBinaryFromReader(message: Arguments, reader: jspb.BinaryReader): Arguments;
  }

  export namespace Arguments {
    export type AsObject = {
      input?: Input.AsObject,
    }
  }
}

export class ReceiveInputMessageResponse extends jspb.Message {
  hasHeaders(): boolean;
  clearHeaders(): void;
  getHeaders(): iotics_api_common_pb.Headers | undefined;
  setHeaders(value?: iotics_api_common_pb.Headers): void;

  hasPayload(): boolean;
  clearPayload(): void;
  getPayload(): ReceiveInputMessageResponse.Payload | undefined;
  setPayload(value?: ReceiveInputMessageResponse.Payload): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReceiveInputMessageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ReceiveInputMessageResponse): ReceiveInputMessageResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReceiveInputMessageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReceiveInputMessageResponse;
  static deserializeBinaryFromReader(message: ReceiveInputMessageResponse, reader: jspb.BinaryReader): ReceiveInputMessageResponse;
}

export namespace ReceiveInputMessageResponse {
  export type AsObject = {
    headers?: iotics_api_common_pb.Headers.AsObject,
    payload?: ReceiveInputMessageResponse.Payload.AsObject,
  }

  export class Payload extends jspb.Message {
    hasInput(): boolean;
    clearInput(): void;
    getInput(): Input | undefined;
    setInput(value?: Input): void;

    hasMessage(): boolean;
    clearMessage(): void;
    getMessage(): InputMessage | undefined;
    setMessage(value?: InputMessage): void;

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
      input?: Input.AsObject,
      message?: InputMessage.AsObject,
    }
  }
}

