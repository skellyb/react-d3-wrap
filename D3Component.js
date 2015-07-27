const d3 = require('d3')
const assign = require('lodash.assign')

class D3Component {
  constructor (data, node, options = {}) {
    // override defaults
    const opts = assign({
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
    }, options)

    this.height = options.height - (options.margin.top + options.margin.bottom);
    this.width = options.width - (options.margin.right + options.margin.left);
    this.xAxis = d3.svg.axis().orient(options.xaxis.orientation);
    this.yAxis = d3.svg.axis().orient(options.yaxis.orientation);

    this.svg = d3.select(node).append('svg')
      .attr('width', this.width + options.margin.left + options.margin.right)
      .attr('height', this.height + options.margin.top + options.margin.bottom)
      .append('g')
      .attr('transform', 'translate(' + options.margin.left + ',' + options.margin.top + ')');

    this.update = this.update.bind(this, d3);

    // first render
    this.update(data);
  }

  update (d3, data) {}

  destroy () {}
}

module.exports = D3Component

exports.D3Component = require('./D3Component')
