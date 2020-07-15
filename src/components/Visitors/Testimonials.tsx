import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import theme from 'theme';

import background from 'assets/images/VisitorsPage/testimolbg.png';
import profil from 'assets/images/VisitorsPage/profil.jpg';

const Testimonials: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <Typography variant="h2" className={classes.title}>
          Testimonials
        </Typography>
        <CardMedia image={profil} className={classes.profilPic} />
        <p className={classes.text}>
          <strong className={classes.quotes}>“ </strong>I receive many more
          requests with DirectIndustry and many of them turn into sales.
          DirectIndustry has opened new doors for automatica1994, especially for
          the European market. Those markets would be difficult to reach without
          this platform.
          <strong className={classes.quotes}> ”</strong>
        </p>
        <Typography className={classes.name} variant="h4">
          David Muñoz Sorolla
        </Typography>
        <p className={classes.ceo}>CEO at automatica1994</p>
      </div>
    </div>
  );
};

const useStyles = makeStyles({
  root: {
    width: '100%',
    backgroundColor: theme.palette.common.lightGrey,
    height: 608,
    paddingTop: 46,
    paddingBottom: 33,
    marginTop: 139,
  },
  wrapper: {
    background: `url(${background}) center no-repeat`,
    backgroundSize: '529px 529px',
    alignItems: 'center',
    height: 529,
    paddingTop: 68,
  },
  title: {
    fontFamily: 'Roboto',
    fontSize: 42,
    fontWeight: 'bold',
    display: 'flex',
    justifyContent: 'center',
    lineHeight: '207.9%',
  },
  profilPic: {
    width: 110.79,
    height: 110.79,
    margin: 'auto',
    borderRadius: '50%',
    marginTop: 22.4,
  },
  quotes: {
    fontSize: 40,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    position: 'relative',
    top: 12,
  },
  text: {
    maxWidth: 923,
    padding: '0px 20px',
    fontSize: 16,
    margin: 'auto',
    marginTop: 23.96,
    lineHeight: '207.9%',
    fontWeight: 'normal',
  },
  name: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: '207.9%',
    display: 'flex',
    justifyContent: 'center',
    paddingTop: 14,
  },
  ceo: {
    color: '#8D8D8D',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 14,
    display: 'flex',
    justifyContent: 'center',
    margin: 0,
  },
});

export default Testimonials;
