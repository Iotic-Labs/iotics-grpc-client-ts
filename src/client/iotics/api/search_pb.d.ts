// package: iotics.api
// file: iotics/api/search.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_rpc_status_pb from "../../google/rpc/status_pb";
import * as iotics_api_common_pb from "../../iotics/api/common_pb";
import * as iotics_api_feed_pb from "../../iotics/api/feed_pb";
import * as iotics_api_input_pb from "../../iotics/api/input_pb";

export class SearchRequest extends jspb.Message {
  hasHeaders(): boolean;
  clearHeaders(): void;
  getHeaders(): iotics_api_common_pb.Headers | undefined;
  setHeaders(value?: iotics_api_common_pb.Headers): void;

  getScope(): iotics_api_common_pb.ScopeMap[keyof iotics_api_common_pb.ScopeMap];
  setScope(value: iotics_api_common_pb.ScopeMap[keyof iotics_api_common_pb.ScopeMap]): void;

  hasLang(): boolean;
  clearLang(): void;
  getLang(): google_protobuf_wrappers_pb.StringValue | undefined;
  setLang(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasPayload(): boolean;
  clearPayload(): void;
  getPayload(): SearchRequest.Payload | undefined;
  setPayload(value?: SearchRequest.Payload): void;

  hasRange(): boolean;
  clearRange(): void;
  getRange(): iotics_api_common_pb.Range | undefined;
  setRange(value?: iotics_api_common_pb.Range): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SearchRequest): SearchRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchRequest;
  static deserializeBinaryFromReader(message: SearchRequest, reader: jspb.BinaryReader): SearchRequest;
}

export namespace SearchRequest {
  export type AsObject = {
    headers?: iotics_api_common_pb.Headers.AsObject,
    scope: iotics_api_common_pb.ScopeMap[keyof iotics_api_common_pb.ScopeMap],
    lang?: google_protobuf_wrappers_pb.StringValue.AsObject,
    payload?: SearchRequest.Payload.AsObject,
    range?: iotics_api_common_pb.Range.AsObject,
  }

  export class Payload extends jspb.Message {
    getResponsetype(): ResponseTypeMap[keyof ResponseTypeMap];
    setResponsetype(value: ResponseTypeMap[keyof ResponseTypeMap]): void;

    hasExpirytimeout(): boolean;
    clearExpirytimeout(): void;
    getExpirytimeout(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setExpirytimeout(value?: google_protobuf_timestamp_pb.Timestamp): void;

    hasFilter(): boolean;
    clearFilter(): void;
    getFilter(): SearchRequest.Payload.Filter | undefined;
    setFilter(value?: SearchRequest.Payload.Filter): void;

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
      responsetype: ResponseTypeMap[keyof ResponseTypeMap],
      expirytimeout?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      filter?: SearchRequest.Payload.Filter.AsObject,
    }

    export class Filter extends jspb.Message {
      hasText(): boolean;
      clearText(): void;
      getText(): google_protobuf_wrappers_pb.StringValue | undefined;
      setText(value?: google_protobuf_wrappers_pb.StringValue): void;

      hasLocation(): boolean;
      clearLocation(): void;
      getLocation(): iotics_api_common_pb.GeoCircle | undefined;
      setLocation(value?: iotics_api_common_pb.GeoCircle): void;

      clearPropertiesList(): void;
      getPropertiesList(): Array<iotics_api_common_pb.Property>;
      setPropertiesList(value: Array<iotics_api_common_pb.Property>): void;
      addProperties(value?: iotics_api_common_pb.Property, index?: number): iotics_api_common_pb.Property;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Filter.AsObject;
      static toObject(includeInstance: boolean, msg: Filter): Filter.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Filter, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Filter;
      static deserializeBinaryFromReader(message: Filter, reader: jspb.BinaryReader): Filter;
    }

    export namespace Filter {
      export type AsObject = {
        text?: google_protobuf_wrappers_pb.StringValue.AsObject,
        location?: iotics_api_common_pb.GeoCircle.AsObject,
        propertiesList: Array<iotics_api_common_pb.Property.AsObject>,
      }
    }
  }
}

export class AdvancedSearchRequest extends jspb.Message {
  hasHeaders(): boolean;
  clearHeaders(): void;
  getHeaders(): iotics_api_common_pb.Headers | undefined;
  setHeaders(value?: iotics_api_common_pb.Headers): void;

  getScope(): iotics_api_common_pb.ScopeMap[keyof iotics_api_common_pb.ScopeMap];
  setScope(value: iotics_api_common_pb.ScopeMap[keyof iotics_api_common_pb.ScopeMap]): void;

  hasPayload(): boolean;
  clearPayload(): void;
  getPayload(): AdvancedSearchRequest.Payload | undefined;
  setPayload(value?: AdvancedSearchRequest.Payload): void;

  hasRange(): boolean;
  clearRange(): void;
  getRange(): iotics_api_common_pb.Range | undefined;
  setRange(value?: iotics_api_common_pb.Range): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdvancedSearchRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AdvancedSearchRequest): AdvancedSearchRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AdvancedSearchRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdvancedSearchRequest;
  static deserializeBinaryFromReader(message: AdvancedSearchRequest, reader: jspb.BinaryReader): AdvancedSearchRequest;
}

export namespace AdvancedSearchRequest {
  export type AsObject = {
    headers?: iotics_api_common_pb.Headers.AsObject,
    scope: iotics_api_common_pb.ScopeMap[keyof iotics_api_common_pb.ScopeMap],
    payload?: AdvancedSearchRequest.Payload.AsObject,
    range?: iotics_api_common_pb.Range.AsObject,
  }

  export class Payload extends jspb.Message {
    getResponsetype(): ResponseTypeMap[keyof ResponseTypeMap];
    setResponsetype(value: ResponseTypeMap[keyof ResponseTypeMap]): void;

    getFilter(): string;
    setFilter(value: string): void;

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
      responsetype: ResponseTypeMap[keyof ResponseTypeMap],
      filter: string,
    }
  }
}

export class SearchResponse extends jspb.Message {
  hasHeaders(): boolean;
  clearHeaders(): void;
  getHeaders(): iotics_api_common_pb.Headers | undefined;
  setHeaders(value?: iotics_api_common_pb.Headers): void;

  hasPayload(): boolean;
  clearPayload(): void;
  getPayload(): SearchResponse.Payload | undefined;
  setPayload(value?: SearchResponse.Payload): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SearchResponse): SearchResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchResponse;
  static deserializeBinaryFromReader(message: SearchResponse, reader: jspb.BinaryReader): SearchResponse;
}

export namespace SearchResponse {
  export type AsObject = {
    headers?: iotics_api_common_pb.Headers.AsObject,
    payload?: SearchResponse.Payload.AsObject,
  }

  export class FeedDetails extends jspb.Message {
    hasFeedid(): boolean;
    clearFeedid(): void;
    getFeedid(): iotics_api_feed_pb.FeedID | undefined;
    setFeedid(value?: iotics_api_feed_pb.FeedID): void;

    getStorelast(): boolean;
    setStorelast(value: boolean): void;

    clearPropertiesList(): void;
    getPropertiesList(): Array<iotics_api_common_pb.Property>;
    setPropertiesList(value: Array<iotics_api_common_pb.Property>): void;
    addProperties(value?: iotics_api_common_pb.Property, index?: number): iotics_api_common_pb.Property;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FeedDetails.AsObject;
    static toObject(includeInstance: boolean, msg: FeedDetails): FeedDetails.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FeedDetails, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FeedDetails;
    static deserializeBinaryFromReader(message: FeedDetails, reader: jspb.BinaryReader): FeedDetails;
  }

  export namespace FeedDetails {
    export type AsObject = {
      feedid?: iotics_api_feed_pb.FeedID.AsObject,
      storelast: boolean,
      propertiesList: Array<iotics_api_common_pb.Property.AsObject>,
    }
  }

  export class InputDetails extends jspb.Message {
    hasInputid(): boolean;
    clearInputid(): void;
    getInputid(): iotics_api_input_pb.InputID | undefined;
    setInputid(value?: iotics_api_input_pb.InputID): void;

    clearPropertiesList(): void;
    getPropertiesList(): Array<iotics_api_common_pb.Property>;
    setPropertiesList(value: Array<iotics_api_common_pb.Property>): void;
    addProperties(value?: iotics_api_common_pb.Property, index?: number): iotics_api_common_pb.Property;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InputDetails.AsObject;
    static toObject(includeInstance: boolean, msg: InputDetails): InputDetails.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InputDetails, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InputDetails;
    static deserializeBinaryFromReader(message: InputDetails, reader: jspb.BinaryReader): InputDetails;
  }

  export namespace InputDetails {
    export type AsObject = {
      inputid?: iotics_api_input_pb.InputID.AsObject,
      propertiesList: Array<iotics_api_common_pb.Property.AsObject>,
    }
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

    clearFeedsList(): void;
    getFeedsList(): Array<SearchResponse.FeedDetails>;
    setFeedsList(value: Array<SearchResponse.FeedDetails>): void;
    addFeeds(value?: SearchResponse.FeedDetails, index?: number): SearchResponse.FeedDetails;

    clearInputsList(): void;
    getInputsList(): Array<SearchResponse.InputDetails>;
    setInputsList(value: Array<SearchResponse.InputDetails>): void;
    addInputs(value?: SearchResponse.InputDetails, index?: number): SearchResponse.InputDetails;

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
      feedsList: Array<SearchResponse.FeedDetails.AsObject>,
      inputsList: Array<SearchResponse.InputDetails.AsObject>,
      updatedat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
  }

  export class Payload extends jspb.Message {
    getResponsetype(): ResponseTypeMap[keyof ResponseTypeMap];
    setResponsetype(value: ResponseTypeMap[keyof ResponseTypeMap]): void;

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): google_rpc_status_pb.Status | undefined;
    setStatus(value?: google_rpc_status_pb.Status): void;

    getHostid(): string;
    setHostid(value: string): void;

    clearTwinsList(): void;
    getTwinsList(): Array<SearchResponse.TwinDetails>;
    setTwinsList(value: Array<SearchResponse.TwinDetails>): void;
    addTwins(value?: SearchResponse.TwinDetails, index?: number): SearchResponse.TwinDetails;

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
      responsetype: ResponseTypeMap[keyof ResponseTypeMap],
      status?: google_rpc_status_pb.Status.AsObject,
      hostid: string,
      twinsList: Array<SearchResponse.TwinDetails.AsObject>,
    }
  }
}

export class DispatchSearchResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DispatchSearchResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DispatchSearchResponse): DispatchSearchResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DispatchSearchResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DispatchSearchResponse;
  static deserializeBinaryFromReader(message: DispatchSearchResponse, reader: jspb.BinaryReader): DispatchSearchResponse;
}

export namespace DispatchSearchResponse {
  export type AsObject = {
  }
}

export interface ResponseTypeMap {
  FULL: 0;
  LOCATED: 1;
  MINIMAL: 2;
}

export const ResponseType: ResponseTypeMap;

