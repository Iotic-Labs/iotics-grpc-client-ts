// package: iotics.api
// file: iotics/api/twin.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as iotics_api_common_pb from "../../iotics/api/common_pb";
import * as iotics_api_feed_pb from "../../iotics/api/feed_pb";
import * as iotics_api_input_pb from "../../iotics/api/input_pb";

export class ListAllTwinsRequest extends jspb.Message {
  hasHeaders(): boolean;
  clearHeaders(): void;
  getHeaders(): iotics_api_common_pb.Headers | undefined;
  setHeaders(value?: iotics_api_common_pb.Headers): void;

  hasRange(): boolean;
  clearRange(): void;
  getRange(): iotics_api_common_pb.Range | undefined;
  setRange(value?: iotics_api_common_pb.Range): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAllTwinsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListAllTwinsRequest): ListAllTwinsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAllTwinsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAllTwinsRequest;
  static deserializeBinaryFromReader(message: ListAllTwinsRequest, reader: jspb.BinaryReader): ListAllTwinsRequest;
}

export namespace ListAllTwinsRequest {
  export type AsObject = {
    headers?: iotics_api_common_pb.Headers.AsObject,
    range?: iotics_api_common_pb.Range.AsObject,
  }
}

export class ListAllTwinsResponse extends jspb.Message {
  hasHeaders(): boolean;
  clearHeaders(): void;
  getHeaders(): iotics_api_common_pb.Headers | undefined;
  setHeaders(value?: iotics_api_common_pb.Headers): void;

  hasPayload(): boolean;
  clearPayload(): void;
  getPayload(): ListAllTwinsResponse.Payload | undefined;
  setPayload(value?: ListAllTwinsResponse.Payload): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAllTwinsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListAllTwinsResponse): ListAllTwinsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAllTwinsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAllTwinsResponse;
  static deserializeBinaryFromReader(message: ListAllTwinsResponse, reader: jspb.BinaryReader): ListAllTwinsResponse;
}

export namespace ListAllTwinsResponse {
  export type AsObject = {
    headers?: iotics_api_common_pb.Headers.AsObject,
    payload?: ListAllTwinsResponse.Payload.AsObject,
  }

  export class TwinDetails extends jspb.Message {
    hasTwinid(): boolean;
    clearTwinid(): void;
    getTwinid(): iotics_api_common_pb.TwinID | undefined;
    setTwinid(value?: iotics_api_common_pb.TwinID): void;

    hasLocation(): boolean;
    clearLocation(): void;
    getLocation(): iotics_api_common_pb.GeoLocation | undefined;
    setLocation(value?: iotics_api_common_pb.GeoLocation): void;

    clearPropertiesList(): void;
    getPropertiesList(): Array<iotics_api_common_pb.Property>;
    setPropertiesList(value: Array<iotics_api_common_pb.Property>): void;
    addProperties(value?: iotics_api_common_pb.Property, index?: number): iotics_api_common_pb.Property;

    hasUpdatedat(): boolean;
    clearUpdatedat(): void;
    getUpdatedat(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatedat(value?: google_protobuf_timestamp_pb.Timestamp): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TwinDetails.AsObject;
    static toObject(includeInstance: boolean, msg: TwinDetails): TwinDetails.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TwinDetails, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TwinDetails;
    static deserializeBinaryFromReader(message: TwinDetails, reader: jspb.BinaryReader): TwinDetails;
  }

  export namespace TwinDetails {
    export type AsObject = {
      twinid?: iotics_api_common_pb.TwinID.AsObject,
      location?: iotics_api_common_pb.GeoLocation.AsObject,
      propertiesList: Array<iotics_api_common_pb.Property.AsObject>,
      updatedat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
  }

  export class Payload extends jspb.Message {
    clearTwinsList(): void;
    getTwinsList(): Array<ListAllTwinsResponse.TwinDetails>;
    setTwinsList(value: Array<ListAllTwinsResponse.TwinDetails>): void;
    addTwins(value?: ListAllTwinsResponse.TwinDetails, index?: number): ListAllTwinsResponse.TwinDetails;

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
      twinsList: Array<ListAllTwinsResponse.TwinDetails.AsObject>,
    }
  }
}

export class CreateTwinRequest extends jspb.Message {
  hasHeaders(): boolean;
  clearHeaders(): void;
  getHeaders(): iotics_api_common_pb.Headers | undefined;
  setHeaders(value?: iotics_api_common_pb.Headers): void;

  hasPayload(): boolean;
  clearPayload(): void;
  getPayload(): CreateTwinRequest.Payload | undefined;
  setPayload(value?: CreateTwinRequest.Payload): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTwinRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTwinRequest): CreateTwinRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateTwinRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTwinRequest;
  static deserializeBinaryFromReader(message: CreateTwinRequest, reader: jspb.BinaryReader): CreateTwinRequest;
}

export namespace CreateTwinRequest {
  export type AsObject = {
    headers?: iotics_api_common_pb.Headers.AsObject,
    payload?: CreateTwinRequest.Payload.AsObject,
  }

  export class Payload extends jspb.Message {
    getId(): string;
    setId(value: string): void;

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
      id: string,
    }
  }
}

export class CreateTwinResponse extends jspb.Message {
  hasHeaders(): boolean;
  clearHeaders(): void;
  getHeaders(): iotics_api_common_pb.Headers | undefined;
  setHeaders(value?: iotics_api_common_pb.Headers): void;

  hasPayload(): boolean;
  clearPayload(): void;
  getPayload(): CreateTwinResponse.Payload | undefined;
  setPayload(value?: CreateTwinResponse.Payload): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTwinResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTwinResponse): CreateTwinResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateTwinResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTwinResponse;
  static deserializeBinaryFromReader(message: CreateTwinResponse, reader: jspb.BinaryReader): CreateTwinResponse;
}

export namespace CreateTwinResponse {
  export type AsObject = {
    headers?: iotics_api_common_pb.Headers.AsObject,
    payload?: CreateTwinResponse.Payload.AsObject,
  }

  export class Payload extends jspb.Message {
    hasTwinid(): boolean;
    clearTwinid(): void;
    getTwinid(): iotics_api_common_pb.TwinID | undefined;
    setTwinid(value?: iotics_api_common_pb.TwinID): void;

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
      twinid?: iotics_api_common_pb.TwinID.AsObject,
    }
  }
}

export class DeleteTwinRequest extends jspb.Message {
  hasHeaders(): boolean;
  clearHeaders(): void;
  getHeaders(): iotics_api_common_pb.Headers | undefined;
  setHeaders(value?: iotics_api_common_pb.Headers): void;

  hasArgs(): boolean;
  clearArgs(): void;
  getArgs(): DeleteTwinRequest.Arguments | undefined;
  setArgs(value?: DeleteTwinRequest.Arguments): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteTwinRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteTwinRequest): DeleteTwinRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteTwinRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteTwinRequest;
  static deserializeBinaryFromReader(message: DeleteTwinRequest, reader: jspb.BinaryReader): DeleteTwinRequest;
}

export namespace DeleteTwinRequest {
  export type AsObject = {
    headers?: iotics_api_common_pb.Headers.AsObject,
    args?: DeleteTwinRequest.Arguments.AsObject,
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

export class DeleteTwinResponse extends jspb.Message {
  hasHeaders(): boolean;
  clearHeaders(): void;
  getHeaders(): iotics_api_common_pb.Headers | undefined;
  setHeaders(value?: iotics_api_common_pb.Headers): void;

  hasPayload(): boolean;
  clearPayload(): void;
  getPayload(): DeleteTwinResponse.Payload | undefined;
  setPayload(value?: DeleteTwinResponse.Payload): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteTwinResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteTwinResponse): DeleteTwinResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteTwinResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteTwinResponse;
  static deserializeBinaryFromReader(message: DeleteTwinResponse, reader: jspb.BinaryReader): DeleteTwinResponse;
}

export namespace DeleteTwinResponse {
  export type AsObject = {
    headers?: iotics_api_common_pb.Headers.AsObject,
    payload?: DeleteTwinResponse.Payload.AsObject,
  }

  export class Payload extends jspb.Message {
    hasTwinid(): boolean;
    clearTwinid(): void;
    getTwinid(): iotics_api_common_pb.TwinID | undefined;
    setTwinid(value?: iotics_api_common_pb.TwinID): void;

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
      twinid?: iotics_api_common_pb.TwinID.AsObject,
    }
  }
}

export class DescribeTwinRequest extends jspb.Message {
  hasHeaders(): boolean;
  clearHeaders(): void;
  getHeaders(): iotics_api_common_pb.Headers | undefined;
  setHeaders(value?: iotics_api_common_pb.Headers): void;

  hasArgs(): boolean;
  clearArgs(): void;
  getArgs(): DescribeTwinRequest.Arguments | undefined;
  setArgs(value?: DescribeTwinRequest.Arguments): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DescribeTwinRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DescribeTwinRequest): DescribeTwinRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DescribeTwinRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DescribeTwinRequest;
  static deserializeBinaryFromReader(message: DescribeTwinRequest, reader: jspb.BinaryReader): DescribeTwinRequest;
}

export namespace DescribeTwinRequest {
  export type AsObject = {
    headers?: iotics_api_common_pb.Headers.AsObject,
    args?: DescribeTwinRequest.Arguments.AsObject,
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

export class FeedMeta extends jspb.Message {
  hasFeedid(): boolean;
  clearFeedid(): void;
  getFeedid(): iotics_api_feed_pb.FeedID | undefined;
  setFeedid(value?: iotics_api_feed_pb.FeedID): void;

  getStorelast(): boolean;
  setStorelast(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeedMeta.AsObject;
  static toObject(includeInstance: boolean, msg: FeedMeta): FeedMeta.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FeedMeta, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeedMeta;
  static deserializeBinaryFromReader(message: FeedMeta, reader: jspb.BinaryReader): FeedMeta;
}

export namespace FeedMeta {
  export type AsObject = {
    feedid?: iotics_api_feed_pb.FeedID.AsObject,
    storelast: boolean,
  }
}

export class InputMeta extends jspb.Message {
  hasInputid(): boolean;
  clearInputid(): void;
  getInputid(): iotics_api_input_pb.InputID | undefined;
  setInputid(value?: iotics_api_input_pb.InputID): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InputMeta.AsObject;
  static toObject(includeInstance: boolean, msg: InputMeta): InputMeta.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InputMeta, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InputMeta;
  static deserializeBinaryFromReader(message: InputMeta, reader: jspb.BinaryReader): InputMeta;
}

export namespace InputMeta {
  export type AsObject = {
    inputid?: iotics_api_input_pb.InputID.AsObject,
  }
}

export class DescribeTwinResponse extends jspb.Message {
  hasHeaders(): boolean;
  clearHeaders(): void;
  getHeaders(): iotics_api_common_pb.Headers | undefined;
  setHeaders(value?: iotics_api_common_pb.Headers): void;

  hasPayload(): boolean;
  clearPayload(): void;
  getPayload(): DescribeTwinResponse.Payload | undefined;
  setPayload(value?: DescribeTwinResponse.Payload): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DescribeTwinResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DescribeTwinResponse): DescribeTwinResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DescribeTwinResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DescribeTwinResponse;
  static deserializeBinaryFromReader(message: DescribeTwinResponse, reader: jspb.BinaryReader): DescribeTwinResponse;
}

export namespace DescribeTwinResponse {
  export type AsObject = {
    headers?: iotics_api_common_pb.Headers.AsObject,
    payload?: DescribeTwinResponse.Payload.AsObject,
  }

  export class MetaResult extends jspb.Message {
    hasLocation(): boolean;
    clearLocation(): void;
    getLocation(): iotics_api_common_pb.GeoLocation | undefined;
    setLocation(value?: iotics_api_common_pb.GeoLocation): void;

    clearFeedsList(): void;
    getFeedsList(): Array<FeedMeta>;
    setFeedsList(value: Array<FeedMeta>): void;
    addFeeds(value?: FeedMeta, index?: number): FeedMeta;

    clearInputsList(): void;
    getInputsList(): Array<InputMeta>;
    setInputsList(value: Array<InputMeta>): void;
    addInputs(value?: InputMeta, index?: number): InputMeta;

    clearPropertiesList(): void;
    getPropertiesList(): Array<iotics_api_common_pb.Property>;
    setPropertiesList(value: Array<iotics_api_common_pb.Property>): void;
    addProperties(value?: iotics_api_common_pb.Property, index?: number): iotics_api_common_pb.Property;

    hasUpdatedat(): boolean;
    clearUpdatedat(): void;
    getUpdatedat(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatedat(value?: google_protobuf_timestamp_pb.Timestamp): void;

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
      location?: iotics_api_common_pb.GeoLocation.AsObject,
      feedsList: Array<FeedMeta.AsObject>,
      inputsList: Array<InputMeta.AsObject>,
      propertiesList: Array<iotics_api_common_pb.Property.AsObject>,
      updatedat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
  }

  export class Payload extends jspb.Message {
    hasTwinid(): boolean;
    clearTwinid(): void;
    getTwinid(): iotics_api_common_pb.TwinID | undefined;
    setTwinid(value?: iotics_api_common_pb.TwinID): void;

    hasResult(): boolean;
    clearResult(): void;
    getResult(): DescribeTwinResponse.MetaResult | undefined;
    setResult(value?: DescribeTwinResponse.MetaResult): void;

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
      twinid?: iotics_api_common_pb.TwinID.AsObject,
      result?: DescribeTwinResponse.MetaResult.AsObject,
    }
  }
}

export class GeoLocationUpdate extends jspb.Message {
  hasLocation(): boolean;
  clearLocation(): void;
  getLocation(): iotics_api_common_pb.GeoLocation | undefined;
  setLocation(value?: iotics_api_common_pb.GeoLocation): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GeoLocationUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: GeoLocationUpdate): GeoLocationUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GeoLocationUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GeoLocationUpdate;
  static deserializeBinaryFromReader(message: GeoLocationUpdate, reader: jspb.BinaryReader): GeoLocationUpdate;
}

export namespace GeoLocationUpdate {
  export type AsObject = {
    location?: iotics_api_common_pb.GeoLocation.AsObject,
  }
}

export class UpdateTwinRequest extends jspb.Message {
  hasHeaders(): boolean;
  clearHeaders(): void;
  getHeaders(): iotics_api_common_pb.Headers | undefined;
  setHeaders(value?: iotics_api_common_pb.Headers): void;

  hasArgs(): boolean;
  clearArgs(): void;
  getArgs(): UpdateTwinRequest.Arguments | undefined;
  setArgs(value?: UpdateTwinRequest.Arguments): void;

  hasPayload(): boolean;
  clearPayload(): void;
  getPayload(): UpdateTwinRequest.Payload | undefined;
  setPayload(value?: UpdateTwinRequest.Payload): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateTwinRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateTwinRequest): UpdateTwinRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateTwinRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateTwinRequest;
  static deserializeBinaryFromReader(message: UpdateTwinRequest, reader: jspb.BinaryReader): UpdateTwinRequest;
}

export namespace UpdateTwinRequest {
  export type AsObject = {
    headers?: iotics_api_common_pb.Headers.AsObject,
    args?: UpdateTwinRequest.Arguments.AsObject,
    payload?: UpdateTwinRequest.Payload.AsObject,
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

  export class Payload extends jspb.Message {
    hasProperties(): boolean;
    clearProperties(): void;
    getProperties(): iotics_api_common_pb.PropertyUpdate | undefined;
    setProperties(value?: iotics_api_common_pb.PropertyUpdate): void;

    hasLocation(): boolean;
    clearLocation(): void;
    getLocation(): GeoLocationUpdate | undefined;
    setLocation(value?: GeoLocationUpdate): void;

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
      properties?: iotics_api_common_pb.PropertyUpdate.AsObject,
      location?: GeoLocationUpdate.AsObject,
    }
  }
}

export class UpdateTwinResponse extends jspb.Message {
  hasHeaders(): boolean;
  clearHeaders(): void;
  getHeaders(): iotics_api_common_pb.Headers | undefined;
  setHeaders(value?: iotics_api_common_pb.Headers): void;

  hasPayload(): boolean;
  clearPayload(): void;
  getPayload(): UpdateTwinResponse.Payload | undefined;
  setPayload(value?: UpdateTwinResponse.Payload): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateTwinResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateTwinResponse): UpdateTwinResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateTwinResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateTwinResponse;
  static deserializeBinaryFromReader(message: UpdateTwinResponse, reader: jspb.BinaryReader): UpdateTwinResponse;
}

export namespace UpdateTwinResponse {
  export type AsObject = {
    headers?: iotics_api_common_pb.Headers.AsObject,
    payload?: UpdateTwinResponse.Payload.AsObject,
  }

  export class Payload extends jspb.Message {
    hasTwinid(): boolean;
    clearTwinid(): void;
    getTwinid(): iotics_api_common_pb.TwinID | undefined;
    setTwinid(value?: iotics_api_common_pb.TwinID): void;

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
      twinid?: iotics_api_common_pb.TwinID.AsObject,
    }
  }
}

export class UpsertTwinRequest extends jspb.Message {
  hasHeaders(): boolean;
  clearHeaders(): void;
  getHeaders(): iotics_api_common_pb.Headers | undefined;
  setHeaders(value?: iotics_api_common_pb.Headers): void;

  hasPayload(): boolean;
  clearPayload(): void;
  getPayload(): UpsertTwinRequest.Payload | undefined;
  setPayload(value?: UpsertTwinRequest.Payload): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpsertTwinRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpsertTwinRequest): UpsertTwinRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpsertTwinRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpsertTwinRequest;
  static deserializeBinaryFromReader(message: UpsertTwinRequest, reader: jspb.BinaryReader): UpsertTwinRequest;
}

export namespace UpsertTwinRequest {
  export type AsObject = {
    headers?: iotics_api_common_pb.Headers.AsObject,
    payload?: UpsertTwinRequest.Payload.AsObject,
  }

  export class Payload extends jspb.Message {
    hasTwinid(): boolean;
    clearTwinid(): void;
    getTwinid(): iotics_api_common_pb.TwinID | undefined;
    setTwinid(value?: iotics_api_common_pb.TwinID): void;

    clearPropertiesList(): void;
    getPropertiesList(): Array<iotics_api_common_pb.Property>;
    setPropertiesList(value: Array<iotics_api_common_pb.Property>): void;
    addProperties(value?: iotics_api_common_pb.Property, index?: number): iotics_api_common_pb.Property;

    hasLocation(): boolean;
    clearLocation(): void;
    getLocation(): iotics_api_common_pb.GeoLocation | undefined;
    setLocation(value?: iotics_api_common_pb.GeoLocation): void;

    clearFeedsList(): void;
    getFeedsList(): Array<iotics_api_feed_pb.UpsertFeedWithMeta>;
    setFeedsList(value: Array<iotics_api_feed_pb.UpsertFeedWithMeta>): void;
    addFeeds(value?: iotics_api_feed_pb.UpsertFeedWithMeta, index?: number): iotics_api_feed_pb.UpsertFeedWithMeta;

    clearInputsList(): void;
    getInputsList(): Array<iotics_api_input_pb.UpsertInputWithMeta>;
    setInputsList(value: Array<iotics_api_input_pb.UpsertInputWithMeta>): void;
    addInputs(value?: iotics_api_input_pb.UpsertInputWithMeta, index?: number): iotics_api_input_pb.UpsertInputWithMeta;

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
      twinid?: iotics_api_common_pb.TwinID.AsObject,
      propertiesList: Array<iotics_api_common_pb.Property.AsObject>,
      location?: iotics_api_common_pb.GeoLocation.AsObject,
      feedsList: Array<iotics_api_feed_pb.UpsertFeedWithMeta.AsObject>,
      inputsList: Array<iotics_api_input_pb.UpsertInputWithMeta.AsObject>,
    }
  }
}

export class UpsertTwinResponse extends jspb.Message {
  hasHeaders(): boolean;
  clearHeaders(): void;
  getHeaders(): iotics_api_common_pb.Headers | undefined;
  setHeaders(value?: iotics_api_common_pb.Headers): void;

  hasPayload(): boolean;
  clearPayload(): void;
  getPayload(): UpsertTwinResponse.Payload | undefined;
  setPayload(value?: UpsertTwinResponse.Payload): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpsertTwinResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpsertTwinResponse): UpsertTwinResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpsertTwinResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpsertTwinResponse;
  static deserializeBinaryFromReader(message: UpsertTwinResponse, reader: jspb.BinaryReader): UpsertTwinResponse;
}

export namespace UpsertTwinResponse {
  export type AsObject = {
    headers?: iotics_api_common_pb.Headers.AsObject,
    payload?: UpsertTwinResponse.Payload.AsObject,
  }

  export class Payload extends jspb.Message {
    hasTwinid(): boolean;
    clearTwinid(): void;
    getTwinid(): iotics_api_common_pb.TwinID | undefined;
    setTwinid(value?: iotics_api_common_pb.TwinID): void;

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
      twinid?: iotics_api_common_pb.TwinID.AsObject,
    }
  }
}

