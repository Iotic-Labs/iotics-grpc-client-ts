// package: iotics.api
// file: iotics/api/search.proto

var iotics_api_search_pb = require("../../iotics/api/search_pb");
var iotics_api_common_pb = require("../../iotics/api/common_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var SearchAPI = (function () {
  function SearchAPI() {}
  SearchAPI.serviceName = "iotics.api.SearchAPI";
  return SearchAPI;
}());

SearchAPI.DispatchSearchRequest = {
  methodName: "DispatchSearchRequest",
  service: SearchAPI,
  requestStream: false,
  responseStream: false,
  requestType: iotics_api_search_pb.SearchRequest,
  responseType: iotics_api_search_pb.DispatchSearchResponse
};

SearchAPI.SynchronousSearch = {
  methodName: "SynchronousSearch",
  service: SearchAPI,
  requestStream: false,
  responseStream: true,
  requestType: iotics_api_search_pb.SearchRequest,
  responseType: iotics_api_search_pb.SearchResponse
};

SearchAPI.ReceiveAllSearchResponses = {
  methodName: "ReceiveAllSearchResponses",
  service: SearchAPI,
  requestStream: false,
  responseStream: true,
  requestType: iotics_api_common_pb.SubscriptionHeaders,
  responseType: iotics_api_search_pb.SearchResponse
};

exports.SearchAPI = SearchAPI;

function SearchAPIClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

SearchAPIClient.prototype.dispatchSearchRequest = function dispatchSearchRequest(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SearchAPI.DispatchSearchRequest, {
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

SearchAPIClient.prototype.synchronousSearch = function synchronousSearch(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(SearchAPI.SynchronousSearch, {
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

SearchAPIClient.prototype.receiveAllSearchResponses = function receiveAllSearchResponses(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(SearchAPI.ReceiveAllSearchResponses, {
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

exports.SearchAPIClient = SearchAPIClient;

