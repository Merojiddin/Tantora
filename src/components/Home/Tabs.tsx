import React, { FC, ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import Container from '@material-ui/core/Container';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import hexToRgb from 'hex-rgb';

import clients from '@config/clients';
import TabPanel from './TabPanel';
import VisitorsIcon from 'assets/images/Visitors.png';
import OrganizatorsIcon from 'assets/images/Organizators.png';
import ExhibitorsIcon from 'assets/images/Exhibitors.png';
import { Link } from 'react-router-dom';

const MyTabs: FC = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [t] = useTranslation('home');

  const handleChange = (_: ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const TabVisitors = (
    <div className={classes.tabBtnContainer}>
      <div className={classes.tabCornerNumber}>01</div>
      <CardMedia image={VisitorsIcon} className={classes.tabIcon} />
      <Typography className={classes.tabLabel}>
        {t('clients.visitors')}
      </Typography>
    </div>
  );

  const TabExhibitions = (
    <div className={classes.tabBtnContainer}>
      <div className={classes.tabCornerNumber}>02</div>
      <CardMedia image={ExhibitorsIcon} className={classes.tabIcon} />
      <Typography className={classes.tabLabel}>
        {t('clients.exhibitors')}
      </Typography>
    </div>
  );

  const TabOrganizations = (
    <div className={classes.tabBtnContainer}>
      <div className={classes.tabCornerNumber}>03</div>
      <CardMedia image={OrganizatorsIcon} className={classes.tabIcon} />
      <Typography className={classes.tabLabel}>
        {t('clients.organizators')}
      </Typography>
    </div>
  );

  return (
    <Container maxWidth="lg" className={classes.wrapper}>
      <Typography variant="h3" className={classes.title}>
        {t('clients.title')}
      </Typography>
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
        {clients.visitors_content.map(({ icon, itemNumber }) => {
          return (
            <li key={itemNumber} className={classes.tabPanelItem}>
              <CardMedia image={icon} className={classes.tabPanelIcon} />
              <h1 className={classes.tabPanelTitle}>
                {t(`clients.visitors_content.${itemNumber}.title`)}
              </h1>
              <Typography className={classes.tabPanelText}>
                {t(`clients.visitors_content.${itemNumber}.description`)}
              </Typography>
            </li>
          );
        })}
        <Link to="/visitors">
          <Button className={classes.tabPanelBtn}>
            {useTranslation('common')[0]('btns.more')}
          </Button>
        </Link>
      </TabPanel>
      <TabPanel value={value} index={1} className={classes.tabPanel}>
        {clients.exhibitors_content.map(({ icon, itemNumber }) => {
          return (
            <li key={itemNumber} className={classes.tabPanelItem}>
              <CardMedia image={icon} className={classes.tabPanelIcon} />
              <h1 className={classes.tabPanelTitle}>
                {t(`clients.exhibitors_content.${itemNumber}.title`)}
              </h1>
              <Typography className={classes.tabPanelText}>
                {t(`clients.exhibitors_content.${itemNumber}.description`)}
              </Typography>
            </li>
          );
        })}
        <Link to="/exhibitors">
          <Button className={classes.tabPanelBtn}>
            {useTranslation('common')[0]('btns.more')}
          </Button>
        </Link>
      </TabPanel>
      <TabPanel value={value} index={2} className={classes.tabPanel}>
        {clients.organizators_content.map(({ icon, itemNumber }) => {
          return (
            <li key={itemNumber} className={classes.tabPanelItem}>
              <CardMedia image={icon} className={classes.tabPanelIcon} />
              <h1 className={classes.tabPanelTitle}>
                {t(`clients.organizators_content.${itemNumber}.title`)}
              </h1>
              <Typography className={classes.tabPanelText}>
                {t(`clients.organizators_content.${itemNumber}.description`)}
              </Typography>
            </li>
          );
        })}
        <Link to="/organizators">
          <Button className={classes.tabPanelBtn}>
            {useTranslation('common')[0]('btns.more')}
          </Button>
        </Link>
      </TabPanel>
      
    </Container>
  );
};

const useStyles = makeStyles((theme) => {
  const blue = hexToRgb(theme.palette.common.blue);

  return {
    wrapper: {
      ...theme.mixins.sectionPaddings,
    },
    title: {
      fontWeight: 'bold',
      fontSize: 42,
      textAlign: 'center',
      marginBottom: 58,
      [theme.breakpoints.down('xs')]: {
        fontSize: 32,
        textAlign: 'center',
        marginTop: 38,
      },
    },
    tabs: {
      backgroundColor: theme.palette.common.white,
      width: '100%',
      '& .MuiTabs-flexContainer': {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        '& .MuiTabs-indicator': {
          border: `5px solid ${theme.palette.common.black}`,
        },
      },
      '& .MuiTabs-scroller': {
        padding: '10px 24px 0',
        '& .MuiTabs-indicator': {
          width: 0,
          display: 'none',
        },
      },
    },
    tab: {
      '&&': {
        position: 'relative',
        color: theme.palette.common.black,
        width: '100%',
        height: 268,
        maxWidth: 'calc(33% - 20px)',
        padding: 0,
        marginBottom: 80,
        background: theme.palette.common.white,
        boxShadow: `0px 8px 20px rgba(${blue.red},${blue.green},${blue.blue}, 0.15)`,
        borderRadius: 10,
        overflow: 'inherit',
        zIndex: 125,
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
        [theme.breakpoints.down('xs')]: {
          maxWidth: '100%',
          height: 268,
        },
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
      '& .MuiBox-root': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        width: '100%',
        '& .MuiTypography-root': {
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
        },
      },
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'row',
      },
    },
    tabPanelItem: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      color: 'black',
      width: 'calc(33% - 12.5px)',
      margin: '25px 0',
      [theme.breakpoints.down('sm')]: {
        width: 'calc(50% - 12.5px)',
      },
      [theme.breakpoints.down('xs')]: {
        width: '100%',
      },
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
      margin: '0 auto 15px',
      display: 'flex',
    },
    tabPanelText: {
      fontFamily: 'Roboto',
      fontSize: 16,
      textAlign: 'center',
      width: '100%',
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
    btnWrapper: {
      width: '100%',
    },
    tabPanelBtn: {
      display: 'flex',
      fontSize: 14,
      width: 163,
      height: 47,
      margin: '70px auto 0',
      backgroundColor: theme.palette.common.blue,
      color: theme.palette.common.white,
      [theme.breakpoints.down('xs')]: {
        width: '340px',
      },
    },
  };
});

export default MyTabs;
