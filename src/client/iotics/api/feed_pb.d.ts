// package: iotics.api
// file: iotics/api/feed.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as iotics_api_common_pb from "../../iotics/api/common_pb";

export class Feed extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): iotics_api_common_pb.FeedID | undefined;
  setId(value?: iotics_api_common_pb.FeedID): void;

  hasTwinid(): boolean;
  clearTwinid(): void;
  getTwinid(): iotics_api_common_pb.TwinID | undefined;
  setTwinid(value?: iotics_api_common_pb.TwinID): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Feed.AsObject;
  static toObject(includeInstance: boolean, msg: Feed): Feed.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Feed, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Feed;
  static deserializeBinaryFromReader(message: Feed, reader: jspb.BinaryReader): Feed;
}

export namespace Feed {
  export type AsObject = {
    id?: iotics_api_common_pb.FeedID.AsObject,
    twinid?: iotics_api_common_pb.TwinID.AsObject,
  }
}

export class CreateFeedRequest extends jspb.Message {
  hasHeaders(): boolean;
  clearHeaders(): void;
  getHeaders(): iotics_api_common_pb.Headers | undefined;
  setHeaders(value?: iotics_api_common_pb.Headers): void;

  hasArgs(): boolean;
  clearArgs(): void;
  getArgs(): CreateFeedRequest.Arguments | undefined;
  setArgs(value?: CreateFeedRequest.Arguments): void;

  hasPayload(): boolean;
  clearPayload(): void;
  getPayload(): CreateFeedRequest.Payload | undefined;
  setPayload(value?: CreateFeedRequest.Payload): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateFeedRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateFeedRequest): CreateFeedRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateFeedRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateFeedRequest;
  static deserializeBinaryFromReader(message: CreateFeedRequest, reader: jspb.BinaryReader): CreateFeedRequest;
}

export namespace CreateFeedRequest {
  export type AsObject = {
    headers?: iotics_api_common_pb.Headers.AsObject,
    args?: CreateFeedRequest.Arguments.AsObject,
    payload?: CreateFeedRequest.Payload.AsObject,
  }

  export class Payload extends jspb.Message {
    hasFeedid(): boolean;
    clearFeedid(): void;
    getFeedid(): iotics_api_common_pb.FeedID | undefined;
    setFeedid(value?: iotics_api_common_pb.FeedID): void;

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
      feedid?: iotics_api_common_pb.FeedID.AsObject,
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

export class CreateFeedResponse extends jspb.Message {
  hasHeaders(): boolean;
  clearHeaders(): void;
  getHeaders(): iotics_api_common_pb.Headers | undefined;
  setHeaders(value?: iotics_api_common_pb.Headers): void;

  hasPayload(): boolean;
  clearPayload(): void;
  getPayload(): CreateFeedResponse.Payload | undefined;
  setPayload(value?: CreateFeedResponse.Payload): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateFeedResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateFeedResponse): CreateFeedResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateFeedResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateFeedResponse;
  static deserializeBinaryFromReader(message: CreateFeedResponse, reader: jspb.BinaryReader): CreateFeedResponse;
}

export namespace CreateFeedResponse {
  export type AsObject = {
    headers?: iotics_api_common_pb.Headers.AsObject,
    payload?: CreateFeedResponse.Payload.AsObject,
  }

  export class Payload extends jspb.Message {
    hasFeed(): boolean;
    clearFeed(): void;
    getFeed(): Feed | undefined;
    setFeed(value?: Feed): void;

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
      feed?: Feed.AsObject,
    }
  }
}

export class DeleteFeedRequest extends jspb.Message {
  hasHeaders(): boolean;
  clearHeaders(): void;
  getHeaders(): iotics_api_common_pb.Headers | undefined;
  setHeaders(value?: iotics_api_common_pb.Headers): void;

  hasArgs(): boolean;
  clearArgs(): void;
  getArgs(): DeleteFeedRequest.Arguments | undefined;
  setArgs(value?: DeleteFeedRequest.Arguments): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteFeedRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteFeedRequest): DeleteFeedRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteFeedRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteFeedRequest;
  static deserializeBinaryFromReader(message: DeleteFeedRequest, reader: jspb.BinaryReader): DeleteFeedRequest;
}

export namespace DeleteFeedRequest {
  export type AsObject = {
    headers?: iotics_api_common_pb.Headers.AsObject,
    args?: DeleteFeedRequest.Arguments.AsObject,
  }

  export class Arguments extends jspb.Message {
    hasFeed(): boolean;
    clearFeed(): void;
    getFeed(): Feed | undefined;
    setFeed(value?: Feed): void;

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
      feed?: Feed.AsObject,
    }
  }
}

export class DeleteFeedResponse extends jspb.Message {
  hasHeaders(): boolean;
  clearHeaders(): void;
  getHeaders(): iotics_api_common_pb.Headers | undefined;
  setHeaders(value?: iotics_api_common_pb.Headers): void;

  hasPayload(): boolean;
  clearPayload(): void;
  getPayload(): DeleteFeedResponse.Payload | undefined;
  setPayload(value?: DeleteFeedResponse.Payload): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteFeedResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteFeedResponse): DeleteFeedResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteFeedResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteFeedResponse;
  static deserializeBinaryFromReader(message: DeleteFeedResponse, reader: jspb.BinaryReader): DeleteFeedResponse;
}

export namespace DeleteFeedResponse {
  export type AsObject = {
    headers?: iotics_api_common_pb.Headers.AsObject,
    payload?: DeleteFeedResponse.Payload.AsObject,
  }

  export class Payload extends jspb.Message {
    hasFeed(): boolean;
    clearFeed(): void;
    getFeed(): Feed | undefined;
    setFeed(value?: Feed): void;

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
      feed?: Feed.AsObject,
    }
  }
}

export class UpdateFeedRequest extends jspb.Message {
  hasHeaders(): boolean;
  clearHeaders(): void;
  getHeaders(): iotics_api_common_pb.Headers | undefined;
  setHeaders(value?: iotics_api_common_pb.Headers): void;

  hasArgs(): boolean;
  clearArgs(): void;
  getArgs(): UpdateFeedRequest.Arguments | undefined;
  setArgs(value?: UpdateFeedRequest.Arguments): void;

  hasPayload(): boolean;
  clearPayload(): void;
  getPayload(): UpdateFeedRequest.Payload | undefined;
  setPayload(value?: UpdateFeedRequest.Payload): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateFeedRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateFeedRequest): UpdateFeedRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateFeedRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateFeedRequest;
  static deserializeBinaryFromReader(message: UpdateFeedRequest, reader: jspb.BinaryReader): UpdateFeedRequest;
}

export namespace UpdateFeedRequest {
  export type AsObject = {
    headers?: iotics_api_common_pb.Headers.AsObject,
    args?: UpdateFeedRequest.Arguments.AsObject,
    payload?: UpdateFeedRequest.Payload.AsObject,
  }

  export class Payload extends jspb.Message {
    hasStorelast(): boolean;
    clearStorelast(): void;
    getStorelast(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setStorelast(value?: google_protobuf_wrappers_pb.BoolValue): void;

    hasValues(): boolean;
    clearValues(): void;
    getValues(): iotics_api_common_pb.Values | undefined;
    setValues(value?: iotics_api_common_pb.Values): void;

    hasProperties(): boolean;
    clearProperties(): void;
    getProperties(): iotics_api_common_pb.PropertyUpdate | undefined;
    setProperties(value?: iotics_api_common_pb.PropertyUpdate): void;

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
      storelast?: google_protobuf_wrappers_pb.BoolValue.AsObject,
      values?: iotics_api_common_pb.Values.AsObject,
      properties?: iotics_api_common_pb.PropertyUpdate.AsObject,
    }
  }

  export class Arguments extends jspb.Message {
    hasFeed(): boolean;
    clearFeed(): void;
    getFeed(): Feed | undefined;
    setFeed(value?: Feed): void;

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
      feed?: Feed.AsObject,
    }
  }
}

export class UpdateFeedResponse extends jspb.Message {
  hasHeaders(): boolean;
  clearHeaders(): void;
  getHeaders(): iotics_api_common_pb.Headers | undefined;
  setHeaders(value?: iotics_api_common_pb.Headers): void;

  hasPayload(): boolean;
  clearPayload(): void;
  getPayload(): UpdateFeedResponse.Payload | undefined;
  setPayload(value?: UpdateFeedResponse.Payload): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateFeedResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateFeedResponse): UpdateFeedResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateFeedResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateFeedResponse;
  static deserializeBinaryFromReader(message: UpdateFeedResponse, reader: jspb.BinaryReader): UpdateFeedResponse;
}

export namespace UpdateFeedResponse {
  export type AsObject = {
    headers?: iotics_api_common_pb.Headers.AsObject,
    payload?: UpdateFeedResponse.Payload.AsObject,
  }

  export class Payload extends jspb.Message {
    hasFeed(): boolean;
    clearFeed(): void;
    getFeed(): Feed | undefined;
    setFeed(value?: Feed): void;

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
      feed?: Feed.AsObject,
    }
  }
}

export class ShareFeedDataRequest extends jspb.Message {
  hasHeaders(): boolean;
  clearHeaders(): void;
  getHeaders(): iotics_api_common_pb.Headers | undefined;
  setHeaders(value?: iotics_api_common_pb.Headers): void;

  hasArgs(): boolean;
  clearArgs(): void;
  getArgs(): ShareFeedDataRequest.Arguments | undefined;
  setArgs(value?: ShareFeedDataRequest.Arguments): void;

  hasPayload(): boolean;
  clearPayload(): void;
  getPayload(): ShareFeedDataRequest.Payload | undefined;
  setPayload(value?: ShareFeedDataRequest.Payload): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShareFeedDataRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ShareFeedDataRequest): ShareFeedDataRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ShareFeedDataRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShareFeedDataRequest;
  static deserializeBinaryFromReader(message: ShareFeedDataRequest, reader: jspb.BinaryReader): ShareFeedDataRequest;
}

export namespace ShareFeedDataRequest {
  export type AsObject = {
    headers?: iotics_api_common_pb.Headers.AsObject,
    args?: ShareFeedDataRequest.Arguments.AsObject,
    payload?: ShareFeedDataRequest.Payload.AsObject,
  }

  export class Payload extends jspb.Message {
    hasSample(): boolean;
    clearSample(): void;
    getSample(): iotics_api_common_pb.FeedData | undefined;
    setSample(value?: iotics_api_common_pb.FeedData): void;

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
      sample?: iotics_api_common_pb.FeedData.AsObject,
    }
  }

  export class Arguments extends jspb.Message {
    hasFeed(): boolean;
    clearFeed(): void;
    getFeed(): Feed | undefined;
    setFeed(value?: Feed): void;

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
      feed?: Feed.AsObject,
    }
  }
}

export class ShareFeedDataResponse extends jspb.Message {
  hasHeaders(): boolean;
  clearHeaders(): void;
  getHeaders(): iotics_api_common_pb.Headers | undefined;
  setHeaders(value?: iotics_api_common_pb.Headers): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShareFeedDataResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ShareFeedDataResponse): ShareFeedDataResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ShareFeedDataResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShareFeedDataResponse;
  static deserializeBinaryFromReader(message: ShareFeedDataResponse, reader: jspb.BinaryReader): ShareFeedDataResponse;
}

export namespace ShareFeedDataResponse {
  export type AsObject = {
    headers?: iotics_api_common_pb.Headers.AsObject,
  }
}

export class ListAllFeedsRequest extends jspb.Message {
  hasHeaders(): boolean;
  clearHeaders(): void;
  getHeaders(): iotics_api_common_pb.Headers | undefined;
  setHeaders(value?: iotics_api_common_pb.Headers): void;

  hasArgs(): boolean;
  clearArgs(): void;
  getArgs(): ListAllFeedsRequest.Arguments | undefined;
  setArgs(value?: ListAllFeedsRequest.Arguments): void;

  hasRange(): boolean;
  clearRange(): void;
  getRange(): iotics_api_common_pb.Range | undefined;
  setRange(value?: iotics_api_common_pb.Range): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAllFeedsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListAllFeedsRequest): ListAllFeedsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAllFeedsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAllFeedsRequest;
  static deserializeBinaryFromReader(message: ListAllFeedsRequest, reader: jspb.BinaryReader): ListAllFeedsRequest;
}

export namespace ListAllFeedsRequest {
  export type AsObject = {
    headers?: iotics_api_common_pb.Headers.AsObject,
    args?: ListAllFeedsRequest.Arguments.AsObject,
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

export class ListAllFeedsResponse extends jspb.Message {
  hasHeaders(): boolean;
  clearHeaders(): void;
  getHeaders(): iotics_api_common_pb.Headers | undefined;
  setHeaders(value?: iotics_api_common_pb.Headers): void;

  hasPayload(): boolean;
  clearPayload(): void;
  getPayload(): ListAllFeedsResponse.Payload | undefined;
  setPayload(value?: ListAllFeedsResponse.Payload): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAllFeedsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListAllFeedsResponse): ListAllFeedsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAllFeedsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAllFeedsResponse;
  static deserializeBinaryFromReader(message: ListAllFeedsResponse, reader: jspb.BinaryReader): ListAllFeedsResponse;
}

export namespace ListAllFeedsResponse {
  export type AsObject = {
    headers?: iotics_api_common_pb.Headers.AsObject,
    payload?: ListAllFeedsResponse.Payload.AsObject,
  }

  export class Payload extends jspb.Message {
    clearFeedsList(): void;
    getFeedsList(): Array<Feed>;
    setFeedsList(value: Array<Feed>): void;
    addFeeds(value?: Feed, index?: number): Feed;

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
      feedsList: Array<Feed.AsObject>,
    }
  }
}

export class DescribeFeedRequest extends jspb.Message {
  hasHeaders(): boolean;
  clearHeaders(): void;
  getHeaders(): iotics_api_common_pb.Headers | undefined;
  setHeaders(value?: iotics_api_common_pb.Headers): void;

  hasArgs(): boolean;
  clearArgs(): void;
  getArgs(): DescribeFeedRequest.Arguments | undefined;
  setArgs(value?: DescribeFeedRequest.Arguments): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DescribeFeedRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DescribeFeedRequest): DescribeFeedRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DescribeFeedRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DescribeFeedRequest;
  static deserializeBinaryFromReader(message: DescribeFeedRequest, reader: jspb.BinaryReader): DescribeFeedRequest;
}

export namespace DescribeFeedRequest {
  export type AsObject = {
    headers?: iotics_api_common_pb.Headers.AsObject,
    args?: DescribeFeedRequest.Arguments.AsObject,
  }

  export class Arguments extends jspb.Message {
    hasFeed(): boolean;
    clearFeed(): void;
    getFeed(): Feed | undefined;
    setFeed(value?: Feed): void;

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
      feed?: Feed.AsObject,
      remotehostid?: iotics_api_common_pb.HostID.AsObject,
    }
  }
}

export class DescribeFeedResponse extends jspb.Message {
  hasHeaders(): boolean;
  clearHeaders(): void;
  getHeaders(): iotics_api_common_pb.Headers | undefined;
  setHeaders(value?: iotics_api_common_pb.Headers): void;

  hasPayload(): boolean;
  clearPayload(): void;
  getPayload(): DescribeFeedResponse.Payload | undefined;
  setPayload(value?: DescribeFeedResponse.Payload): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DescribeFeedResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DescribeFeedResponse): DescribeFeedResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DescribeFeedResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DescribeFeedResponse;
  static deserializeBinaryFromReader(message: DescribeFeedResponse, reader: jspb.BinaryReader): DescribeFeedResponse;
}

export namespace DescribeFeedResponse {
  export type AsObject = {
    headers?: iotics_api_common_pb.Headers.AsObject,
    payload?: DescribeFeedResponse.Payload.AsObject,
  }

  export class MetaResult extends jspb.Message {
    clearValuesList(): void;
    getValuesList(): Array<iotics_api_common_pb.Value>;
    setValuesList(value: Array<iotics_api_common_pb.Value>): void;
    addValues(value?: iotics_api_common_pb.Value, index?: number): iotics_api_common_pb.Value;

    getStorelast(): boolean;
    setStorelast(value: boolean): void;

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
      storelast: boolean,
      propertiesList: Array<iotics_api_common_pb.Property.AsObject>,
    }
  }

  export class Payload extends jspb.Message {
    hasFeed(): boolean;
    clearFeed(): void;
    getFeed(): Feed | undefined;
    setFeed(value?: Feed): void;

    hasResult(): boolean;
    clearResult(): void;
    getResult(): DescribeFeedResponse.MetaResult | undefined;
    setResult(value?: DescribeFeedResponse.MetaResult): void;

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
      feed?: Feed.AsObject,
      result?: DescribeFeedResponse.MetaResult.AsObject,
      remotehostid?: iotics_api_common_pb.HostID.AsObject,
    }
  }
}

export class UpsertFeedWithMeta extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getStorelast(): boolean;
  setStorelast(value: boolean): void;

  clearValuesList(): void;
  getValuesList(): Array<iotics_api_common_pb.Value>;
  setValuesList(value: Array<iotics_api_common_pb.Value>): void;
  addValues(value?: iotics_api_common_pb.Value, index?: number): iotics_api_common_pb.Value;

  clearPropertiesList(): void;
  getPropertiesList(): Array<iotics_api_common_pb.Property>;
  setPropertiesList(value: Array<iotics_api_common_pb.Property>): void;
  addProperties(value?: iotics_api_common_pb.Property, index?: number): iotics_api_common_pb.Property;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpsertFeedWithMeta.AsObject;
  static toObject(includeInstance: boolean, msg: UpsertFeedWithMeta): UpsertFeedWithMeta.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpsertFeedWithMeta, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpsertFeedWithMeta;
  static deserializeBinaryFromReader(message: UpsertFeedWithMeta, reader: jspb.BinaryReader): UpsertFeedWithMeta;
}

export namespace UpsertFeedWithMeta {
  export type AsObject = {
    id: string,
    storelast: boolean,
    valuesList: Array<iotics_api_common_pb.Value.AsObject>,
    propertiesList: Array<iotics_api_common_pb.Property.AsObject>,
  }
}

