import React, { FC } from 'react';
import Box from '@material-ui/core/Box';

interface IProps {
  value: number;
  index: number;
  className?: string;
}

const TabPanel: FC<IProps> = (props) => {
  const { children, value, index } = props;

  return (
    <div
      role="tabpanel"
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      className={props.className}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
};

export default TabPanel;
