'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

exports['default'] = d3Wrap;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _d3 = require('d3');

var _d32 = _interopRequireDefault(_d3);

var _lodashAssign = require('lodash.assign');

var _lodashAssign2 = _interopRequireDefault(_lodashAssign);

function d3Wrap(d3lifecycle) {
  return (function (_React$Component) {
    _inherits(ReactD3, _React$Component);

    _createClass(ReactD3, [{
      key: 'initialize',
      value: function initialize(svg, data, options) {}
    }]);

    function ReactD3(props) {
      _classCallCheck(this, ReactD3);

      _get(Object.getPrototypeOf(ReactD3.prototype), 'constructor', this).call(this, props);
    }

    _createClass(ReactD3, [{
      key: 'update',
      value: function update(svg, data, options) {
        d3lifecycle.update(svg, data, options);
      }
    }, {
      key: 'destroy',
      value: function destroy() {}
    }, {
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.initialize(_reactDom2['default'].findDOMNode(this), this.props.data, this._getOptions(this.props.options));
        this.update(_reactDom2['default'].findDOMNode(this), this.props.data, this._getOptions(this.props.options));
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate() {
        this.update(_reactDom2['default'].findDOMNode(this), this.props.data, this._getOptions(this.props.options));
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this.destroy();
      }
    }, {
      key: 'render',
      value: function render() {
        var classes = 'd3-wrap';
        if (this.props.className) {
          classes = classes.concat(' ', this.props.className);
        }

        return _react2['default'].createElement('svg', { className: classes, width: this.props.width, height: this.props.height });
      }
    }, {
      key: '_getOptions',
      value: function _getOptions(propOps) {
        var options = typeof propOps === 'undefined' ? {} : propOps;
        return (0, _lodashAssign2['default'])({
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
    }]);

    return ReactD3;
  })(_react2['default'].Component);
}

module.exports = exports['default'];