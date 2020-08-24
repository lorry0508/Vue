"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _routerConfig = require("./router.config.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vueRouter["default"]);

var createRouter = function createRouter() {
  new _vueRouter["default"]({
    routes: _routerConfig.constantRouterMap
  });
};

var router = createRouter();
var _default = router;
exports["default"] = _default;