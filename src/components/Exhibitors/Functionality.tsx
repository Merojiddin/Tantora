import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import iPad from 'assets/images/ExhibitorsPage/ipad.png';
import mob from 'assets/images/ExhibitorsPage/mob.png';

const text =
  'On average, each exhibition is visited by about 1 million users from around the world. More than 1000 exhibitors took part in our exhibitions.';

const Functionality: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container className={classes.wrapper}>
        <div className={classes.leftBox}>
          <Typography className={classes.leftBoxTitle} variant="h2">
            What functionality is provided for the exponent
          </Typography>
          <p className={classes.leftBoxText}>{text}</p>
          <ul>
            <li className={classes.leftBoxListItem}>
              <strong>1.</strong> Editing booth information
            </li>
            <li className={classes.leftBoxListItem}>
              <strong>2.</strong> Adding booth goods
            </li>
            <li className={classes.leftBoxListItem}>
              <strong>3.</strong> Chat and video call with visitors
            </li>
            <li className={classes.leftBoxListItem}>
              <strong>4.</strong> Statistics of the exhibition and stand
            </li>
            <li className={classes.leftBoxListItem}>
              <strong>5.</strong> Contact the exhibition organizer
            </li>
          </ul>
        </div>
        <div className={classes.rightBox}>
          <CardMedia image={iPad} className={classes.iPad} />
          <CardMedia image={mob} className={classes.mob} />
        </div>
      </Container>
    </div>
  );
};

const useStyles = makeStyles((theme) => {
  return {
    root: {
      width: '100%',
      backgroundColor: theme.palette.common.lightGrey,
      paddingBottom: 15,
      marginTop: 139,
    },
    wrapper: {
      paddingTop: 137,
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      padding: '0 20px',
    },
    leftBox: {
      maxWidth: 590,
      height: 413,
      marginRight: '2%',
    },
    leftBoxTitle: {
      width: 589,
      fontFamily: 'Roboto',
      fontSize: 42,
      lineHeight: '130.4%',
      fontWeight: 'bold',
    },
    leftBoxText: {
      width: 588,
      fontSize: 16,
      fontHeight: '191.4%',
    },
    leftBoxListItem: {
      width: 588,
      fontSize: 16,
      lineHeight: '191.4%',
    },
    rightBox: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      maxWidth: 608,
      height: 560,
      bottom: 19,
      position: 'relative',
    },
    iPad: {
      height: 493,
      width: 607,
    },
    mob: {
      width: 158,
      height: 305,
      position: 'relative',
      right: 263,
      bottom: 336,
    },
  };
});

export default Functionality;
