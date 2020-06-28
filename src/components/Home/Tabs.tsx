import React, { FC, ChangeEvent } from 'react';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import { makeStyles, Typography } from '@material-ui/core';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import Button from '@material-ui/core/Button';

import hexToRgb from 'hex-rgb';


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
              <h1 className={classes.tabPanelTitle} >Opportunity</h1>
              <Typography className={classes.tabPanelText} >An effective opportunity to strengthen business positions and enter new markets </Typography>
            </div> 
          )
        })}
        
      </TabPanel>
      <TabPanel value={value} index={1} className={classes.tabPanel}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2} className={classes.tabPanel}>
        Item Three
      </TabPanel>
      <Button className={classes.tabPanelBtn}>More</Button>
    </div>
  );
};

const useStyles = makeStyles((theme) => {
  const green = hexToRgb(theme.palette.common.green)
  const black = hexToRgb(theme.palette.common.black)
  const white = hexToRgb(theme.palette.common.white)

  return {
  tabs: {
    backgroundColor: theme.palette.common.white,
    margin: 'auto',
    width: '100%',
    '& .MuiTabs-flexContainer': {
      justifyContent: 'center',
      display: 'flex',
      flexWrap: 'wrap',
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
    boxShadow: `0px 8px 20px rgba(${green.red},${green.green},${green.blue}, 0.15)`,
    borderRadius: 10,
  

    '&.Mui-selected': {
      color: theme.palette.common.black,
      boxShadow: `0px 8px 20px rgba(${green.red},${green.green},${green.blue}, 0.15)`,
      background: theme.palette.common.white,
      
      
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
    background: theme.palette.common.whiteGrey,
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
    padding: '0 100px',
    justifyContent: 'center',
      '& .MuiBox-root': {
        '& .MuiTypography-root': {
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          maxWidth: 1240,
        }
      }
  },
  tabPanelItem: {  
    color: 'black',
    width: 315,
    margin: '15px 11px',
  },
  tabPanelIcon: {
    boxShadow: `inset 0px 4px 4px rgba(${black.red}, ${black.green}, ${black.blue}, 0.15)`,
    background: `rgba(${white.red},${white.green},${white.blue}, 0.25)`,
    borderRadius: '50%',
    width: 152,
    height: 152,
    margin: 'auto',
    display: 'flex',
  },
  tabPanelTitle: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 20,
    justifyContent: 'center',
    margin: 'auto',
    display: 'flex',
  },
  tabPanelText: {
    fontFamily: 'Roboto',
    fontSize: 16,
    textAlign: 'center',
  },
  learnBtn: {
    border: `1px solid ${theme.palette.common.blue}`,
    borderRadius: 5,
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    width: 163,
    height: 47,
    textAlign: 'center',
    marginTop: '32px',
    marginBottom: 61,
    color: theme.palette.common.blue,
  },
  tabPanelBtn: {
    backgroundColor: theme.palette.common.blue,
    fontSize: 14,
    display: 'flex',
    margin: '70px auto 107px',
    width:163,
    height: 47,
  },
  active: {
    border: 'none',
    
  }
}});

export default MyTabs;
