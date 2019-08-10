"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReactComponentAsNpmModule = void 0;

var _react = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

var ReactComponentAsNpmModule = function ReactComponentAsNpmModule() {
  return _react["default"].createElement(_react.Fragment, null, _react["default"].createElement("h2", null, "This is the component that you just installed."), _react["default"].createElement("p", null, "The src folder is the one that you should update with your actual component."), _react["default"].createElement("small", null, "(You can probably delete this one now)."));
};

exports.ReactComponentAsNpmModule = ReactComponentAsNpmModule;