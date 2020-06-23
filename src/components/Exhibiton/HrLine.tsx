import React, { FC } from 'react';

interface IProps {
  color: string;
}

const ColoredLine: FC<IProps> = (props) => (
  <hr
    style={{
      color: props.color,
      backgroundColor: props.color,
      height: 2,
      width: 640,
      margin: '50px auto',
    }}
  />
);

export default ColoredLine;
