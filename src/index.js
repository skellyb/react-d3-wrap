import React from 'react'
import d3 from 'd3'
import assign from 'lodash.assign'

export default class ReactD3 extends React.Component {

  initialize (svg, data, options) {}

  update (svg, data, options) {}

  destroy () {}

  componentDidMount () {
    this.initialize(React.findDOMNode(this), this.props.data, this._getOptions(this.props.options))
    this.update(React.findDOMNode(this), this.props.data, this._getOptions(this.props.options))
  }

  componentDidUpdate () {
    this.update(React.findDOMNode(this), this.props.data, this._getOptions(this.props.options))
  }

  componentWillUnmount () {
    this.destroy()
  }

  render () {
    var classes = 'd3-wrap'
    if (this.props.className) {
      classes = classes.concat(' ', this.props.className)
    }

    return <svg className={ classes } width={ this.props.width } height={ this.props.height } />
  }

  _getOptions (propOps) {
    const options = (typeof propOps === 'undefined') ? {} : propOps
    return assign({
      margin: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
      },
      xaxis: { orientation: 'bottom' },
      yaxis: { orientation: 'left' }
    }, options)
  }
}

ReactD3.propTypes = {
  data: React.PropTypes.array.isRequired,
  width: React.PropTypes.number.isRequired,
  height: React.PropTypes.number.isRequired,
  options: React.PropTypes.object
}
