# react-spinner-material
A simple react component made using canvas and window frame animations. Very close in resemblance to that of the Spinner in Android or the loading spinner on YouTube.

![Example of Spinner](https://raw.githubusercontent.com/icarus-sullivan/react-spinner-material/master/example.gif)

_Installation:_
```
npm install react-spinner-material
```


### PropTypes
Here's a full list of currently supported propTypes for use in the component.
```
size: maps to width and height of the spinner
spinnerColor: the color of the spinner
spinnerWidth: the stroke width of the spinner
visible: to show the spinner or not
```

### Usage
Here is the most simple example of using the react-spinner-material.

```
import Spinner from 'react-spinner-material';
import React, { Component } from 'react';

export default = class Example extends Component {
  render() {
  return (
      <div>
       <Spinner
        size={120}
        spinnerColor={"#333"}
        spinnerWidth={2}
        visible={true} />
      </div>
    );
  }
}
```

