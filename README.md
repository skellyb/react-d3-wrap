## ALPHA - This may change substantially, still sorting out the details.

### Install
```
npm install react-d3-wrap
```

### Usage
```
import MyChart from './MyChart'

// To render the component provide D3 component class and data
React.render(<MyChart
  data={ [0, 1, 2] }
  options={ {
    width: 100,
    height: 100
  } } />, document.getElementById('chart'))
```

#### Defining a custom component:
```
import ReactD3 from 'react-d3-wrap'

export default class MyChart extends ReactD3 {
  _update (data) {
    // d3 implementation here
  }

  _destroy {
    //clean up
  }
}
```
