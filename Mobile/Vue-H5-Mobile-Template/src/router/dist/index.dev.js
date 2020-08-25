"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resetRouter = resetRouter;
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _routerConfig = require("./router.config.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var originalPush = _vueRouter["default"].prototype.push;

_vueRouter["default"].prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location)["catch"](function (err) {
    return err;
  });
};

_vue["default"].use(_vueRouter["default"]);

var createRouter = function createRouter() {
  return new _vueRouter["default"]({
    // mode: 'history', // 如果你是 history模式 需要配置vue.config.js publicPath
    // base: process.env.BASE_URL,
    scrollBehavior: function scrollBehavior() {
      return {
        y: 0
      };
    },
    routes: _routerConfig.constantRouterMap
  });
};

var router = createRouter();

function resetRouter() {
  var newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

var _default = router;
exports["default"] = _default;