// package: iotics.api
// file: iotics/api/feed.proto

var iotics_api_feed_pb = require("../../iotics/api/feed_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var FeedAPI = (function () {
  function FeedAPI() {}
  FeedAPI.serviceName = "iotics.api.FeedAPI";
  return FeedAPI;
}());

FeedAPI.CreateFeed = {
  methodName: "CreateFeed",
  service: FeedAPI,
  requestStream: false,
  responseStream: false,
  requestType: iotics_api_feed_pb.CreateFeedRequest,
  responseType: iotics_api_feed_pb.CreateFeedResponse
};

FeedAPI.DeleteFeed = {
  methodName: "DeleteFeed",
  service: FeedAPI,
  requestStream: false,
  responseStream: false,
  requestType: iotics_api_feed_pb.DeleteFeedRequest,
  responseType: iotics_api_feed_pb.DeleteFeedResponse
};

FeedAPI.UpdateFeed = {
  methodName: "UpdateFeed",
  service: FeedAPI,
  requestStream: false,
  responseStream: false,
  requestType: iotics_api_feed_pb.UpdateFeedRequest,
  responseType: iotics_api_feed_pb.UpdateFeedResponse
};

FeedAPI.ShareFeedData = {
  methodName: "ShareFeedData",
  service: FeedAPI,
  requestStream: false,
  responseStream: false,
  requestType: iotics_api_feed_pb.ShareFeedDataRequest,
  responseType: iotics_api_feed_pb.ShareFeedDataResponse
};

FeedAPI.ListAllFeeds = {
  methodName: "ListAllFeeds",
  service: FeedAPI,
  requestStream: false,
  responseStream: false,
  requestType: iotics_api_feed_pb.ListAllFeedsRequest,
  responseType: iotics_api_feed_pb.ListAllFeedsResponse
};

FeedAPI.DescribeFeed = {
  methodName: "DescribeFeed",
  service: FeedAPI,
  requestStream: false,
  responseStream: false,
  requestType: iotics_api_feed_pb.DescribeFeedRequest,
  responseType: iotics_api_feed_pb.DescribeFeedResponse
};

exports.FeedAPI = FeedAPI;

function FeedAPIClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

FeedAPIClient.prototype.createFeed = function createFeed(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(FeedAPI.CreateFeed, {
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

FeedAPIClient.prototype.deleteFeed = function deleteFeed(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(FeedAPI.DeleteFeed, {
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

FeedAPIClient.prototype.updateFeed = function updateFeed(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(FeedAPI.UpdateFeed, {
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

FeedAPIClient.prototype.shareFeedData = function shareFeedData(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(FeedAPI.ShareFeedData, {
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

FeedAPIClient.prototype.listAllFeeds = function listAllFeeds(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(FeedAPI.ListAllFeeds, {
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

FeedAPIClient.prototype.describeFeed = function describeFeed(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(FeedAPI.DescribeFeed, {
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

exports.FeedAPIClient = FeedAPIClient;

