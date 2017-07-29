
export const inject = () => {
  const css = `
  .spinner {
    -webkit-animation: sprc 1s linear infinite;
       -moz-animation: sprc 1s linear infinite;
        -ms-animation: sprc 1s linear infinite;
         -o-animation: sprc 1s linear infinite;
            animation: sprc 1s linear infinite;
  }

  @-moz-keyframes sprc {
      from { -moz-transform: rotate(0deg); }
      to { -moz-transform: rotate(360deg); }
  }
  @-webkit-keyframes sprc {
      from { -webkit-transform: rotate(0deg); }
      to { -webkit-transform: rotate(360deg); }
  }
  @keyframes sprc {
      from {transform:rotate(0deg);}
      to {transform:rotate(360deg);}
  }
  `;

  const head = document.head || document.getElementsByTagName('head')[0];
  const sprc = document.createElement('style');
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

export const clamp = (min, max, val) => {
  if( min > val ) return min;
  if( max < val ) return max;
  return val;
}
