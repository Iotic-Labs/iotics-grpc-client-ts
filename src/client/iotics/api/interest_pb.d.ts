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

  hasDestinput(): boolean;
  clearDestinput(): void;
  getDestinput(): InputInterest.DestinationInput | undefined;
  setDestinput(value?: InputInterest.DestinationInput): void;

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
    destinput?: InputInterest.DestinationInput.AsObject,
  }

  export class DestinationInput extends jspb.Message {
    hasInput(): boolean;
    clearInput(): void;
    getInput(): iotics_api_input_pb.Input | undefined;
    setInput(value?: iotics_api_input_pb.Input): void;

    hasHostid(): boolean;
    clearHostid(): void;
    getHostid(): iotics_api_common_pb.HostID | undefined;
    setHostid(value?: iotics_api_common_pb.HostID): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DestinationInput.AsObject;
    static toObject(includeInstance: boolean, msg: DestinationInput): DestinationInput.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DestinationInput, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DestinationInput;
    static deserializeBinaryFromReader(message: DestinationInput, reader: jspb.BinaryReader): DestinationInput;
  }

  export namespace DestinationInput {
    export type AsObject = {
      input?: iotics_api_input_pb.Input.AsObject,
      hostid?: iotics_api_common_pb.HostID.AsObject,
    }
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

  hasFollowedfeed(): boolean;
  clearFollowedfeed(): void;
  getFollowedfeed(): Interest.FollowedFeed | undefined;
  setFollowedfeed(value?: Interest.FollowedFeed): void;

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
    followedfeed?: Interest.FollowedFeed.AsObject,
  }

  export class FollowedFeed extends jspb.Message {
    hasFeed(): boolean;
    clearFeed(): void;
    getFeed(): iotics_api_feed_pb.Feed | undefined;
    setFeed(value?: iotics_api_feed_pb.Feed): void;

    hasHostid(): boolean;
    clearHostid(): void;
    getHostid(): iotics_api_common_pb.HostID | undefined;
    setHostid(value?: iotics_api_common_pb.HostID): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FollowedFeed.AsObject;
    static toObject(includeInstance: boolean, msg: FollowedFeed): FollowedFeed.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FollowedFeed, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FollowedFeed;
    static deserializeBinaryFromReader(message: FollowedFeed, reader: jspb.BinaryReader): FollowedFeed;
  }

  export namespace FollowedFeed {
    export type AsObject = {
      feed?: iotics_api_feed_pb.Feed.AsObject,
      hostid?: iotics_api_common_pb.HostID.AsObject,
    }
  }
}

export class CreateInterestRequest extends jspb.Message {
  hasHeaders(): boolean;
  clearHeaders(): void;
  getHeaders(): iotics_api_common_pb.Headers | undefined;
  setHeaders(value?: iotics_api_common_pb.Headers): void;

  hasArgs(): boolean;
  clearArgs(): void;
  getArgs(): CreateInterestRequest.Arguments | undefined;
  setArgs(value?: CreateInterestRequest.Arguments): void;

  hasPayload(): boolean;
  clearPayload(): void;
  getPayload(): CreateInterestRequest.Payload | undefined;
  setPayload(value?: CreateInterestRequest.Payload): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateInterestRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateInterestRequest): CreateInterestRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateInterestRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateInterestRequest;
  static deserializeBinaryFromReader(message: CreateInterestRequest, reader: jspb.BinaryReader): CreateInterestRequest;
}

export namespace CreateInterestRequest {
  export type AsObject = {
    headers?: iotics_api_common_pb.Headers.AsObject,
    args?: CreateInterestRequest.Arguments.AsObject,
    payload?: CreateInterestRequest.Payload.AsObject,
  }

  export class Payload extends jspb.Message {
    hasInterest(): boolean;
    clearInterest(): void;
    getInterest(): Interest | undefined;
    setInterest(value?: Interest): void;

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
    }
  }

  export class Arguments extends jspb.Message {
    hasTwinid(): boolean;
    clearTwinid(): void;
    getTwinid(): iotics_api_common_pb.TwinID | undefined;
    setTwinid(value?: iotics_api_common_pb.TwinID): void;

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
      twinid?: iotics_api_common_pb.TwinID.AsObject,
    }
  }
}

export class CreateInterestResponse extends jspb.Message {
  hasHeaders(): boolean;
  clearHeaders(): void;
  getHeaders(): iotics_api_common_pb.Headers | undefined;
  setHeaders(value?: iotics_api_common_pb.Headers): void;

  hasPayload(): boolean;
  clearPayload(): void;
  getPayload(): CreateInterestResponse.Payload | undefined;
  setPayload(value?: CreateInterestResponse.Payload): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateInterestResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateInterestResponse): CreateInterestResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateInterestResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateInterestResponse;
  static deserializeBinaryFromReader(message: CreateInterestResponse, reader: jspb.BinaryReader): CreateInterestResponse;
}

export namespace CreateInterestResponse {
  export type AsObject = {
    headers?: iotics_api_common_pb.Headers.AsObject,
    payload?: CreateInterestResponse.Payload.AsObject,
  }

  export class Payload extends jspb.Message {
    hasInterest(): boolean;
    clearInterest(): void;
    getInterest(): Interest | undefined;
    setInterest(value?: Interest): void;

    getAlreadycreated(): boolean;
    setAlreadycreated(value: boolean): void;

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
      alreadycreated: boolean,
    }
  }
}

export class ListAllInterestsRequest extends jspb.Message {
  hasHeaders(): boolean;
  clearHeaders(): void;
  getHeaders(): iotics_api_common_pb.Headers | undefined;
  setHeaders(value?: iotics_api_common_pb.Headers): void;

  hasArgs(): boolean;
  clearArgs(): void;
  getArgs(): ListAllInterestsRequest.Arguments | undefined;
  setArgs(value?: ListAllInterestsRequest.Arguments): void;

  hasRange(): boolean;
  clearRange(): void;
  getRange(): iotics_api_common_pb.Range | undefined;
  setRange(value?: iotics_api_common_pb.Range): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAllInterestsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListAllInterestsRequest): ListAllInterestsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAllInterestsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAllInterestsRequest;
  static deserializeBinaryFromReader(message: ListAllInterestsRequest, reader: jspb.BinaryReader): ListAllInterestsRequest;
}

export namespace ListAllInterestsRequest {
  export type AsObject = {
    headers?: iotics_api_common_pb.Headers.AsObject,
    args?: ListAllInterestsRequest.Arguments.AsObject,
    range?: iotics_api_common_pb.Range.AsObject,
  }

  export class Arguments extends jspb.Message {
    hasTwinid(): boolean;
    clearTwinid(): void;
    getTwinid(): iotics_api_common_pb.TwinID | undefined;
    setTwinid(value?: iotics_api_common_pb.TwinID): void;

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
      twinid?: iotics_api_common_pb.TwinID.AsObject,
    }
  }
}

export class ListAllInterestsResponse extends jspb.Message {
  hasHeaders(): boolean;
  clearHeaders(): void;
  getHeaders(): iotics_api_common_pb.Headers | undefined;
  setHeaders(value?: iotics_api_common_pb.Headers): void;

  hasPayload(): boolean;
  clearPayload(): void;
  getPayload(): ListAllInterestsResponse.Payload | undefined;
  setPayload(value?: ListAllInterestsResponse.Payload): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAllInterestsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListAllInterestsResponse): ListAllInterestsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAllInterestsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAllInterestsResponse;
  static deserializeBinaryFromReader(message: ListAllInterestsResponse, reader: jspb.BinaryReader): ListAllInterestsResponse;
}

export namespace ListAllInterestsResponse {
  export type AsObject = {
    headers?: iotics_api_common_pb.Headers.AsObject,
    payload?: ListAllInterestsResponse.Payload.AsObject,
  }

  export class Payload extends jspb.Message {
    clearInterestsList(): void;
    getInterestsList(): Array<Interest>;
    setInterestsList(value: Array<Interest>): void;
    addInterests(value?: Interest, index?: number): Interest;

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
      interestsList: Array<Interest.AsObject>,
    }
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

export class DeleteInterestRequest extends jspb.Message {
  hasHeaders(): boolean;
  clearHeaders(): void;
  getHeaders(): iotics_api_common_pb.Headers | undefined;
  setHeaders(value?: iotics_api_common_pb.Headers): void;

  hasArgs(): boolean;
  clearArgs(): void;
  getArgs(): DeleteInterestRequest.Arguments | undefined;
  setArgs(value?: DeleteInterestRequest.Arguments): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteInterestRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteInterestRequest): DeleteInterestRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteInterestRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteInterestRequest;
  static deserializeBinaryFromReader(message: DeleteInterestRequest, reader: jspb.BinaryReader): DeleteInterestRequest;
}

export namespace DeleteInterestRequest {
  export type AsObject = {
    headers?: iotics_api_common_pb.Headers.AsObject,
    args?: DeleteInterestRequest.Arguments.AsObject,
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

export class DeleteInterestResponse extends jspb.Message {
  hasHeaders(): boolean;
  clearHeaders(): void;
  getHeaders(): iotics_api_common_pb.Headers | undefined;
  setHeaders(value?: iotics_api_common_pb.Headers): void;

  hasPayload(): boolean;
  clearPayload(): void;
  getPayload(): DeleteInterestResponse.Payload | undefined;
  setPayload(value?: DeleteInterestResponse.Payload): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteInterestResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteInterestResponse): DeleteInterestResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteInterestResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteInterestResponse;
  static deserializeBinaryFromReader(message: DeleteInterestResponse, reader: jspb.BinaryReader): DeleteInterestResponse;
}

export namespace DeleteInterestResponse {
  export type AsObject = {
    headers?: iotics_api_common_pb.Headers.AsObject,
    payload?: DeleteInterestResponse.Payload.AsObject,
  }

  export class Payload extends jspb.Message {
    hasInterest(): boolean;
    clearInterest(): void;
    getInterest(): Interest | undefined;
    setInterest(value?: Interest): void;

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
    }
  }
}

