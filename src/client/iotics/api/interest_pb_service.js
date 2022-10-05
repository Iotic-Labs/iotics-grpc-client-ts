// package: iotics.api
// file: iotics/api/interest.proto

var iotics_api_interest_pb = require("../../iotics/api/interest_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var InterestAPI = (function () {
  function InterestAPI() {}
  InterestAPI.serviceName = "iotics.api.InterestAPI";
  return InterestAPI;
}());

InterestAPI.FetchInterests = {
  methodName: "FetchInterests",
  service: InterestAPI,
  requestStream: false,
  responseStream: true,
  requestType: iotics_api_interest_pb.FetchInterestRequest,
  responseType: iotics_api_interest_pb.FetchInterestResponse
};

InterestAPI.FetchLastStored = {
  methodName: "FetchLastStored",
  service: InterestAPI,
  requestStream: false,
  responseStream: false,
  requestType: iotics_api_interest_pb.FetchLastStoredRequest,
  responseType: iotics_api_interest_pb.FetchInterestResponse
};

InterestAPI.SendInputMessage = {
  methodName: "SendInputMessage",
  service: InterestAPI,
  requestStream: false,
  responseStream: false,
  requestType: iotics_api_interest_pb.SendInputMessageRequest,
  responseType: iotics_api_interest_pb.SendInputMessageResponse
};

exports.InterestAPI = InterestAPI;

function InterestAPIClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

InterestAPIClient.prototype.fetchInterests = function fetchInterests(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(InterestAPI.FetchInterests, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

InterestAPIClient.prototype.fetchLastStored = function fetchLastStored(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(InterestAPI.FetchLastStored, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

InterestAPIClient.prototype.sendInputMessage = function sendInputMessage(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(InterestAPI.SendInputMessage, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.InterestAPIClient = InterestAPIClient;

