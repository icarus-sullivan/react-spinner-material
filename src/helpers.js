import React from 'react';

const css = `
.spinner {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 10px solid #333;
  box-sizing: border-box;
  -webkit-animation: sweep 1s linear alternate infinite, rota 0.8s linear infinite;
          animation: sweep 1s linear alternate infinite, rota 0.8s linear infinite;
}

@keyframes rota {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@-webkit-keyframes rota {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes sweep {
  0% {
    -webkit-clip-path: polygon(0% 0%, 0% 0%, 0% 0%, 50% 50%, 0% 0%, 0% 0%, 0% 0%);
    clip-path: polygon(0% 0%, 0% 0%, 0% 0%, 50% 50%, 0% 0%, 0% 0%, 0% 0%);
  }
  50% {
    -webkit-clip-path: polygon(0% 0%, 0% 100%, 0% 100%, 50% 50%, 100% 0%, 100% 0%, 0% 0%);
    clip-path: polygon(0% 0%, 0% 100%, 0% 100%, 50% 50%, 100% 0%, 100% 0%, 0% 0%);
  }
  100% {
    -webkit-clip-path: polygon(0% 0%, 0% 100%, 100% 100%, 50% 50%, 100% 100%, 100% 0%, 0% 0%);
    clip-path: polygon(0% 0%, 0% 100%, 100% 100%, 50% 50%, 100% 100%, 100% 0%, 0% 0%);
  }
}

@-webkit-keyframes sweep {
  0% {
    -webkit-clip-path: polygon(0% 0%, 0% 0%, 0% 0%, 50% 50%, 0% 0%, 0% 0%, 0% 0%);
  }
  50% {
    -webkit-clip-path: polygon(0% 0%, 0% 100%, 0% 100%, 50% 50%, 100% 0%, 100% 0%, 0% 0%);
  }
  100% {
    -webkit-clip-path: polygon(0% 0%, 0% 100%, 100% 100%, 50% 50%, 100% 100%, 100% 0%, 0% 0%);
  }
}
`;

const SPINNER_ID = 'spinner_id_style';

export const SpinnerMixin = (Component) => class extends React.Component {

  constructor(props) {
    super(props);

    // inject styles if needed
    if (!document.getElementById(SPINNER_ID)) {
      const head = document.head || document.getElementsByTagName('head')[0];
      const sprc = document.createElement('style');
      sprc.id = SPINNER_ID;
      sprc.type = "text/css";
      if( sprc.styleSheet ) {
        sprc.styleSheet.cssText = css;
      } else {
        sprc.appendChild(document.createTextNode(css));
      }
      if( head ) {
        head.appendChild(sprc);
      }
    }

    this.state = {
      id: `spinner_${Date.now()}`
    };
  }

  render() {
    return <Component {...this.props} {...this.state} />
  }

}
