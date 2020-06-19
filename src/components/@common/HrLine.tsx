import React, { FC } from 'react';

interface IProps {
  color: string;
  width: string;
  margin: string;
  right: string;
  height: string; 
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
    }}
  />
);

export default ColoredLine;
