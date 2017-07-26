import React from 'react';
import ReactDOM from 'react-dom';
import Spinner from './src';

class Render extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  render() {
    return (
      <div style={{ flex: 1 }}>
        <h1>Render Test</h1>
        <Spinner animate={true} spinnerColor="#336699" visible={this.state.show} spinnerWidth={7} size={80}/>
        <div onClick={() => { this.setState({show: !this.state.show}) }}>Toggle</div>
      </div>
    )
  }
}

ReactDOM.render(<Render/>, document.getElementById("root"));
