import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import d3 from 'd3'

export default function d3Wrap (lifecycle) {
  const d3Lifecycle = {
    initialize (svg, data, options) {},
    update (svg, data, options) {},
    destroy () {},
    ...lifecycle
  }

  class D3Wrap extends Component {
    componentDidMount () {
      d3Lifecycle.initialize.call(this, findDOMNode(this), this.props.data, this._getOptions(this.props.options))
      d3Lifecycle.update.call(this, findDOMNode(this), this.props.data, this._getOptions(this.props.options))
    }

    componentDidUpdate () {
      d3Lifecycle.update.call(this, findDOMNode(this), this.props.data, this._getOptions(this.props.options))
    }

    componentWillUnmount () {
      d3Lifecycle.destroy.call(this, )
    }

    _getOptions (propOps) {
      const options = (typeof propOps === 'undefined') ? {} : propOps
      return {
        margin: {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0
        },
        xaxis: { orientation: 'bottom' },
        yaxis: { orientation: 'left' },
        ...options
      }
    }

    render () {
      const { className, width, height } = this.props
      let classes = 'd3-wrap'
      if (className) classes = classes.concat(' ', this.props.className)

      return <svg className={ classes } width={ width } height={ height } />
    }
  }

  D3Wrap.propTypes = {
    data: React.PropTypes.array.isRequired,
    width: React.PropTypes.number.isRequired,
    height: React.PropTypes.number.isRequired,
    options: React.PropTypes.object
  }

  return D3Wrap
}
