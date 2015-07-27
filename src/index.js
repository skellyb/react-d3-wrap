var React = require('react')
var d3 = require('d3')
var assign = require('lodash.assign')

export default class ReactD3 extends React.Component {

  componentDidMount () {
    this._d3Element = this._initD3(this.props.data, React.findDOMNode(this), this.props.options)
  }

  componentDidUpdate () {
    this._update(this.props.data)
  }

  componentWillUnmount () {
    this._destroy()
  }

  render () {
    var classes = 'd3-wrap'
    if (this.props.className) {
      classes = classes.concat(' ', this.props.className)
    }

    return React.DOM.div({ className: classes })
  }

  _initD3 (data, node, options) {
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
    }, options || {})

    this.height = opts.height - (opts.margin.top + opts.margin.bottom)
    this.width = opts.width - (opts.margin.right + opts.margin.left)
    this.xAxis = d3.svg.axis().orient(opts.xaxis.orientation)
    this.yAxis = d3.svg.axis().orient(opts.yaxis.orientation)

    var d3El = d3.select(node).append('svg')
      .attr('width', this.width + opts.margin.left + opts.margin.right)
      .attr('height', this.height + opts.margin.top + opts.margin.bottom)
      .append('g')
      .attr('transform', 'translate(' + opts.margin.left + ',' + opts.margin.top + ')')

    // first render
    this._update(data)

    return d3El
  }

  _update (data) {}

  _destroy () {}
}

ReactD3.propTypes = {
  data: React.PropTypes.array.isRequired,
  options: React.PropTypes.object
}
