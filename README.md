# react-spinner-material
A simple react component made using canvas and window frame animations. Very close in resemblance to that of the Spinner or Android or the loading spinner on YouTube.

![Example of Spinner](https://raw.githubusercontent.com/icarus-sullivan/react-spinner-material/master/example.gif)

_Installation:_
```
npm install react-spinner-material
```


### PropTypes
Here's a full list of currently supported propTypes for use in the component.
```
// the width of the canvas to draw on
width = this.props.width

// the height of the canvas to draw on
height = this.props.height

// the spinner stroke color
spinnerColor = this.props.spinnerColor

// the width of the line stroke
spinnerWidth = this.props.spinnerWidth

// whether to show the spinner or not
show = this.props.show
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
				     <Spinner width={100}
					    height={120}
						spinnerColor={"#333"}
						spinnerWidth={2}
						show={true} />
			    </div>
		  );
		}
}
```
