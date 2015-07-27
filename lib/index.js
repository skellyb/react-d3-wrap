'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var d3 = require('d3');
var assign = require('lodash.assign');

var ReactD3 = (function (_React$Component) {
  _inherits(ReactD3, _React$Component);

  function ReactD3() {
    _classCallCheck(this, ReactD3);

    _get(Object.getPrototypeOf(ReactD3.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(ReactD3, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._d3Element = this._initD3(this.props.data, React.findDOMNode(this), this.props.options);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this._update(this.props.data);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this._destroy();
    }
  }, {
    key: 'render',
    value: function render() {
      var classes = 'd3-wrap';
      if (this.props.className) {
        classes = classes.concat(' ', this.props.className);
      }

      return React.DOM.div({ className: classes });
    }
  }, {
    key: '_initD3',
    value: function _initD3(data, node, options) {
      var opts = assign({
        margin: {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0
        },
        xaxis: { orientation: 'bottom' },
        yaxis: { orientation: 'left' },
        width: 800,
        height: 600
      }, options || {});

      this.height = opts.height - (opts.margin.top + opts.margin.bottom);
      this.width = opts.width - (opts.margin.right + opts.margin.left);
      this.xAxis = d3.svg.axis().orient(opts.xaxis.orientation);
      this.yAxis = d3.svg.axis().orient(opts.yaxis.orientation);

      var d3El = d3.select(node).append('svg').attr('width', this.width + opts.margin.left + opts.margin.right).attr('height', this.height + opts.margin.top + opts.margin.bottom).append('g').attr('transform', 'translate(' + opts.margin.left + ',' + opts.margin.top + ')');

      // first render
      this._update(data);

      return d3El;
    }
  }, {
    key: '_update',
    value: function _update(data) {}
  }, {
    key: '_destroy',
    value: function _destroy() {}
  }]);

  return ReactD3;
})(React.Component);

exports['default'] = ReactD3;

ReactD3.propTypes = {
  data: React.PropTypes.array.isRequired,
  options: React.PropTypes.object
};
module.exports = exports['default'];