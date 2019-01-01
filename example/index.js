import React from 'react';
import ReactDOM from 'react-dom';
import Spinner from 'react-spinner-material';

const controls = [
  {
    name: 'size',
    description: 'The width + height of the ring',
    change: (value) => ({
      size: Number.parseInt(value, 10),
    }),
    props: (state) => ({
      type: "number",
      value: state.size,
    }),
  },
  {
    name: 'spinnerColor',
    description: 'The color of the ring',
    change: (value) => ({
      spinnerColor: value,
    }),
    props: (state) => ({
      type: "text",
      value: state.spinnerColor,
    }),
  },
  {
    name: 'spinnerWidth',
    description: 'The thickness of the ring',
    change: (value) => ({
      spinnerWidth: Number.parseInt(value, 10),
    }),
    props: (state) => ({
      type: "number",
      value: state.spinnerWidth,
    }),
  },
  {
    name: 'visible',
    description: 'Toggle visibility',
    change: (value) => ({
      visible: value === 'true',
    }),
    props: (state) => ({
      type: 'checkbox',
      value: state.visible,
    }),
  }
];

class Render extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: 40,
      spinnerColor: '#333333',
      spinnerWidth: 5,
      visible: true,
    };
  }

  renderHeader(name, description) {
    return (
      <div>
        <h4>{name}</h4>
        {description}
      </div>
    );
  }

  render() {
    const self = this;
    const { size, spinnerColor, spinnerWidth, visible } = this.state;
    return (
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div>
          <h1>PropTypes</h1>
          {this.renderHeader('size', 'The width + height of the ring')}
          <input type="number" value={size} onChange={(ev) => { 
            self.setState({ size: Number.parseInt(ev.target.value, 10)}); 
          }} />
          {this.renderHeader('spinnerColor', 'The color of the ring')}
          <input type="text" value={spinnerColor} onChange={(ev) => { 
            self.setState({ spinnerColor: ev.target.value }); 
          }} />
          {this.renderHeader('spinnerWidth', 'The thickness of the ring')}
          <input type="number" value={spinnerWidth} onChange={(ev) => { 
            self.setState({ spinnerWidth: Number.parseInt(ev.target.value, 10)}); 
          }} />
          {this.renderHeader('visible', 'Toggle visibility')}
          <input type="checkbox" checked={visible} onChange={(ev) => {
            self.setState({ visible: ev.target.checked });
          }} />
          <pre>{JSON.stringify(this.state, null, 2)}</pre>
        </div>
        <div style={{ marginLeft: 20 }}>
          <h1>Display</h1>
          <Spinner {...this.state}/>
        </div>
      </div>
    )
  }
}

const root = document.createElement('div');
root.id = "root";
document.body.appendChild(root);

ReactDOM.render(<Render/>, document.getElementById('root'));
