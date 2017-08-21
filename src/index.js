import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { inject, clamp } from './utils';

const FPS = 1 / 25;
const RADIUS_PERCENT = 0.8;

inject();  // inject style into html

export default class Spinner extends Component {

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

  constructor(props) {
    super(props);

    // legacy support for width, height
    const { size, width, height } = this.props;

    this.start = 0;
    this.end = Math.PI;
    this.flip = 1;
    this.size = size ? size : Math.min(width, height);

    this.state = {
      animate: false,
      running: false
    }

    this.update = this.update.bind(this);
  }

  componentWillMount() {
    this.setState({ animate: true });
    window.requestAnimationFrame(this.update);
  }

  componentWillUnmount() {
    this.setState({ animate: false });
  }

  update() {
    const { animate } = this.state;
    const { spinnerColor, spinnerWidth } = this.props;
    const c = ReactDOM.findDOMNode(this.refs.spinner);
    if (!c || !animate ) return;

    if( this.start >= Math.PI || this.start < 0 ) {
      this.flip *= -1;
    }

    let step = FPS * this.flip;
    this.start = clamp(-Math.PI, Math.PI, this.start + step);
    this.end = clamp(Math.PI, 2 * Math.PI, this.end - step);

    var ctx = c.getContext('2d');
    ctx.clearRect(0, 0, this.size, this.size);
    ctx.beginPath();
    ctx.arc(this.size / 2, this.size / 2, (this.size / 2) * RADIUS_PERCENT, this.start, this.end);
    ctx.strokeStyle = spinnerColor;
    ctx.lineWidth = spinnerWidth;
    ctx.stroke();

    window.requestAnimationFrame(this.update);
  }

  render() {
    // legacy support for show
    const { visible, show } = this.props;

    return (
      <canvas
        ref="spinner"
        className="spinner"
        style={{ display: visible || show ? 'block' : 'none' }}
        width={this.size} height={this.size}>
        Your browser does not support HTML5 canvas elements.
      </canvas>
    );
  }

}
