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

exports.MetaAPIClient = MetaAPIClient;

