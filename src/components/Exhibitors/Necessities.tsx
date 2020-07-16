import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import iPad from 'assets/images/ExhibitorsPage/video.png';

const Necessities: FC = () => {
  const classes = useStyles();

  return (
    <Container className={classes.wrapper}>
      <div className={classes.upperBox}>
        <Typography className={classes.upperBoxTitle} variant="h2">
          What you need to become an exhibitor
        </Typography>
        <ul className={classes.upperBoxList}>
          <li className={classes.upperBoxListItem}>
            <div className={classes.upperBoxListRound}>1</div>
            <p className={classes.upperBoxListText}>Register in your account</p>
          </li>
          <li className={classes.upperBoxListItem}>
            <div className={classes.upperBoxListRound}>2</div>
            <p className={classes.upperBoxListText}>
              Choose a virtual exhibition
            </p>
          </li>
          <li className={classes.upperBoxListItem}>
            <div className={classes.upperBoxListRound}>3</div>
            <p className={classes.upperBoxListText}>
              Create a virtual stand with up-to-date information about the
              company, including company description, logo, contact details,
              etc.
            </p>
          </li>
          <li className={classes.upperBoxListItem}>
            <div className={classes.upperBoxListRound}>4</div>
            <p className={classes.upperBoxListText}>Select and pay the fare </p>
          </li>
          <li className={classes.upperBoxListItem}>
            <div className={classes.upperBoxListRound}>5</div>
            <p className={classes.upperBoxListText}>
              Now your booth has appeared on the virtual exhibition.
            </p>
          </li>
        </ul>
      </div>
      <div className={classes.lowerBox}>
        <Typography variant="h2" className={classes.lowerBoxTitle}>
          Process of participation in an online exhibition
          <strong className={classes.bigDot}> .</strong>
        </Typography>
        <div className={classes.iPad}>
          <CardMedia image={iPad} className={classes.ipadPic} />
        </div>
      </div>
    </Container>
  );
};

const useStyles = makeStyles((theme) => {
  return {
    wrapper: {
      paddingTop: 137,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '0 20px',
      maxWidth: 1280,
    },
    upperBox: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      marginBottom: 100,
    },
    upperBoxTitle: {
      fontFamily: 'Roboto',
      fontSize: 42,
      lineHeight: '86px',
      fontWeight: 'bold',
      marginBottom: '68px',
    },
    upperBoxText: {
      fontSize: 16,
      fontHeight: '30px',
    },
    upperBoxList: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    upperBoxListItem: {
      fontSize: 16,
      lineHeight: '30px',
      width: 247,
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignContent: 'flex-start',
    },
    upperBoxListRound: {
      borderRadius: '50%',
      backgroundColor: theme.palette.common.roundGrey,
      width: 88,
      height: 88,
      fontWeight: 900,
      fontSize: 42,
      lineHeight: '86px',
      color: theme.palette.common.blue,
      display: 'flex',
      justifyContent: 'center',
    },
    upperBoxListText: {
      textAlign: 'start',
    },
    lowerBox: {
      display: 'flex',
      flexWrap: 'wrap',
      height: 560,
      bottom: 19,
      position: 'relative',
      padding: '0 20px',
      justifyContent: 'center',
    },
    lowerBoxTitle: {
      fontFamily: 'Roboto',
      fontSize: 42,
      lineHeight: '72px',
      fontWeight: 'bold',
      width: 484,
      display: 'flex',
      alignItems: 'center',
      bottom: 65,
      position: 'relative',
      marginRight: 38,
    },
    bigDot: {
      color: theme.palette.common.blue,
      fontSize: 132,
      textAlign: 'center',
      lineHeight: '0px',
      position: 'relative',
      bottom: 67,
    },
    iPad: {
      height: 430,
      width: 669,
      border: `0.5px dashed ${theme.palette.common.ultraLightGrey3}`,
      borderRadius: '22px',
      padding: '25px 24px',
    },
    ipadPic: {
      height: 383,
      width: 621,
    },
  };
});

export default Necessities;
