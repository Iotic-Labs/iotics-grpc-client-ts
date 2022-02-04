// package: iotics.api
// file: iotics/api/twin.proto

var iotics_api_twin_pb = require("../../iotics/api/twin_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var TwinAPI = (function () {
  function TwinAPI() {}
  TwinAPI.serviceName = "iotics.api.TwinAPI";
  return TwinAPI;
}());

TwinAPI.CreateTwin = {
  methodName: "CreateTwin",
  service: TwinAPI,
  requestStream: false,
  responseStream: false,
  requestType: iotics_api_twin_pb.CreateTwinRequest,
  responseType: iotics_api_twin_pb.CreateTwinResponse
};

TwinAPI.UpsertTwin = {
  methodName: "UpsertTwin",
  service: TwinAPI,
  requestStream: false,
  responseStream: false,
  requestType: iotics_api_twin_pb.UpsertTwinRequest,
  responseType: iotics_api_twin_pb.UpsertTwinResponse
};

TwinAPI.DeleteTwin = {
  methodName: "DeleteTwin",
  service: TwinAPI,
  requestStream: false,
  responseStream: false,
  requestType: iotics_api_twin_pb.DeleteTwinRequest,
  responseType: iotics_api_twin_pb.DeleteTwinResponse
};

TwinAPI.UpdateTwin = {
  methodName: "UpdateTwin",
  service: TwinAPI,
  requestStream: false,
  responseStream: false,
  requestType: iotics_api_twin_pb.UpdateTwinRequest,
  responseType: iotics_api_twin_pb.UpdateTwinResponse
};

TwinAPI.DescribeTwin = {
  methodName: "DescribeTwin",
  service: TwinAPI,
  requestStream: false,
  responseStream: false,
  requestType: iotics_api_twin_pb.DescribeTwinRequest,
  responseType: iotics_api_twin_pb.DescribeTwinResponse
};

TwinAPI.ListAllTwins = {
  methodName: "ListAllTwins",
  service: TwinAPI,
  requestStream: false,
  responseStream: false,
  requestType: iotics_api_twin_pb.ListAllTwinsRequest,
  responseType: iotics_api_twin_pb.ListAllTwinsResponse
};

exports.TwinAPI = TwinAPI;

function TwinAPIClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

TwinAPIClient.prototype.createTwin = function createTwin(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TwinAPI.CreateTwin, {
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

TwinAPIClient.prototype.upsertTwin = function upsertTwin(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TwinAPI.UpsertTwin, {
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

TwinAPIClient.prototype.deleteTwin = function deleteTwin(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TwinAPI.DeleteTwin, {
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

TwinAPIClient.prototype.updateTwin = function updateTwin(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TwinAPI.UpdateTwin, {
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

TwinAPIClient.prototype.describeTwin = function describeTwin(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TwinAPI.DescribeTwin, {
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

TwinAPIClient.prototype.listAllTwins = function listAllTwins(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TwinAPI.ListAllTwins, {
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

exports.TwinAPIClient = TwinAPIClient;

