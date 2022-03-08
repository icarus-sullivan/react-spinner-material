import * as React from 'react';

import './inject';

interface Props {
  radius?: number | string,
  color?: string,
  stroke?: number | string,
  visible?: boolean,
  [key: string]: any
}

const Spinner = ({ visible = true, color = '#333333', stroke = 5, radius = 40, ...rest }: Props) => {
  if (!visible) {
    return null;
  }

  return (
    <div
      {...rest}
      className="react-spinner-material"
      style={{
          width: radius,
          height: radius,
          borderColor: color,
          borderWidth: stroke
      }} 
    />
  );
}

export default Spinner;
