import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'

export default function d3Wrap (methods) {
  const defaultMethods = {
    initialize (svg, data, options) {},
    update (svg, data, options) {},
    destroy () {}
  }

  class D3Wrap extends Component {
    componentDidMount () {
      this.initialize.call(this, findDOMNode(this), this.props.data, this._getOptions(this.props.options))
      this.update.call(this, findDOMNode(this), this.props.data, this._getOptions(this.props.options))
    }

    componentDidUpdate () {
      this.update.call(this, findDOMNode(this), this.props.data, this._getOptions(this.props.options))
    }

    componentWillUnmount () {
      this.destroy.call(this, )
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
    data: React.PropTypes.oneOfType([
      React.PropTypes.array,
      React.PropTypes.object
    ]).isRequired,
    width: React.PropTypes.number.isRequired,
    height: React.PropTypes.number.isRequired,
    options: React.PropTypes.object
  }

  Object.assign(D3Wrap.prototype, defaultMethods, methods)

  return D3Wrap
}
