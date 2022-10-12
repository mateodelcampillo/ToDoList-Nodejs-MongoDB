"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _app = _interopRequireDefault(require("./app"));

var _config = require("./config");

var _database = _interopRequireDefault(require("./database.js"));

_app["default"].listen(_config.PORT);

console.log("Server Listening on port", _config.PORT);