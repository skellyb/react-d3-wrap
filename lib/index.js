'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = d3Wrap;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _d = require('d3');

var _d2 = _interopRequireDefault(_d);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function d3Wrap(methods) {
  var defaultMethods = {
    initialize: function initialize(svg, data, options) {},
    update: function update(svg, data, options) {},
    destroy: function destroy() {}
  };

  var D3Wrap = function (_Component) {
    _inherits(D3Wrap, _Component);

    function D3Wrap() {
      _classCallCheck(this, D3Wrap);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(D3Wrap).apply(this, arguments));
    }

    _createClass(D3Wrap, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.initialize.call(this, (0, _reactDom.findDOMNode)(this), this.props.data, this._getOptions(this.props.options));
        this.update.call(this, (0, _reactDom.findDOMNode)(this), this.props.data, this._getOptions(this.props.options));
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate() {
        this.update.call(this, (0, _reactDom.findDOMNode)(this), this.props.data, this._getOptions(this.props.options));
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this.destroy.call(this);
      }
    }, {
      key: '_getOptions',
      value: function _getOptions(propOps) {
        var options = typeof propOps === 'undefined' ? {} : propOps;
        return _extends({
          margin: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0
          },
          xaxis: { orientation: 'bottom' },
          yaxis: { orientation: 'left' }
        }, options);
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props;
        var className = _props.className;
        var width = _props.width;
        var height = _props.height;

        var classes = 'd3-wrap';
        if (className) classes = classes.concat(' ', this.props.className);

        return _react2.default.createElement('svg', { className: classes, width: width, height: height });
      }
    }]);

    return D3Wrap;
  }(_react.Component);

  D3Wrap.propTypes = {
    data: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.array, _react2.default.PropTypes.object]).isRequired,
    width: _react2.default.PropTypes.number.isRequired,
    height: _react2.default.PropTypes.number.isRequired,
    options: _react2.default.PropTypes.object
  };

  Object.assign(D3Wrap.prototype, defaultMethods, methods);

  return D3Wrap;
}