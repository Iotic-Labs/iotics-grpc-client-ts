// package: iotics.api
// file: iotics/api/input.proto

var iotics_api_input_pb = require("../../iotics/api/input_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var InputAPI = (function () {
  function InputAPI() {}
  InputAPI.serviceName = "iotics.api.InputAPI";
  return InputAPI;
}());

InputAPI.DeleteInput = {
  methodName: "DeleteInput",
  service: InputAPI,
  requestStream: false,
  responseStream: false,
  requestType: iotics_api_input_pb.DeleteInputRequest,
  responseType: iotics_api_input_pb.DeleteInputResponse
};

InputAPI.DescribeInput = {
  methodName: "DescribeInput",
  service: InputAPI,
  requestStream: false,
  responseStream: false,
  requestType: iotics_api_input_pb.DescribeInputRequest,
  responseType: iotics_api_input_pb.DescribeInputResponse
};

InputAPI.ReceiveInputMessages = {
  methodName: "ReceiveInputMessages",
  service: InputAPI,
  requestStream: false,
  responseStream: true,
  requestType: iotics_api_input_pb.ReceiveInputMessageRequest,
  responseType: iotics_api_input_pb.ReceiveInputMessageResponse
};

InputAPI.CreateInput = {
  methodName: "CreateInput",
  service: InputAPI,
  requestStream: false,
  responseStream: false,
  requestType: iotics_api_input_pb.CreateInputRequest,
  responseType: iotics_api_input_pb.CreateInputResponse
};

InputAPI.UpdateInput = {
  methodName: "UpdateInput",
  service: InputAPI,
  requestStream: false,
  responseStream: false,
  requestType: iotics_api_input_pb.UpdateInputRequest,
  responseType: iotics_api_input_pb.UpdateInputResponse
};

exports.InputAPI = InputAPI;

function InputAPIClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

InputAPIClient.prototype.deleteInput = function deleteInput(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(InputAPI.DeleteInput, {
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

InputAPIClient.prototype.describeInput = function describeInput(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(InputAPI.DescribeInput, {
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

InputAPIClient.prototype.receiveInputMessages = function receiveInputMessages(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(InputAPI.ReceiveInputMessages, {
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

InputAPIClient.prototype.createInput = function createInput(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(InputAPI.CreateInput, {
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

InputAPIClient.prototype.updateInput = function updateInput(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(InputAPI.UpdateInput, {
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

exports.InputAPIClient = InputAPIClient;

