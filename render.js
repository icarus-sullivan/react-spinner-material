import React from 'react';
import ReactDOM from 'react-dom';
import Spinner from './lib';

class Render extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true
    };
  }

  render() {
    const { show } = this.state;
    return (
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <h1>Demo</h1>
        <Spinner animate={true} spinnerColor="#336699" visible={this.state.show} spinnerWidth={7} size={80}/>
        <div style={{ height: 10 }}/>
        <div onClick={() => { this.setState({show: !show}) }}>{show ? 'Hide' : 'Show'}</div>
      </div>
    )
  }
}

ReactDOM.render(<Render/>, document.getElementById("root"));
