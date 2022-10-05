// package: iotics.api
// file: iotics/api/meta.proto

import * as jspb from "google-protobuf";
import * as google_rpc_status_pb from "../../google/rpc/status_pb";
import * as iotics_api_common_pb from "../../iotics/api/common_pb";

export class ExplorerRequest extends jspb.Message {
  hasHeaders(): boolean;
  clearHeaders(): void;
  getHeaders(): iotics_api_common_pb.Headers | undefined;
  setHeaders(value?: iotics_api_common_pb.Headers): void;

  getScope(): iotics_api_common_pb.ScopeMap[keyof iotics_api_common_pb.ScopeMap];
  setScope(value: iotics_api_common_pb.ScopeMap[keyof iotics_api_common_pb.ScopeMap]): void;

  hasPayload(): boolean;
  clearPayload(): void;
  getPayload(): ExplorerRequest.Payload | undefined;
  setPayload(value?: ExplorerRequest.Payload): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExplorerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExplorerRequest): ExplorerRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExplorerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExplorerRequest;
  static deserializeBinaryFromReader(message: ExplorerRequest, reader: jspb.BinaryReader): ExplorerRequest;
}

export namespace ExplorerRequest {
  export type AsObject = {
    headers?: iotics_api_common_pb.Headers.AsObject,
    scope: iotics_api_common_pb.ScopeMap[keyof iotics_api_common_pb.ScopeMap],
    payload?: ExplorerRequest.Payload.AsObject,
  }

  export class Payload extends jspb.Message {
    getResultcontenttype(): SparqlResultTypeMap[keyof SparqlResultTypeMap];
    setResultcontenttype(value: SparqlResultTypeMap[keyof SparqlResultTypeMap]): void;

    getKeyword(): string;
    setKeyword(value: string): void;

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
      resultcontenttype: SparqlResultTypeMap[keyof SparqlResultTypeMap],
      keyword: string,
    }
  }
}

export class SparqlQueryRequest extends jspb.Message {
  hasHeaders(): boolean;
  clearHeaders(): void;
  getHeaders(): iotics_api_common_pb.Headers | undefined;
  setHeaders(value?: iotics_api_common_pb.Headers): void;

  getScope(): iotics_api_common_pb.ScopeMap[keyof iotics_api_common_pb.ScopeMap];
  setScope(value: iotics_api_common_pb.ScopeMap[keyof iotics_api_common_pb.ScopeMap]): void;

  hasPayload(): boolean;
  clearPayload(): void;
  getPayload(): SparqlQueryRequest.Payload | undefined;
  setPayload(value?: SparqlQueryRequest.Payload): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SparqlQueryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SparqlQueryRequest): SparqlQueryRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SparqlQueryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SparqlQueryRequest;
  static deserializeBinaryFromReader(message: SparqlQueryRequest, reader: jspb.BinaryReader): SparqlQueryRequest;
}

export namespace SparqlQueryRequest {
  export type AsObject = {
    headers?: iotics_api_common_pb.Headers.AsObject,
    scope: iotics_api_common_pb.ScopeMap[keyof iotics_api_common_pb.ScopeMap],
    payload?: SparqlQueryRequest.Payload.AsObject,
  }

  export class Payload extends jspb.Message {
    getResultcontenttype(): SparqlResultTypeMap[keyof SparqlResultTypeMap];
    setResultcontenttype(value: SparqlResultTypeMap[keyof SparqlResultTypeMap]): void;

    getQuery(): Uint8Array | string;
    getQuery_asU8(): Uint8Array;
    getQuery_asB64(): string;
    setQuery(value: Uint8Array | string): void;

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
      resultcontenttype: SparqlResultTypeMap[keyof SparqlResultTypeMap],
      query: Uint8Array | string,
    }
  }
}

export class SparqlQueryResponse extends jspb.Message {
  hasHeaders(): boolean;
  clearHeaders(): void;
  getHeaders(): iotics_api_common_pb.Headers | undefined;
  setHeaders(value?: iotics_api_common_pb.Headers): void;

  hasPayload(): boolean;
  clearPayload(): void;
  getPayload(): SparqlQueryResponse.Payload | undefined;
  setPayload(value?: SparqlQueryResponse.Payload): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SparqlQueryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SparqlQueryResponse): SparqlQueryResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SparqlQueryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SparqlQueryResponse;
  static deserializeBinaryFromReader(message: SparqlQueryResponse, reader: jspb.BinaryReader): SparqlQueryResponse;
}

export namespace SparqlQueryResponse {
  export type AsObject = {
    headers?: iotics_api_common_pb.Headers.AsObject,
    payload?: SparqlQueryResponse.Payload.AsObject,
  }

  export class Payload extends jspb.Message {
    getHostid(): string;
    setHostid(value: string): void;

    getSeqnum(): number;
    setSeqnum(value: number): void;

    getLast(): boolean;
    setLast(value: boolean): void;

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): google_rpc_status_pb.Status | undefined;
    setStatus(value?: google_rpc_status_pb.Status): void;

    getContenttype(): SparqlResultTypeMap[keyof SparqlResultTypeMap];
    setContenttype(value: SparqlResultTypeMap[keyof SparqlResultTypeMap]): void;

    getResultchunk(): Uint8Array | string;
    getResultchunk_asU8(): Uint8Array;
    getResultchunk_asB64(): string;
    setResultchunk(value: Uint8Array | string): void;

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
      seqnum: number,
      last: boolean,
      status?: google_rpc_status_pb.Status.AsObject,
      contenttype: SparqlResultTypeMap[keyof SparqlResultTypeMap],
      resultchunk: Uint8Array | string,
    }
  }
}

export class SparqlUpdateRequest extends jspb.Message {
  hasHeaders(): boolean;
  clearHeaders(): void;
  getHeaders(): iotics_api_common_pb.Headers | undefined;
  setHeaders(value?: iotics_api_common_pb.Headers): void;

  hasPayload(): boolean;
  clearPayload(): void;
  getPayload(): SparqlUpdateRequest.Payload | undefined;
  setPayload(value?: SparqlUpdateRequest.Payload): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SparqlUpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SparqlUpdateRequest): SparqlUpdateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SparqlUpdateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SparqlUpdateRequest;
  static deserializeBinaryFromReader(message: SparqlUpdateRequest, reader: jspb.BinaryReader): SparqlUpdateRequest;
}

export namespace SparqlUpdateRequest {
  export type AsObject = {
    headers?: iotics_api_common_pb.Headers.AsObject,
    payload?: SparqlUpdateRequest.Payload.AsObject,
  }

  export class Payload extends jspb.Message {
    getUpdate(): Uint8Array | string;
    getUpdate_asU8(): Uint8Array;
    getUpdate_asB64(): string;
    setUpdate(value: Uint8Array | string): void;

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
      update: Uint8Array | string,
    }
  }
}

export class SparqlUpdateResponse extends jspb.Message {
  hasHeaders(): boolean;
  clearHeaders(): void;
  getHeaders(): iotics_api_common_pb.Headers | undefined;
  setHeaders(value?: iotics_api_common_pb.Headers): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SparqlUpdateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SparqlUpdateResponse): SparqlUpdateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SparqlUpdateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SparqlUpdateResponse;
  static deserializeBinaryFromReader(message: SparqlUpdateResponse, reader: jspb.BinaryReader): SparqlUpdateResponse;
}

export namespace SparqlUpdateResponse {
  export type AsObject = {
    headers?: iotics_api_common_pb.Headers.AsObject,
  }
}

export interface SparqlResultTypeMap {
  SPARQL_JSON: 0;
  SPARQL_XML: 1;
  SPARQL_CSV: 2;
  RDF_TURTLE: 3;
  RDF_XML: 4;
  RDF_NTRIPLES: 5;
}

export const SparqlResultType: SparqlResultTypeMap;

