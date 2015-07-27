const React = require('react')

class ReactD3 extends React.Component {

  componentDidMount () {
    this._component = new this.props.type(this.props.data, this.getDOMNode(), this.props.options)
  }

  componentDidUpdate () {
    this._component.update(this.props.data)
  }

  componentWillUnmount () {
    this._component.destroy()
  }

  render () {
    const classes = 'd3-wrap'
    if (this.props.className) {
      classes = classes.concat(' ', this.props.className)
    }

    return <div className={ classes }></div>
  }
}

ReactD3.propTypes = {
  type: React.PropTypes.func.isRequired,
  data: React.PropTypes.array.isRequired
  options: React.PropTypes.object
}

module.exports = ReactD3
