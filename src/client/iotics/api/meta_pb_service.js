// package: iotics.api
// file: iotics/api/meta.proto

var iotics_api_meta_pb = require("../../iotics/api/meta_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var MetaAPI = (function () {
  function MetaAPI() {}
  MetaAPI.serviceName = "iotics.api.MetaAPI";
  return MetaAPI;
}());

MetaAPI.SparqlQuery = {
  methodName: "SparqlQuery",
  service: MetaAPI,
  requestStream: false,
  responseStream: true,
  requestType: iotics_api_meta_pb.SparqlQueryRequest,
  responseType: iotics_api_meta_pb.SparqlQueryResponse
};

MetaAPI.SparqlUpdate = {
  methodName: "SparqlUpdate",
  service: MetaAPI,
  requestStream: false,
  responseStream: false,
  requestType: iotics_api_meta_pb.SparqlUpdateRequest,
  responseType: iotics_api_meta_pb.SparqlUpdateResponse
};

MetaAPI.ExplorerQuery = {
  methodName: "ExplorerQuery",
  service: MetaAPI,
  requestStream: false,
  responseStream: true,
  requestType: iotics_api_meta_pb.ExplorerRequest,
  responseType: iotics_api_meta_pb.ExplorerResponse
};

exports.MetaAPI = MetaAPI;

function MetaAPIClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

MetaAPIClient.prototype.sparqlQuery = function sparqlQuery(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(MetaAPI.SparqlQuery, {
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

MetaAPIClient.prototype.sparqlUpdate = function sparqlUpdate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MetaAPI.SparqlUpdate, {
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

MetaAPIClient.prototype.explorerQuery = function explorerQuery(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(MetaAPI.ExplorerQuery, {
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

exports.MetaAPIClient = MetaAPIClient;

