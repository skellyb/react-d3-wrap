### Install
```
npm install react-d3-wrap
```

### Define a D3 component
Extend the wrapper then override `update` to implement your D3 graphics. Optionally, if you have setup or cleanup to do, override `initialize` or `destroy`.
```
import D3Wrap from 'react-d3-wrap'

export default class MyChart extends D3Wrap {
  initialize (svg, data, options) {
    // Optional initialize method called once when component mounts
  }

  update (svg, data, options) {
    // setup container, root svg element passed in along with data and options
    const chart = d3.select(svg)
      .append('g')
      .attr('transform', `translate(${options.margin.left}, ${options.margin.top})`)

    // continue you d3 implementation as usual...
  }

  destroy () {
    // clean up...
  }
}
```

### Usage
```
import MyChart from './MyChart'

// Use options to pass in configuration and callbacks
React.render(<MyChart 
  data={ [0, 1, 2] }
  width='400'
  height='300'
  options={{ onClick: this.handleClick }} />, document.getElementById('chart'))
```

#### Default options
```
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
