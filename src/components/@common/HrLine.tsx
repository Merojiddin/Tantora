import React, { FC } from 'react';

interface IProps {
  color: string;
  width: string;
  margin?: string;
  right?: string;
  height: string;
  radius?: string;
  bottom?: string;
}

const ColoredLine: FC<IProps> = (props) => (
  <hr
    style={{
      position: 'relative',
      right: props.right,
      color: props.color,
      backgroundColor: props.color,
      height: props.height,
      width: props.width,
      margin: props.margin,
      borderRadius: props.radius,
      bottom: props.bottom,
    }}
  />
);

export default ColoredLine;
