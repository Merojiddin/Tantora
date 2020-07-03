import React, { FC, ChangeEvent } from 'react';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import { makeStyles, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import hexToRgb from 'hex-rgb';

import VisitorsIcon from 'assets/images/Visitors.png';
import OrganizatorsIcon from 'assets/images/Organizators.png';
import ExhibitorsIcon from 'assets/images/Exhibitors.png';

import Opportunity from 'assets/images/Opportunity.png';
import Statistics from 'assets/images/Statistics.png';
import Innovation from 'assets/images/Innovation.png';
import Optimization from 'assets/images/Optimization.png';
import Communication from 'assets/images/Communication.png';
import Price from 'assets/images/Price.png';

import TabPanel from './TabPanel';

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
      <Button className={`${classes.learnBtn} ${classes.active}`}>
        Learn More...
      </Button>
    </div>
  );

  const TabExhibitions = (
    <div className={classes.tabBtnContainer}>
      <div className={classes.tabCornerNumber}>02</div>
      <CardMedia image={ExhibitorsIcon} className={classes.tabIcon} />
      <Typography className={classes.tabLabel}>Exhibitors</Typography>
      <Button className={classes.learnBtn}>More</Button>
    </div>
  );

  const TabOrganizations = (
    <div className={classes.tabBtnContainer}>
      <div className={classes.tabCornerNumber}>03</div>
      <CardMedia image={OrganizatorsIcon} className={classes.tabIcon} />
      <Typography className={classes.tabLabel}>Organizations</Typography>
      <Button className={classes.learnBtn}>More</Button>
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
        <div className={classes.tabPanelItem}>
          <CardMedia image={Opportunity} className={classes.tabPanelIcon} />
          <h1 className={classes.tabPanelTitle}>Opportunity</h1>
          <Typography className={classes.tabPanelText}>
            An effective opportunity to strengthen business positions and enter
            new markets
          </Typography>
        </div>
        <div className={classes.tabPanelItem}>
          <CardMedia image={Statistics} className={classes.tabPanelIcon} />
          <h1 className={classes.tabPanelTitle}>Statistics</h1>
          <Typography className={classes.tabPanelText}>
            Objective statistics and analytics
          </Typography>
        </div>
        <div className={classes.tabPanelItem}>
          <CardMedia image={Innovation} className={classes.tabPanelIcon} />
          <h1 className={classes.tabPanelTitle}>Innovation</h1>
          <Typography className={classes.tabPanelText}>
            Using an innovative tool for effective research, presentations and
            educational event
          </Typography>
        </div>
        <div className={classes.tabPanelItem}>
          <CardMedia image={Optimization} className={classes.tabPanelIcon} />
          <h1 className={classes.tabPanelTitle}>Optimizatin</h1>
          <Typography className={classes.tabPanelText}>
            Cost optimization and maximum effect of participation in
            exhibitions, forums and conferences
          </Typography>
        </div>
        <div className={classes.tabPanelItem}>
          <CardMedia image={Communication} className={classes.tabPanelIcon} />
          <h1 className={classes.tabPanelTitle}>Communication</h1>
          <Typography className={classes.tabPanelText}>
            Communication with business partners and visitors is carried out
            using video and online chat. Exhibitors always stay in touch with
            potential customers, investors, partners
          </Typography>
        </div>
        <div className={classes.tabPanelItem}>
          <CardMedia image={Price} className={classes.tabPanelIcon} />
          <h1 className={classes.tabPanelTitle}>Price</h1>
          <Typography className={classes.tabPanelText}>
            You no longer need to pay for renting space for a company stand,
            installation, printing of materials. To participate in the virtual
            exhibition, you do not need to pay the fare to exhibitors and pay
            for the delivery of demonstration goods.
          </Typography>
        </div>
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
        '& .MuiTypography-root': {
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          maxWidth: 1240,
        },
      },
    },
    tabPanelItem: {
      color: 'black',
      width: 362,
      margin: '15px 11px',
    },
    tabPanelIcon: {
      size: 'cover',
      borderRadius: '50%',
      width: 117,
      height: 117,
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
