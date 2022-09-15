// package: iotics.api
// file: iotics/api/host.proto

var iotics_api_host_pb = require("../../iotics/api/host_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var HostAPI = (function () {
  function HostAPI() {}
  HostAPI.serviceName = "iotics.api.HostAPI";
  return HostAPI;
}());

HostAPI.GetHostID = {
  methodName: "GetHostID",
  service: HostAPI,
  requestStream: false,
  responseStream: false,
  requestType: iotics_api_host_pb.GetHostIDRequest,
  responseType: iotics_api_host_pb.GetHostIDResponse
};

exports.HostAPI = HostAPI;

function HostAPIClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

HostAPIClient.prototype.getHostID = function getHostID(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(HostAPI.GetHostID, {
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

exports.HostAPIClient = HostAPIClient;

