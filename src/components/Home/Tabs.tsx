import React, { FC, ChangeEvent } from 'react';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import { makeStyles, Typography } from '@material-ui/core';
import AcUnitIcon from '@material-ui/icons/AcUnit';

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
      <TabPanel value={value} index={0} >
        {['0','1','2','3','4','5'].map((index)=> {
          return (
            <div id={index} className={classes.tabItem}>
              <AcUnitIcon className={classes.tabIcon}/>
              <Typography className={classes.tabTitle} >Opportunity</Typography>
              <Typography className={classes.tabText} >An effective opportunity to strengthen business positions and enter new markets </Typography>
            </div> 
          )
        })}
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
    backgroundColor: '#13303F',
    margin: 'auto',
    width: '100%',
    
    '& .MuiTabs-flexContainer': {
      justifyContent: 'space-between',
    },
  },

  tab: {
    width: '30%',
    color: theme.palette.common.white,
    height: 56,
    marginBottom: 8,
    borderRadius: '89px',
    border: '1px solid #02BDE7',
    fontFamily: 'Segoe UI',
    fontWeight: 'bold',
    fontSize: 18,


    '&.Mui-selected': {
      color: theme.palette.common.white,
      boxShadow: '0px 15px 13px rgba(2, 189, 231, 0.15)',
      background: '#02BDE7',

    },
  },
  tabPanel: {

  },
  tabItem: {
    color: 'white'
  },
  tabIcon: {
    boxShadow: 'inset 0px 4px 4px rgba(0, 0, 0, 0.15)',
    background: 'rgba(255, 255, 255, 0.25)',
    borderRadius: '50%',
    width: 152,
    height: 152,  
  },
  tabTitle: {
    fontFamily: 'Segoe UI',
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
  },
  tabText: {
    fontFamily: 'Segoe UI',
    fontSize: 16,
    textAlign: 'center',
  },
}));

export default MyTabs;
