![npm downloads total](https://img.shields.io/npm/dt/react-spinner-material.svg) ![npm version](https://img.shields.io/npm/v/react-spinner-material.svg) ![npm license](https://img.shields.io/npm/l/react-spinner-material.svg)

# react-spinner-material
A simple react spinner following Material UI's using only css.

![Example of Spinner](https://raw.githubusercontent.com/icarus-sullivan/react-spinner-material/master/example.gif)

### Installation
```
npm install --save react-spinner-material
```
or
```
yarn add react-spinner-material
```

### PropTypes
|Name|Type|Default|Description|
|-----|-----|-----|-----|
|size |Number |40 |The width and height of the spinner |
|spinnerColor |String |#333333 |The color of the spinner |
|spinnerWidth |Number |5 |The width of the spinner's circle |
|visible|Boolean |true |Whether to show the spinner or not|

### Usage
Example:
```
import Spinner from 'react-spinner-material';
import React, { Component } from 'react';

export default class Example extends Component {
  render() {
  return (
      <div>
        <Spinner size={120} spinnerColor={"#333"} spinnerWidth={2} visible={true} />
      </div>
    );
  }
}
```

