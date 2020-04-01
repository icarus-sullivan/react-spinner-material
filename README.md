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
|radius |Number |40 |The radius of the spinner |
|color |String |#333333 |The color of the spinner |
|stroke |Number |5 |The spinner's stroke width |
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
        <Spinner radius={120} color={"#333"} stroke={2} visible={true} />
      </div>
    );
  }
}
```

### Changelog

**1.3.1**
- @pedroalmeida415 PR regarding SSR support

**1.3.0**
- Reverting 1.2.0 commits to support IE :(