'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  flex-direction: ', ';\n\n  span {\n    margin-right: ', 'px;\n  }\n'], ['\n  display: flex;\n  flex-direction: ', ';\n\n  span {\n    margin-right: ', 'px;\n  }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

exports.default = _styledComponents2.default.div(_templateObject, function (props) {
  return props.lines ? 'row' : 'column';
}, function (props) {
  return props.lines ? 10 : 0;
});