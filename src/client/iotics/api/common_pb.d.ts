// package: iotics.api
// file: iotics/api/common.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Limit extends jspb.Message {
  getValue(): number;
  setValue(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Limit.AsObject;
  static toObject(includeInstance: boolean, msg: Limit): Limit.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Limit, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Limit;
  static deserializeBinaryFromReader(message: Limit, reader: jspb.BinaryReader): Limit;
}

export namespace Limit {
  export type AsObject = {
    value: number,
  }
}

export class Offset extends jspb.Message {
  getValue(): number;
  setValue(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Offset.AsObject;
  static toObject(includeInstance: boolean, msg: Offset): Offset.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Offset, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Offset;
  static deserializeBinaryFromReader(message: Offset, reader: jspb.BinaryReader): Offset;
}

export namespace Offset {
  export type AsObject = {
    value: number,
  }
}

export class Range extends jspb.Message {
  hasLimit(): boolean;
  clearLimit(): void;
  getLimit(): Limit | undefined;
  setLimit(value?: Limit): void;

  hasOffset(): boolean;
  clearOffset(): void;
  getOffset(): Offset | undefined;
  setOffset(value?: Offset): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Range.AsObject;
  static toObject(includeInstance: boolean, msg: Range): Range.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Range, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Range;
  static deserializeBinaryFromReader(message: Range, reader: jspb.BinaryReader): Range;
}

export namespace Range {
  export type AsObject = {
    limit?: Limit.AsObject,
    offset?: Offset.AsObject,
  }
}

export class LangLiteral extends jspb.Message {
  getLang(): string;
  setLang(value: string): void;

  getValue(): string;
  setValue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LangLiteral.AsObject;
  static toObject(includeInstance: boolean, msg: LangLiteral): LangLiteral.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LangLiteral, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LangLiteral;
  static deserializeBinaryFromReader(message: LangLiteral, reader: jspb.BinaryReader): LangLiteral;
}

export namespace LangLiteral {
  export type AsObject = {
    lang: string,
    value: string,
  }
}

export class StringLiteral extends jspb.Message {
  getValue(): string;
  setValue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StringLiteral.AsObject;
  static toObject(includeInstance: boolean, msg: StringLiteral): StringLiteral.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StringLiteral, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StringLiteral;
  static deserializeBinaryFromReader(message: StringLiteral, reader: jspb.BinaryReader): StringLiteral;
}

export namespace StringLiteral {
  export type AsObject = {
    value: string,
  }
}

export class Literal extends jspb.Message {
  getDatatype(): string;
  setDatatype(value: string): void;

  getValue(): string;
  setValue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Literal.AsObject;
  static toObject(includeInstance: boolean, msg: Literal): Literal.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Literal, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Literal;
  static deserializeBinaryFromReader(message: Literal, reader: jspb.BinaryReader): Literal;
}

export namespace Literal {
  export type AsObject = {
    datatype: string,
    value: string,
  }
}

export class Uri extends jspb.Message {
  getValue(): string;
  setValue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Uri.AsObject;
  static toObject(includeInstance: boolean, msg: Uri): Uri.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Uri, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Uri;
  static deserializeBinaryFromReader(message: Uri, reader: jspb.BinaryReader): Uri;
}

export namespace Uri {
  export type AsObject = {
    value: string,
  }
}

export class Property extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

  hasLiteralvalue(): boolean;
  clearLiteralvalue(): void;
  getLiteralvalue(): Literal | undefined;
  setLiteralvalue(value?: Literal): void;

  hasLangliteralvalue(): boolean;
  clearLangliteralvalue(): void;
  getLangliteralvalue(): LangLiteral | undefined;
  setLangliteralvalue(value?: LangLiteral): void;

  hasStringliteralvalue(): boolean;
  clearStringliteralvalue(): void;
  getStringliteralvalue(): StringLiteral | undefined;
  setStringliteralvalue(value?: StringLiteral): void;

  hasUrivalue(): boolean;
  clearUrivalue(): void;
  getUrivalue(): Uri | undefined;
  setUrivalue(value?: Uri): void;

  getValueCase(): Property.ValueCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Property.AsObject;
  static toObject(includeInstance: boolean, msg: Property): Property.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Property, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Property;
  static deserializeBinaryFromReader(message: Property, reader: jspb.BinaryReader): Property;
}

export namespace Property {
  export type AsObject = {
    key: string,
    literalvalue?: Literal.AsObject,
    langliteralvalue?: LangLiteral.AsObject,
    stringliteralvalue?: StringLiteral.AsObject,
    urivalue?: Uri.AsObject,
  }

  export enum ValueCase {
    VALUE_NOT_SET = 0,
    LITERALVALUE = 2,
    LANGLITERALVALUE = 3,
    STRINGLITERALVALUE = 4,
    URIVALUE = 5,
  }
}

export class GeoLocation extends jspb.Message {
  getLat(): number;
  setLat(value: number): void;

  getLon(): number;
  setLon(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GeoLocation.AsObject;
  static toObject(includeInstance: boolean, msg: GeoLocation): GeoLocation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GeoLocation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GeoLocation;
  static deserializeBinaryFromReader(message: GeoLocation, reader: jspb.BinaryReader): GeoLocation;
}

export namespace GeoLocation {
  export type AsObject = {
    lat: number,
    lon: number,
  }
}

export class GeoCircle extends jspb.Message {
  hasLocation(): boolean;
  clearLocation(): void;
  getLocation(): GeoLocation | undefined;
  setLocation(value?: GeoLocation): void;

  getRadiuskm(): number;
  setRadiuskm(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GeoCircle.AsObject;
  static toObject(includeInstance: boolean, msg: GeoCircle): GeoCircle.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GeoCircle, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GeoCircle;
  static deserializeBinaryFromReader(message: GeoCircle, reader: jspb.BinaryReader): GeoCircle;
}

export namespace GeoCircle {
  export type AsObject = {
    location?: GeoLocation.AsObject,
    radiuskm: number,
  }
}

export class RequestInfo extends jspb.Message {
  hasStarttime(): boolean;
  clearStarttime(): void;
  getStarttime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStarttime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getTracectxMap(): jspb.Map<string, string>;
  clearTracectxMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestInfo.AsObject;
  static toObject(includeInstance: boolean, msg: RequestInfo): RequestInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestInfo;
  static deserializeBinaryFromReader(message: RequestInfo, reader: jspb.BinaryReader): RequestInfo;
}

export namespace RequestInfo {
  export type AsObject = {
    starttime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    tracectxMap: Array<[string, string]>,
  }
}

export class Headers extends jspb.Message {
  getClientref(): string;
  setClientref(value: string): void;

  getClientappid(): string;
  setClientappid(value: string): void;

  clearTransactionrefList(): void;
  getTransactionrefList(): Array<string>;
  setTransactionrefList(value: Array<string>): void;
  addTransactionref(value: string, index?: number): string;

  hasConsumergroup(): boolean;
  clearConsumergroup(): void;
  getConsumergroup(): google_protobuf_wrappers_pb.StringValue | undefined;
  setConsumergroup(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasRequesttimeout(): boolean;
  clearRequesttimeout(): void;
  getRequesttimeout(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setRequesttimeout(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasRequestinfo(): boolean;
  clearRequestinfo(): void;
  getRequestinfo(): RequestInfo | undefined;
  setRequestinfo(value?: RequestInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Headers.AsObject;
  static toObject(includeInstance: boolean, msg: Headers): Headers.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Headers, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Headers;
  static deserializeBinaryFromReader(message: Headers, reader: jspb.BinaryReader): Headers;
}

export namespace Headers {
  export type AsObject = {
    clientref: string,
    clientappid: string,
    transactionrefList: Array<string>,
    consumergroup?: google_protobuf_wrappers_pb.StringValue.AsObject,
    requesttimeout?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    requestinfo?: RequestInfo.AsObject,
  }
}

export class SubscriptionHeaders extends jspb.Message {
  getClientappid(): string;
  setClientappid(value: string): void;

  clearTransactionrefList(): void;
  getTransactionrefList(): Array<string>;
  setTransactionrefList(value: Array<string>): void;
  addTransactionref(value: string, index?: number): string;

  hasConsumergroup(): boolean;
  clearConsumergroup(): void;
  getConsumergroup(): google_protobuf_wrappers_pb.StringValue | undefined;
  setConsumergroup(value?: google_protobuf_wrappers_pb.StringValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscriptionHeaders.AsObject;
  static toObject(includeInstance: boolean, msg: SubscriptionHeaders): SubscriptionHeaders.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubscriptionHeaders, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscriptionHeaders;
  static deserializeBinaryFromReader(message: SubscriptionHeaders, reader: jspb.BinaryReader): SubscriptionHeaders;
}

export namespace SubscriptionHeaders {
  export type AsObject = {
    clientappid: string,
    transactionrefList: Array<string>,
    consumergroup?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class TwinID extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getHostid(): string;
  setHostid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TwinID.AsObject;
  static toObject(includeInstance: boolean, msg: TwinID): TwinID.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TwinID, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TwinID;
  static deserializeBinaryFromReader(message: TwinID, reader: jspb.BinaryReader): TwinID;
}

export namespace TwinID {
  export type AsObject = {
    id: string,
    hostid: string,
  }
}

export class Value extends jspb.Message {
  getLabel(): string;
  setLabel(value: string): void;

  getComment(): string;
  setComment(value: string): void;

  getUnit(): string;
  setUnit(value: string): void;

  getDatatype(): string;
  setDatatype(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Value.AsObject;
  static toObject(includeInstance: boolean, msg: Value): Value.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Value, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Value;
  static deserializeBinaryFromReader(message: Value, reader: jspb.BinaryReader): Value;
}

export namespace Value {
  export type AsObject = {
    label: string,
    comment: string,
    unit: string,
    datatype: string,
  }
}

export class Values extends jspb.Message {
  clearAddedList(): void;
  getAddedList(): Array<Value>;
  setAddedList(value: Array<Value>): void;
  addAdded(value?: Value, index?: number): Value;

  clearDeletedbylabelList(): void;
  getDeletedbylabelList(): Array<string>;
  setDeletedbylabelList(value: Array<string>): void;
  addDeletedbylabel(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Values.AsObject;
  static toObject(includeInstance: boolean, msg: Values): Values.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Values, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Values;
  static deserializeBinaryFromReader(message: Values, reader: jspb.BinaryReader): Values;
}

export namespace Values {
  export type AsObject = {
    addedList: Array<Value.AsObject>,
    deletedbylabelList: Array<string>,
  }
}

export class FeedData extends jspb.Message {
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
  toObject(includeInstance?: boolean): FeedData.AsObject;
  static toObject(includeInstance: boolean, msg: FeedData): FeedData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FeedData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeedData;
  static deserializeBinaryFromReader(message: FeedData, reader: jspb.BinaryReader): FeedData;
}

export namespace FeedData {
  export type AsObject = {
    occurredat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    mime: string,
    data: Uint8Array | string,
  }
}

export class PropertyUpdate extends jspb.Message {
  getClearedall(): boolean;
  setClearedall(value: boolean): void;

  clearDeletedList(): void;
  getDeletedList(): Array<Property>;
  setDeletedList(value: Array<Property>): void;
  addDeleted(value?: Property, index?: number): Property;

  clearDeletedbykeyList(): void;
  getDeletedbykeyList(): Array<string>;
  setDeletedbykeyList(value: Array<string>): void;
  addDeletedbykey(value: string, index?: number): string;

  clearAddedList(): void;
  getAddedList(): Array<Property>;
  setAddedList(value: Array<Property>): void;
  addAdded(value?: Property, index?: number): Property;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PropertyUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: PropertyUpdate): PropertyUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PropertyUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PropertyUpdate;
  static deserializeBinaryFromReader(message: PropertyUpdate, reader: jspb.BinaryReader): PropertyUpdate;
}

export namespace PropertyUpdate {
  export type AsObject = {
    clearedall: boolean,
    deletedList: Array<Property.AsObject>,
    deletedbykeyList: Array<string>,
    addedList: Array<Property.AsObject>,
  }
}

export interface ScopeMap {
  GLOBAL: 0;
  LOCAL: 1;
}

export const Scope: ScopeMap;

