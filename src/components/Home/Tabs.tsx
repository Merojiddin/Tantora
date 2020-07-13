import React, { FC, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import { makeStyles, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import TabPanel from './TabPanel';
import hexToRgb from 'hex-rgb';

import TabItem from 'components/@common/TabItems';
import Data from './store';

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
      <div className={classes.learnBtn}>More</div>
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
        {Data.map((data) => {
          return (
            <TabItem
              icon={data.icon}
              title={data.title}
              text={data.text}
              key={data.index}
            />
          );
        })}
        <Link to={'/visitors'}>
          <Button className={classes.tabPanelBtn}>More</Button>
        </Link>
      </TabPanel>
      <TabPanel value={value} index={1} className={classes.tabPanel}>
        Item Two
        <Link to={'/exhibitors'}>
          <Button className={classes.tabPanelBtn}>More</Button>
        </Link>
      </TabPanel>
      <TabPanel value={value} index={2} className={classes.tabPanel}>
        Item Three
        <Link to={'/Organizations'}>
          <Button className={classes.tabPanelBtn}>More</Button>
        </Link>
      </TabPanel>
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
      padding: 0,
      background: theme.palette.common.white,
      boxShadow: `0px 8px 20px rgba(${blue.red},${blue.green},${blue.blue}, 0.15)`,
      borderRadius: 10,
      overflow: 'inherit',
      '& .MuiTab-wrapper': {
        position: 'relative',
        height: '100%',
        width: '100%',
        zIndex: 5,
      },
      '&.Mui-selected': {
        color: theme.palette.common.black,
        '& .MuiTab-wrapper': {
          '&:after': {
            position: 'absolute',
            content: `' '`,
            width: '60px',
            height: '60px',
            left: '50%',
            bottom: 0,
            zIndex: 0,
            transform: 'rotate(45deg) translateY(70%)',
            boxShadow: `0px 8px 20px rgba(${blue.red},${blue.green},${blue.blue}, 0.15)`,
            background: theme.palette.common.white,
            transition: '0.3s',
          },
        },
      },
      '& .MuiTouchRipple-root': {
        zIndex: 100,
      },
      '&.MuiTab-root': {
        maxWidth: 380,
      },
    },
    tabBtnContainer: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexFlow: 'column',
      width: '100%',
      height: '100%',
      backgroundColor: theme.palette.common.white,
      zIndex: 5,
    },
    tabCornerNumber: {
      width: 53,
      height: 43,
      padding: '10px 17px',
      fontSize: 16,
      borderRadius: '0px 10px',
      background: theme.palette.common.whiteGrey,
      fontWeight: 'bold',
      right: 0,
      top: 0,
      position: 'absolute',
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
    },
    tabPanel: {
      width: '100%',
      padding: '0 200px',
      '& .MuiBox-root': {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        width: '100%',
        '& .MuiTypography-root': {
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          maxWidth: 1240,
        },
      },
    },
    tabPanelItem: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      color: 'black',
      minWidth: '30%',
      margin: '25px 0',
    },
    tabPanelIcon: {
      size: 'cover',
      borderRadius: '50%',
      width: 117,
      height: 117,
      marginBottom: 10,
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
      width: 362,
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
