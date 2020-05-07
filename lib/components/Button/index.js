"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/button/style");

var _button = _interopRequireDefault(require("antd/es/button"));

var _react = _interopRequireDefault(require("react"));

var _indexModule = _interopRequireDefault(require("./index.module.css"));

var _classnames = _interopRequireDefault(require("classnames"));

var _BUtton = function _BUtton(props) {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _indexModule.default.button
  }, /*#__PURE__*/_react.default.createElement(_button.default, props, props && props.children));
};

var _default = _BUtton;
exports.default = _default;