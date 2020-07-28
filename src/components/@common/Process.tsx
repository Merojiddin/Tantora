import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import iPad from 'assets/images/ExhibitorsPage/video.png';

const Process: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.lowerBox}>
      <Typography variant="h2" className={classes.lowerBoxTitle}>
        Process of participation in an online exhibition
        <strong className={classes.bigDot}> .</strong>
      </Typography>
      <div className={classes.iPad}>
        <CardMedia image={iPad} className={classes.ipadPic} />
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => {
  return {
    lowerBox: {
      display: 'flex',
      flexWrap: 'wrap',
      bottom: 19,
      position: 'relative',
      padding: '0 20px',
      justifyContent: 'center',
      marginBottom: 76,
    },
    lowerBoxTitle: {
      fontFamily: 'Roboto',
      fontSize: 42,
      lineHeight: '72px',
      fontWeight: 'bold',
      width: 484,
      display: 'flex',
      alignItems: 'center',
      bottom: 101,
      position: 'relative',
      marginRight: 38,
      marginTop: 76,
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

export default Process;
