'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Container = require('./Container');

var _Container2 = _interopRequireDefault(_Container);

var _Name = require('./Name');

var _Name2 = _interopRequireDefault(_Name);

var _Boxes = require('./Boxes');

var _Boxes2 = _interopRequireDefault(_Boxes);

var _Box = require('./Box');

var _ColorInfo = require('./ColorInfo');

var _ColorInfo2 = _interopRequireDefault(_ColorInfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ColorsShow = function (_React$PureComponent) {
  _inherits(ColorsShow, _React$PureComponent);

  function ColorsShow() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ColorsShow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ColorsShow.__proto__ || Object.getPrototypeOf(ColorsShow)).call.apply(_ref, [this].concat(args))), _this), _this.state = { stacked: _this.props.stacked }, _this.toggleStacked = function () {
      if (_this.props.stacked) {
        _this.setState({ stacked: !_this.state.stacked });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ColorsShow, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props = this.props,
          stacked = _props.stacked,
          lines = _props.lines;


      if (stacked && lines) {
        throw Error('Please use only one `stacked` or `lines` prop.');
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props2 = this.props,
          colors = _props2.colors,
          component = _props2.component,
          width = _props2.width,
          height = _props2.height,
          space = _props2.space,
          name = _props2.name,
          lines = _props2.lines,
          containerClassName = _props2.containerClassName,
          wrapperClassName = _props2.wrapperClassName,
          boxClassName = _props2.boxClassName,
          colorInfoClassName = _props2.colorInfoClassName;


      var lineOrBox = lines ? _Box.LineBox : _Box.Box;
      var Component = component || lineOrBox;

      return _react2.default.createElement(
        _Container2.default,
        {
          onMouseEnter: this.toggleStacked,
          onMouseLeave: this.toggleStacked,
          className: containerClassName
        },
        name && _react2.default.createElement(
          _Name2.default,
          null,
          name
        ),
        _react2.default.createElement(
          _Boxes2.default,
          { lines: lines, className: wrapperClassName },
          Object.keys(colors).map(function (colorName) {
            return _react2.default.createElement(
              Component,
              {
                colors: colors,
                key: colorName,
                width: width,
                height: height,
                space: space,
                stacked: _this2.state.stacked,
                lines: lines,
                className: boxClassName,
                style: { background: colors[colorName] }
              },
              _react2.default.createElement(
                _ColorInfo2.default,
                { lines: lines, className: colorInfoClassName },
                _react2.default.createElement(
                  'span',
                  null,
                  colors[colorName]
                ),
                _react2.default.createElement(
                  'span',
                  null,
                  colorName
                )
              )
            );
          })
        )
      );
    }
  }]);

  return ColorsShow;
}(_react2.default.PureComponent);

ColorsShow.defaultProps = {
  height: 100,
  width: 100,
  space: 20,
  stacked: false,
  lines: false,
  name: '',
  containerClassName: '',
  wrapperClassName: '',
  boxClassName: '',
  colorInfoClassName: '',
  component: null
};
exports.default = ColorsShow;