'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Box = exports.LineBox = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  color: #fff;\n  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.7);\n  font-size: 12px;\n  margin-right: ', 'px;\n  border-radius: 3px;\n  transition: margin-left .2s ease-in-out;\n'], ['\n  color: #fff;\n  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.7);\n  font-size: 12px;\n  margin-right: ', 'px;\n  border-radius: 3px;\n  transition: margin-left .2s ease-in-out;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  height: ', 'px;\n  line-height: ', 'px;\n  padding: 0 10px;\n  margin-bottom: ', 'px;\n  flex: 1;\n\n  &:last-of-type {\n    margin-bottom: 0;\n  }\n'], ['\n  height: ', 'px;\n  line-height: ', 'px;\n  padding: 0 10px;\n  margin-bottom: ', 'px;\n  flex: 1;\n\n  &:last-of-type {\n    margin-bottom: 0;\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  width: ', 'px;\n  height: ', 'px;\n  padding: 10px;\n  margin-left: ', 'px;\n\n  &:last-of-type {\n    margin-right: 0;\n  }\n\n  &:first-of-type {\n    margin-left: 0;\n  }\n'], ['\n  width: ', 'px;\n  height: ', 'px;\n  padding: 10px;\n  margin-left: ', 'px;\n\n  &:last-of-type {\n    margin-right: 0;\n  }\n\n  &:first-of-type {\n    margin-left: 0;\n  }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BaseBox = _styledComponents2.default.div(_templateObject, function (props) {
  return props.space;
});

var LineBox = exports.LineBox = (0, _styledComponents2.default)(BaseBox)(_templateObject2, function (props) {
  return props.height;
}, function (props) {
  return props.height;
}, function (props) {
  return props.space;
});

var Box = exports.Box = (0, _styledComponents2.default)(BaseBox)(_templateObject3, function (props) {
  return props.width;
}, function (props) {
  return props.height;
}, function (props) {
  return props.stacked ? -props.width * 0.8 : 0;
});

exports.default = BaseBox;