import * as React from 'react';

import './inject';

interface Props extends React.HTMLProps<HTMLDivElement> {
  radius?: number | string,
  color?: string,
  stroke?: number | string,
  visible?: boolean
}

const Spinner = ({ visible = true, color = '#333333', stroke = 5, radius = 40, className, style, ...rest }: Props) => {
  if (!visible) {
    return null;
  }

  return (
    <div
      {...rest}
      className={['react-spinner-material', className].join(' ')}
      style={{
          width: radius,
          height: radius,
          borderColor: color,
          borderWidth: stroke,
          ...style
      }}
    />
  );
}

export default Spinner;
