# React component wrapper for D3 elements

## ALPHA - This may change substantially, still sorting out the details.

### Usage
```
import D3Wrap from 'react-d3-wrap'
import MyChart from './MyChart'

// To render the component provide D3 component class and data
React.render(<D3Wrap 
  type={ MyChart }
  data={ [0, 1, 2] }
  options={ {
    width: 100,
    height: 100
  } } />, document.getElementById('chart'))
```

Defining a custom component is simple:
```
import { D3Component } from 'react-d3-wrap'

class MyChart extends D3Component {
  update (data) {
    // d3 implementation here
  }

  destroy {
    //clean up
  }
}
```

