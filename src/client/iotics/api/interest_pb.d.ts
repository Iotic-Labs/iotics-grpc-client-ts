// package: iotics.api
// file: iotics/api/interest.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as iotics_api_common_pb from "../../iotics/api/common_pb";
import * as iotics_api_feed_pb from "../../iotics/api/feed_pb";
import * as iotics_api_input_pb from "../../iotics/api/input_pb";

export class InputInterest extends jspb.Message {
  hasSendertwinid(): boolean;
  clearSendertwinid(): void;
  getSendertwinid(): iotics_api_common_pb.TwinID | undefined;
  setSendertwinid(value?: iotics_api_common_pb.TwinID): void;

  hasDestinputid(): boolean;
  clearDestinputid(): void;
  getDestinputid(): iotics_api_input_pb.InputID | undefined;
  setDestinputid(value?: iotics_api_input_pb.InputID): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InputInterest.AsObject;
  static toObject(includeInstance: boolean, msg: InputInterest): InputInterest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InputInterest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InputInterest;
  static deserializeBinaryFromReader(message: InputInterest, reader: jspb.BinaryReader): InputInterest;
}

export namespace InputInterest {
  export type AsObject = {
    sendertwinid?: iotics_api_common_pb.TwinID.AsObject,
    destinputid?: iotics_api_input_pb.InputID.AsObject,
  }
}

export class SendInputMessageRequest extends jspb.Message {
  hasHeaders(): boolean;
  clearHeaders(): void;
  getHeaders(): iotics_api_common_pb.Headers | undefined;
  setHeaders(value?: iotics_api_common_pb.Headers): void;

  hasArgs(): boolean;
  clearArgs(): void;
  getArgs(): SendInputMessageRequest.Arguments | undefined;
  setArgs(value?: SendInputMessageRequest.Arguments): void;

  hasPayload(): boolean;
  clearPayload(): void;
  getPayload(): SendInputMessageRequest.Payload | undefined;
  setPayload(value?: SendInputMessageRequest.Payload): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendInputMessageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SendInputMessageRequest): SendInputMessageRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SendInputMessageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendInputMessageRequest;
  static deserializeBinaryFromReader(message: SendInputMessageRequest, reader: jspb.BinaryReader): SendInputMessageRequest;
}

export namespace SendInputMessageRequest {
  export type AsObject = {
    headers?: iotics_api_common_pb.Headers.AsObject,
    args?: SendInputMessageRequest.Arguments.AsObject,
    payload?: SendInputMessageRequest.Payload.AsObject,
  }

  export class Payload extends jspb.Message {
    hasMessage(): boolean;
    clearMessage(): void;
    getMessage(): iotics_api_input_pb.InputMessage | undefined;
    setMessage(value?: iotics_api_input_pb.InputMessage): void;

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
      message?: iotics_api_input_pb.InputMessage.AsObject,
    }
  }

  export class Arguments extends jspb.Message {
    hasInterest(): boolean;
    clearInterest(): void;
    getInterest(): InputInterest | undefined;
    setInterest(value?: InputInterest): void;

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
      interest?: InputInterest.AsObject,
    }
  }
}

export class SendInputMessageResponse extends jspb.Message {
  hasHeaders(): boolean;
  clearHeaders(): void;
  getHeaders(): iotics_api_common_pb.Headers | undefined;
  setHeaders(value?: iotics_api_common_pb.Headers): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendInputMessageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SendInputMessageResponse): SendInputMessageResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SendInputMessageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendInputMessageResponse;
  static deserializeBinaryFromReader(message: SendInputMessageResponse, reader: jspb.BinaryReader): SendInputMessageResponse;
}

export namespace SendInputMessageResponse {
  export type AsObject = {
    headers?: iotics_api_common_pb.Headers.AsObject,
  }
}

export class Interest extends jspb.Message {
  hasFollowertwinid(): boolean;
  clearFollowertwinid(): void;
  getFollowertwinid(): iotics_api_common_pb.TwinID | undefined;
  setFollowertwinid(value?: iotics_api_common_pb.TwinID): void;

  hasFollowedfeedid(): boolean;
  clearFollowedfeedid(): void;
  getFollowedfeedid(): iotics_api_feed_pb.FeedID | undefined;
  setFollowedfeedid(value?: iotics_api_feed_pb.FeedID): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Interest.AsObject;
  static toObject(includeInstance: boolean, msg: Interest): Interest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Interest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Interest;
  static deserializeBinaryFromReader(message: Interest, reader: jspb.BinaryReader): Interest;
}

export namespace Interest {
  export type AsObject = {
    followertwinid?: iotics_api_common_pb.TwinID.AsObject,
    followedfeedid?: iotics_api_feed_pb.FeedID.AsObject,
  }
}

export class FetchInterestRequest extends jspb.Message {
  hasHeaders(): boolean;
  clearHeaders(): void;
  getHeaders(): iotics_api_common_pb.Headers | undefined;
  setHeaders(value?: iotics_api_common_pb.Headers): void;

  hasArgs(): boolean;
  clearArgs(): void;
  getArgs(): FetchInterestRequest.Arguments | undefined;
  setArgs(value?: FetchInterestRequest.Arguments): void;

  hasFetchlaststored(): boolean;
  clearFetchlaststored(): void;
  getFetchlaststored(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setFetchlaststored(value?: google_protobuf_wrappers_pb.BoolValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FetchInterestRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FetchInterestRequest): FetchInterestRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FetchInterestRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FetchInterestRequest;
  static deserializeBinaryFromReader(message: FetchInterestRequest, reader: jspb.BinaryReader): FetchInterestRequest;
}

export namespace FetchInterestRequest {
  export type AsObject = {
    headers?: iotics_api_common_pb.Headers.AsObject,
    args?: FetchInterestRequest.Arguments.AsObject,
    fetchlaststored?: google_protobuf_wrappers_pb.BoolValue.AsObject,
  }

  export class Arguments extends jspb.Message {
    hasInterest(): boolean;
    clearInterest(): void;
    getInterest(): Interest | undefined;
    setInterest(value?: Interest): void;

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
      interest?: Interest.AsObject,
    }
  }
}

export class FetchInterestResponse extends jspb.Message {
  hasHeaders(): boolean;
  clearHeaders(): void;
  getHeaders(): iotics_api_common_pb.Headers | undefined;
  setHeaders(value?: iotics_api_common_pb.Headers): void;

  hasPayload(): boolean;
  clearPayload(): void;
  getPayload(): FetchInterestResponse.Payload | undefined;
  setPayload(value?: FetchInterestResponse.Payload): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FetchInterestResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FetchInterestResponse): FetchInterestResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FetchInterestResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FetchInterestResponse;
  static deserializeBinaryFromReader(message: FetchInterestResponse, reader: jspb.BinaryReader): FetchInterestResponse;
}

export namespace FetchInterestResponse {
  export type AsObject = {
    headers?: iotics_api_common_pb.Headers.AsObject,
    payload?: FetchInterestResponse.Payload.AsObject,
  }

  export class Payload extends jspb.Message {
    hasInterest(): boolean;
    clearInterest(): void;
    getInterest(): Interest | undefined;
    setInterest(value?: Interest): void;

    hasFeeddata(): boolean;
    clearFeeddata(): void;
    getFeeddata(): iotics_api_common_pb.FeedData | undefined;
    setFeeddata(value?: iotics_api_common_pb.FeedData): void;

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
      interest?: Interest.AsObject,
      feeddata?: iotics_api_common_pb.FeedData.AsObject,
    }
  }
}

export class FetchLastStoredRequest extends jspb.Message {
  hasHeaders(): boolean;
  clearHeaders(): void;
  getHeaders(): iotics_api_common_pb.Headers | undefined;
  setHeaders(value?: iotics_api_common_pb.Headers): void;

  hasArgs(): boolean;
  clearArgs(): void;
  getArgs(): FetchLastStoredRequest.Arguments | undefined;
  setArgs(value?: FetchLastStoredRequest.Arguments): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FetchLastStoredRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FetchLastStoredRequest): FetchLastStoredRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FetchLastStoredRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FetchLastStoredRequest;
  static deserializeBinaryFromReader(message: FetchLastStoredRequest, reader: jspb.BinaryReader): FetchLastStoredRequest;
}

export namespace FetchLastStoredRequest {
  export type AsObject = {
    headers?: iotics_api_common_pb.Headers.AsObject,
    args?: FetchLastStoredRequest.Arguments.AsObject,
  }

  export class Arguments extends jspb.Message {
    hasInterest(): boolean;
    clearInterest(): void;
    getInterest(): Interest | undefined;
    setInterest(value?: Interest): void;

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
      interest?: Interest.AsObject,
    }
  }
}

