var server = require("./server.js");
var router = require("./router.js");
var requestHandlers = require("./requestHandlers.js");

var handle = {};
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/list"] = requestHandlers.list;
handle["/show"] = requestHandlers.show;
handle["/show/upload"] = requestHandlers.showUpload;

server.start(router.route, handle);