import React, { FC, ChangeEvent } from 'react';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import { makeStyles, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import TabPanel from './TabPanel'
import hexToRgb from 'hex-rgb';

import TabItem from 'components/@common/TabItems'
import Data from './store'

import VisitorsIcon from 'assets/images/Visitors.png';
import OrganizatorsIcon from 'assets/images/Organizators.png';
import ExhibitorsIcon from 'assets/images/Exhibitors.png';



const MyTabs: FC = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (_: ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const TabVisitors = (
    <div className={classes.tabBtnContainer}>
      <div className={classes.tabCornerNumber}>01</div>
      <CardMedia image={VisitorsIcon} className={classes.tabIcon} />
      <Typography className={classes.tabLabel}>Visitors</Typography>
      <div className={`${classes.learnBtn} ${classes.active}`}>
        Learn More...
      </div>
    </div>
  );

  const TabExhibitions = (
    <div className={classes.tabBtnContainer}>
      <div className={classes.tabCornerNumber}>02</div>
      <CardMedia image={ExhibitorsIcon} className={classes.tabIcon} />
      <Typography className={classes.tabLabel}>Exhibitors</Typography>
      <div className={classes.learnBtn}>More</div>
    </div>
  );

  const TabOrganizations = (
    <div className={classes.tabBtnContainer}>
      <div className={classes.tabCornerNumber}>03</div>
      <CardMedia image={OrganizatorsIcon} className={classes.tabIcon} />
      <Typography className={classes.tabLabel}>Organizations</Typography>
      <div className={classes.learnBtn}>More</div>
    </div>
  );

  return (
    <div>
      <Tabs
        value={value}
        onChange={handleChange}
        className={classes.tabs}
        textColor="primary"
      >
        <Tab label={TabVisitors} className={classes.tab} />
        <Tab label={TabExhibitions} className={classes.tab} />
        <Tab label={TabOrganizations} className={classes.tab} />
      </Tabs>
      <TabPanel value={value} index={0} className={classes.tabPanel}>
        {
          Data.map((data) => {
            return (
              <TabItem icon={data.icon} title={data.title} text={data.text} key={data.index} />
            )
          })
        }        
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
  const blue = hexToRgb(theme.palette.common.blue);

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
          border: `5px solid ${theme.palette.common.black}`,
        },
      },
    },
    tab: {
      position: 'relative',
      zIndex: 125,
      color: theme.palette.common.black,
      margin: '10px 20px 80px ',
      width: 380,
      height: 268,
      background: theme.palette.common.white,
      boxShadow: `0px 8px 20px rgba(${blue.red},${blue.green},${blue.blue}, 0.15)`,
      borderRadius: 10,
      overflow: 'inherit',
      '&.Mui-selected': {
        color: theme.palette.common.black,
      },
      '&.Mui-selected:after': {
        position: 'absolute',
        content: `' '`,
        width: '60px',
        height: '60px',
        top: 227,
        zIndex: 4,
        transform: 'rotate(45deg)',
        boxShadow: `0px 8px 20px rgba(${blue.red},${blue.green},${blue.blue}, 0.15)`,
        background: theme.palette.common.white,

        '&. MuiTouchRipple-root': {
          border: 'none',
        },
      },
      '&.MuiTab-root': {
        maxWidth: 380,
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
      position: 'relative',
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
      display: 'flex',
    },
    tabPanel: {
      width: '100%',
      display: 'flex',
      flexWrap: 'wrap',
      padding: '0 100px',
      justifyContent: 'center',
      '& .MuiBox-root': {
        '& .MuiContainer-root': {
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          maxWidth: 1240,
        },
      },
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
      paddingTop: 13,
      color: theme.palette.common.blue,
    },
    tabPanelBtn: {
      backgroundColor: theme.palette.common.blue,
      fontSize: 14,
      display: 'flex',
      margin: '70px auto 107px',
      width: 163,
      height: 47,
      color: theme.palette.common.white,
    },
    active: {
      border: 'none',
    },
  };
});

export default MyTabs;
