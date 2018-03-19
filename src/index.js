import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SpinnerMixin } from './helpers';

class Spinner extends Component {

  static propTypes = {
    size: PropTypes.number,
    spinnerColor: PropTypes.string,
    spinnerWidth: PropTypes.number,
    visible: PropTypes.bool
  };

  static defaultProps = {
    size: 40,
    spinnerColor: '#333333',
    spinnerWidth: 5,
    visible: true,
  }

  render() {
    const { visible } = this.props;
    if(!visible) {
      return null;
    }

    const { id, size, width, height, spinnerColor, spinnerWidth } = this.props;
    const dimension = size || Math.min(width, height);
    return (
      <div
        id={id}
        className="spinner"
        style={{
          width: dimension,
          height: dimension,
          borderColor: spinnerColor,
          borderWidth: spinnerWidth
        }}></div>
    );
  }
}

export default SpinnerMixin(Spinner);
