import React, { FC, ChangeEvent } from 'react';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import { makeStyles } from '@material-ui/core';

import TabPanel from './TabPanel';

const MyTabs: FC = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (_: ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <Tabs
        value={value}
        onChange={handleChange}
        className={classes.tabs}
        textColor="primary"
      >
        <Tab label="Visitors" className={classes.tab} />
        <Tab label="Exhibitions" className={classes.tab} />
        <Tab label="Organizations" className={classes.tab} />
      </Tabs>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  tabs: {
    backgroundColor: theme.palette.background.paper,
    margin: 'auto',
    width: '100%',

    '& .MuiTabs-flexContainer': {
      justifyContent: 'space-between',
    },
  },

  tab: {
    width: '30%',
    fontWeight: 'bolder',
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
    height: 56,
    marginBottom: 8,

    '&.Mui-selected': {
      color: theme.palette.common.white,
    },
  },
}));

export default MyTabs;
