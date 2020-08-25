"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

var _router = _interopRequireDefault(require("./router"));

require("@/plugins/vant");

require("@/assets/css/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 全局引入按需引入UI库 vant
// 引入全局样式
_vue["default"].config.productionTip = false;
new _vue["default"]({
  el: '#app',
  router: _router["default"],
  render: function render(h) {
    return h(_App["default"]);
  }
});