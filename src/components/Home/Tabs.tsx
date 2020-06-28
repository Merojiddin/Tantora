<<<<<<< HEAD
import React, { FC, ChangeEvent } from 'react';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import { makeStyles, Typography } from '@material-ui/core';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import Button from '@material-ui/core/Button';


import TabPanel from './TabPanel';
//const Eye = '../../assets/logo/Eye.svg'

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
        <Tab 
          label={
            <div className={classes.tabBtnContainer}>
              <div className={classes.tabCornerNumber}>01</div>
              <AcUnitIcon className={classes.tabIcon}/>
              {/* //<img className={classes.tabIcon}>{Eye}</img> */}
              <Typography className={classes.tabLabel}>Visitors</Typography>
              <Button className={`${classes.learnBtn} ${classes.active}`}>Learn More...</Button>
            </div>
          }
          className={classes.tab}
         />
        <Tab 
          label={
            <div className={classes.tabBtnContainer}>
              <div className={classes.tabCornerNumber}>02</div>
              <AcUnitIcon className={classes.tabIcon}/>
              <Typography className={classes.tabLabel}>Exhibitions</Typography>
              <Button className={classes.learnBtn}>More</Button>
            </div>
          }
          className={classes.tab}
         />
        <Tab 
          label={
            <div className={classes.tabBtnContainer}>
              <div className={classes.tabCornerNumber}>03</div>
              <AcUnitIcon className={classes.tabIcon}/>
              <Typography className={classes.tabLabel}>Organizations</Typography>
              <Button className={classes.learnBtn}>More</Button>
            </div>
          }
          className={classes.tab}
         />
      </Tabs>
      <TabPanel value={value} index={0} className={classes.tabPanel}>
        {['0','1','2','3','4','5'].map((index)=> {
          return (
            <div id={index} className={classes.tabPanelItem}>
              <AcUnitIcon className={classes.tabPanelIcon}/>
              <Typography className={classes.tabPanelTitle} >Opportunity</Typography>
              <Typography className={classes.tabPanelText} >An effective opportunity to strengthen business positions and enter new markets </Typography>
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
    backgroundColor: '#ffffff',
    margin: 'auto',
    width: '100%',
    '& .MuiTabs-flexContainer': {
      justifyContent: 'center',
      '& .MuiTabs-indicator': {
        border: '5px solid black'
      }
    },
  },

  tab: {
    color: theme.palette.common.black,
    margin: '10px 20px 80px ',
    
    width: 380,
    height: 268,
    background: '#FFFFFF',
    boxShadow: '0px 8px 20px rgba(27, 112, 190, 0.15)',
    borderRadius: 10,

    '&.Mui-selected': {
      color: theme.palette.common.black,
      boxShadow: '0px 20px 50px rgba(27, 112, 190, 0.15)',
      background: '#FFFFFF',
      
      
      '&. MuiTouchRipple-root': {
        border: 'none',
      }
    },
    '&.MuiTab-root': {
      maxWidth: 380,
      //padding: '40px 12px',
    },
  },
  tabBtnContainer: {
    display: 'flex',
    flexFlow: 'column',
  },
  tabCornerNumber: {
    width: 53,
    height: 43,
    padding: '10px 17px',
    fontSize: 16,
    borderRadius: '0px 10px',
    background: '#E3E8ED',
    fontWeight: 'bold',
    left: 218,
    top: 22,
    position: 'relative'

  },
  tabLabel: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 19,
  },
  tabIcon: {
    width: 80,
    height: 80,
    margin: 'auto',
    display: 'flex'
  },
  tabPanel: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
  },
  tabPanelItem: {  
    color: 'black',
    width: 315,

  },
  tabPanelIcon: {
    boxShadow: 'inset 0px 4px 4px rgba(0, 0, 0, 0.15)',
    background: 'rgba(255, 255, 255, 0.25)',
    borderRadius: '50%',
    width: 152,
    height: 152,  
    margin: 'auto',
    display: 'flex',
  },
  tabPanelTitle: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
  },
  tabPanelText: {
    fontFamily: 'Roboto',
    fontSize: 16,
    textAlign: 'center',
  },
  learnBtn: {
    border: '1px solid #1B70BE',
    borderRadius: 5,
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    width: 163,
    height: 47,
    textAlign: 'center',
    marginTop: '32px',
    marginBottom: 61,
    color: '#1B70BE',
  },
  active: {
    border: 'none'
  },
}));

export default MyTabs;
=======
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
            <div key={index} className={classes.tabItem}>
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
>>>>>>> a9c8fae48ddcd0b59c1479d7d4597fb6673539e2
