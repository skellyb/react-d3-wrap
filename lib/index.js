'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _d3 = require('d3');

var _d32 = _interopRequireDefault(_d3);

var _lodashAssign = require('lodash.assign');

var _lodashAssign2 = _interopRequireDefault(_lodashAssign);

var ReactD3 = (function (_React$Component) {
  _inherits(ReactD3, _React$Component);

  function ReactD3() {
    _classCallCheck(this, ReactD3);

    _get(Object.getPrototypeOf(ReactD3.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(ReactD3, [{
    key: 'update',
    value: function update(svg, data, options) {}
  }, {
    key: 'destroy',
    value: function destroy() {}
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.update(_react2['default'].findDOMNode(this), this.props.data, this._getOptions(this.props.options));
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.update(_react2['default'].findDOMNode(this), this.props.data, this._getOptions(this.props.options));
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

exports['default'] = ReactD3;

ReactD3.propTypes = {
  data: _react2['default'].PropTypes.array.isRequired,
  width: _react2['default'].PropTypes.number.isRequired,
  height: _react2['default'].PropTypes.number.isRequired,
  options: _react2['default'].PropTypes.object
};
module.exports = exports['default'];