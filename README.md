### Install
```
npm install react-d3-wrap --save
```

### Define a D3 component
`d3Wrap()` returns a React component that sets up a svg element and hooks `initialize()`, `update()` and `destroy()` functions into component lifecycle.
```javascript
import d3Wrap from 'react-d3-wrap'

const MyChart = d3Wrap({
  initialize (svg, data, options) {
    // Optional initialize method called once when component mounts
  },

  update (svg, data, options) {
    // setup container, root svg element passed in along with data and options
    const chart = d3.select(svg)
      .append('g')
      .attr('transform', `translate(${options.margin.left}, ${options.margin.top})`)

    // continue your d3 implementation as usual...
  },

  destroy () {
    // Optional clean up when a component is being unmounted...
  }
})

export default MyChart
```

### How to use your custom D3 component
`data`, `width` and `height` are required props. Use options to pass configuration and callbacks into initialize and update methods.
```javascript
<MyChart data={ [0, 1, 2] } width='400' height='300' options={ {color: '#ff0000'} } />
```

#### Default options
```javascript
{
  margin: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  xaxis: { orientation: 'bottom' },
  yaxis: { orientation: 'left' }
}
```
