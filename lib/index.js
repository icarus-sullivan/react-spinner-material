'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FPS = 1 / 25;
var RADIUS_PERCENT = 0.8;

var clamp = function clamp(min, max, val) {
  if (min > val) return min;
  if (max < val) return max;
  return val;
};

var Spinner = function (_Component) {
  _inherits(Spinner, _Component);

  function Spinner(props) {
    _classCallCheck(this, Spinner);

    // legacy support for width, height
    var _this = _possibleConstructorReturn(this, (Spinner.__proto__ || Object.getPrototypeOf(Spinner)).call(this, props));

    var _this$props = _this.props,
        size = _this$props.size,
        width = _this$props.width,
        height = _this$props.height;


    _this.start = 0;
    _this.end = Math.PI;
    _this.flip = 1;
    _this.size = size ? size : Math.min(width, height);

    _this.state = {
      animate: false,
      running: false
    };

    _this.update = _this.update.bind(_this);
    return _this;
  }

  _createClass(Spinner, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setState({ animate: true });
      window.requestAnimationFrame(this.update);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.setState({ animate: false });
    }
  }, {
    key: 'update',
    value: function update() {
      var animate = this.state.animate;
      var _props = this.props,
          spinnerColor = _props.spinnerColor,
          spinnerWidth = _props.spinnerWidth;

      var c = _reactDom2.default.findDOMNode(this.refs.spinner);
      if (!c || !animate) return;

      if (this.start >= Math.PI || this.start < 0) {
        this.flip *= -1;
      }

      var step = FPS * this.flip;
      this.start = clamp(-Math.PI, Math.PI, this.start + step);
      this.end = clamp(Math.PI, 2 * Math.PI, this.end - step);

      var ctx = c.getContext('2d');
      ctx.clearRect(0, 0, this.size, this.size);
      ctx.beginPath();
      ctx.arc(this.size / 2, this.size / 2, this.size / 2 * RADIUS_PERCENT, this.start, this.end);
      ctx.strokeStyle = spinnerColor;
      ctx.lineWidth = spinnerWidth;
      ctx.stroke();

      window.requestAnimationFrame(this.update);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'canvas',
        {
          ref: 'spinner',
          className: 'spinner',
          style: { display: this.props.show ? 'block' : 'none' },
          width: this.size, height: this.size },
        'Your browser does not support HTML5 canvas elements.'
      );
    }
  }]);

  return Spinner;
}(_react.Component);

Spinner.propTypes = {
  size: _react.PropTypes.number,
  spinnerColor: _react.PropTypes.string,
  spinnerWidth: _react.PropTypes.number,
  show: _react.PropTypes.bool
};
Spinner.defaultProps = {
  size: 40,
  spinnerColor: '#333333',
  spinnerWidth: 5,
  show: true
};
exports.default = Spinner;