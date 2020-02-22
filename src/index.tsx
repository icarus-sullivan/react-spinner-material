import * as React from 'react';
import 'spinner-material';

interface Props {
  radius: number,
  color: string,
  stroke: number,
  visible: boolean,
  [key: string]: any
}

const Spinner = ({ visible = true, color = '#333333', stroke = 5, radius = 40, ...rest }: Props) => {
  if (!visible) {
    return null;
  }

  // @ts-ignore
  return (<spinner-material radius={radius} stroke={stroke} color={color} />);
}

export default Spinner;
