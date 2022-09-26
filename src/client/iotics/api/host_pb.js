// source: iotics/api/host.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var iotics_api_common_pb = require('../../iotics/api/common_pb.js');
goog.object.extend(proto, iotics_api_common_pb);
goog.exportSymbol('proto.iotics.api.GetHostIDRequest', null, global);
goog.exportSymbol('proto.iotics.api.GetHostIDResponse', null, global);
goog.exportSymbol('proto.iotics.api.GetHostIDResponse.Payload', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.iotics.api.GetHostIDRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.iotics.api.GetHostIDRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.iotics.api.GetHostIDRequest.displayName = 'proto.iotics.api.GetHostIDRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.iotics.api.GetHostIDResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.iotics.api.GetHostIDResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.iotics.api.GetHostIDResponse.displayName = 'proto.iotics.api.GetHostIDResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.iotics.api.GetHostIDResponse.Payload = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.iotics.api.GetHostIDResponse.Payload, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.iotics.api.GetHostIDResponse.Payload.displayName = 'proto.iotics.api.GetHostIDResponse.Payload';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.iotics.api.GetHostIDRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.iotics.api.GetHostIDRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.iotics.api.GetHostIDRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotics.api.GetHostIDRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    headers: (f = msg.getHeaders()) && iotics_api_common_pb.Headers.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.iotics.api.GetHostIDRequest}
 */
proto.iotics.api.GetHostIDRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iotics.api.GetHostIDRequest;
  return proto.iotics.api.GetHostIDRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.iotics.api.GetHostIDRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.iotics.api.GetHostIDRequest}
 */
proto.iotics.api.GetHostIDRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new iotics_api_common_pb.Headers;
      reader.readMessage(value,iotics_api_common_pb.Headers.deserializeBinaryFromReader);
      msg.setHeaders(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.iotics.api.GetHostIDRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.iotics.api.GetHostIDRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.iotics.api.GetHostIDRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotics.api.GetHostIDRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeaders();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      iotics_api_common_pb.Headers.serializeBinaryToWriter
    );
  }
};


/**
 * optional Headers headers = 1;
 * @return {?proto.iotics.api.Headers}
 */
proto.iotics.api.GetHostIDRequest.prototype.getHeaders = function() {
  return /** @type{?proto.iotics.api.Headers} */ (
    jspb.Message.getWrapperField(this, iotics_api_common_pb.Headers, 1));
};


/**
 * @param {?proto.iotics.api.Headers|undefined} value
 * @return {!proto.iotics.api.GetHostIDRequest} returns this
*/
proto.iotics.api.GetHostIDRequest.prototype.setHeaders = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.iotics.api.GetHostIDRequest} returns this
 */
proto.iotics.api.GetHostIDRequest.prototype.clearHeaders = function() {
  return this.setHeaders(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.iotics.api.GetHostIDRequest.prototype.hasHeaders = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.iotics.api.GetHostIDResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.iotics.api.GetHostIDResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.iotics.api.GetHostIDResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotics.api.GetHostIDResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    headers: (f = msg.getHeaders()) && iotics_api_common_pb.Headers.toObject(includeInstance, f),
    payload: (f = msg.getPayload()) && proto.iotics.api.GetHostIDResponse.Payload.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.iotics.api.GetHostIDResponse}
 */
proto.iotics.api.GetHostIDResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iotics.api.GetHostIDResponse;
  return proto.iotics.api.GetHostIDResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.iotics.api.GetHostIDResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.iotics.api.GetHostIDResponse}
 */
proto.iotics.api.GetHostIDResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new iotics_api_common_pb.Headers;
      reader.readMessage(value,iotics_api_common_pb.Headers.deserializeBinaryFromReader);
      msg.setHeaders(value);
      break;
    case 2:
      var value = new proto.iotics.api.GetHostIDResponse.Payload;
      reader.readMessage(value,proto.iotics.api.GetHostIDResponse.Payload.deserializeBinaryFromReader);
      msg.setPayload(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.iotics.api.GetHostIDResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.iotics.api.GetHostIDResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.iotics.api.GetHostIDResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotics.api.GetHostIDResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeaders();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      iotics_api_common_pb.Headers.serializeBinaryToWriter
    );
  }
  f = message.getPayload();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.iotics.api.GetHostIDResponse.Payload.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.iotics.api.GetHostIDResponse.Payload.prototype.toObject = function(opt_includeInstance) {
  return proto.iotics.api.GetHostIDResponse.Payload.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.iotics.api.GetHostIDResponse.Payload} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotics.api.GetHostIDResponse.Payload.toObject = function(includeInstance, msg) {
  var f, obj = {
    hostid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.iotics.api.GetHostIDResponse.Payload}
 */
proto.iotics.api.GetHostIDResponse.Payload.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iotics.api.GetHostIDResponse.Payload;
  return proto.iotics.api.GetHostIDResponse.Payload.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.iotics.api.GetHostIDResponse.Payload} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.iotics.api.GetHostIDResponse.Payload}
 */
proto.iotics.api.GetHostIDResponse.Payload.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setHostid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.iotics.api.GetHostIDResponse.Payload.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.iotics.api.GetHostIDResponse.Payload.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.iotics.api.GetHostIDResponse.Payload} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotics.api.GetHostIDResponse.Payload.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHostid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string hostId = 1;
 * @return {string}
 */
proto.iotics.api.GetHostIDResponse.Payload.prototype.getHostid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.iotics.api.GetHostIDResponse.Payload} returns this
 */
proto.iotics.api.GetHostIDResponse.Payload.prototype.setHostid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Headers headers = 1;
 * @return {?proto.iotics.api.Headers}
 */
proto.iotics.api.GetHostIDResponse.prototype.getHeaders = function() {
  return /** @type{?proto.iotics.api.Headers} */ (
    jspb.Message.getWrapperField(this, iotics_api_common_pb.Headers, 1));
};


/**
 * @param {?proto.iotics.api.Headers|undefined} value
 * @return {!proto.iotics.api.GetHostIDResponse} returns this
*/
proto.iotics.api.GetHostIDResponse.prototype.setHeaders = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.iotics.api.GetHostIDResponse} returns this
 */
proto.iotics.api.GetHostIDResponse.prototype.clearHeaders = function() {
  return this.setHeaders(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.iotics.api.GetHostIDResponse.prototype.hasHeaders = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Payload payload = 2;
 * @return {?proto.iotics.api.GetHostIDResponse.Payload}
 */
proto.iotics.api.GetHostIDResponse.prototype.getPayload = function() {
  return /** @type{?proto.iotics.api.GetHostIDResponse.Payload} */ (
    jspb.Message.getWrapperField(this, proto.iotics.api.GetHostIDResponse.Payload, 2));
};


/**
 * @param {?proto.iotics.api.GetHostIDResponse.Payload|undefined} value
 * @return {!proto.iotics.api.GetHostIDResponse} returns this
*/
proto.iotics.api.GetHostIDResponse.prototype.setPayload = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.iotics.api.GetHostIDResponse} returns this
 */
proto.iotics.api.GetHostIDResponse.prototype.clearPayload = function() {
  return this.setPayload(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.iotics.api.GetHostIDResponse.prototype.hasPayload = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.iotics.api);