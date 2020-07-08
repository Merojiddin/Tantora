import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';

import theme from 'theme';

import See from 'assets/images/VisitorsPage/See.png';
import Talk from 'assets/images/VisitorsPage/Talk.png';
import Deals from 'assets/images/VisitorsPage/Deals.png';
import Products from 'assets/images/VisitorsPage/Products.png';
import Webinars from 'assets/images/VisitorsPage/Webinars.png';
import Job from 'assets/images/VisitorsPage/Job.png';

const MyTabs: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h1" className={classes.title}>
        What do you get as a result
      </Typography>
      <div className={classes.tabPanel}>
        <div className={classes.tabPanelItem}>
          <CardMedia image={See} className={classes.tabPanelIcon} />
          <h1 className={classes.tabPanelTitle}>See the stands</h1>
          <Typography className={classes.tabPanelText}>
            See, evaluate and compare the services and products of companies of
            interest to you from all over the world, ready to cooperate with you
            remotely.
          </Typography>
        </div>
        <div className={classes.tabPanelItem}>
          <CardMedia image={Talk} className={classes.tabPanelIcon} />
          <h1 className={classes.tabPanelTitle}>Talk to exhibitors</h1>
          <Typography className={classes.tabPanelText}>
            Ask questions and suggestions, chat in any language or make audio
            and video calls - companies will demonstrate everything you are
            interested in.
          </Typography>
        </div>
        <div className={classes.tabPanelItem}>
          <CardMedia image={Deals} className={classes.tabPanelIcon} />
          <h1 className={classes.tabPanelTitle}>Make deals</h1>
          <Typography className={classes.tabPanelText}>
            Any deals, contracts, agreements can be concluded directly on the
            platform without worrying about security - ExpoArbitrage can
            withhold funds until the terms of the contract are met, in case of
            disputes specialist Online Expo will help to resolve the disputed
            issues.
          </Typography>
        </div>
        <div className={classes.tabPanelItem}>
          <CardMedia image={Products} className={classes.tabPanelIcon} />
          <h1 className={classes.tabPanelTitle}>Buy products</h1>
          <Typography className={classes.tabPanelText}>
            You can purchase exhibitors or their services and deliver around the
            world through ExpoMarket. And the Safety and Guarantee of Purchases
            is responsible for The ExpoArbitrage SERVICE
          </Typography>
        </div>
        <div className={classes.tabPanelItem}>
          <CardMedia image={Webinars} className={classes.tabPanelIcon} />
          <h1 className={classes.tabPanelTitle}>Watch webinars</h1>
          <Typography className={classes.tabPanelText}>
            Watch and participate in webinarchs and online conferences. See both
            presentations of exhibitors and presentations by experts and experts
            of interest to you in the topics and industries
          </Typography>
        </div>
        <div className={classes.tabPanelItem}>
          <CardMedia image={Job} className={classes.tabPanelIcon} />
          <h1 className={classes.tabPanelTitle}>Look for a job</h1>
          <Typography className={classes.tabPanelText}>
            With ExpoJob, you can find work remotely or on a permanent basis.
            Most exhibitors are developing companies - they often look for
            different specialists
          </Typography>
        </div>
      </div>
    </div>
  );
};

const useStyles = makeStyles({
  root: {
    maxWidth: 1251,
    color: theme.palette.common.black,
    margin: 'auto',
  },
  title: {
    display: 'flex',
    fontSize: 42,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    margin: '49px auto 62px',
    justifyContent: 'center',
  },
  tabPanel: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    padding: '0 20px',
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
});

export default MyTabs;
