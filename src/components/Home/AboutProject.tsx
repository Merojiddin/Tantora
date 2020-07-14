import React, { FC } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';

import about from 'assets/images/about.jpg';
import theme from 'theme';

const About: FC = () => {
  const classes = useStyles();
  const [t] = useTranslation('home');

  return (
    <div className={classes.div}>
      <Container maxWidth="lg" className={classes.root}>
        <div className={classes.firstColumn}>
          <Typography variant="h4" className={classes.title}>
            <Trans
              defaults={t('about.title')}
              components={[<strong key="0" />]}
            />
          </Typography>
          <Typography className={classes.text}>
            {t('about.description')}
          </Typography>
          <Button color="primary" className={classes.learnBtn}>
            {t('about.button')}
          </Button>
        </div>
        <div className={classes.secondColumn}>
          <CardMedia image={about} className={classes.secondndColumnPic} />
        </div>
      </Container>
    </div>
  );
};

const useStyles = makeStyles({
  div: {
    backgroundColor: theme.palette.common.lightGrey,
    paddingTop: 1,
    display: 'flex',
    justifyContent: 'center',
  },
  root: {
    width: '100%',
    maxWidth: 1280,
    marginBottom: 150,
    justifyContent: 'space-around',
    display: 'flex',
    flexWrap: 'wrap',
    [theme.breakpoints.down('xs')]: {
      maxWidth: 320,
      margin: 20,
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: 38,
    },
  },
  title: {
    fontFamily: 'Roboto',
    textAlign: 'left',
    marginBottom: 0,
    marginTop: 92,
    fontSize: 48,
    [theme.breakpoints.down('xs')]: {
      fontSize: 32,
      marginBottom: 9,
      marginTop: 0,
      textAlign: 'center',
    },
  },
  text: {
    fontFamily: 'Roboto',
    fontSize: 18,
    textAlign: 'left',
    letterSpacing: '-0.015em',
    margin: '25px 0 50px',
    width: 478,
    color: theme.palette.common.grey,
    [theme.breakpoints.down('xs')]: {
      minWidth: 320,
      width: '100%',
    },
  },
  firstColumn: {
    width: 518,
    padding: 20,
    margin: 'auto',
  },
  learnBtn: {
    border: '1px solid',
    borderColor: theme.palette.common.blue,
    borderRadius: 5,
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    width: 163,
    height: 47,
    textAlign: 'center',
    marginBottom: 100,
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      marginBottom: 0,
    },
  },
  secondColumn: {
    width: 478,
    boxSizing: 'border-box',
    position: 'relative',
    marginBottom: 100,
    margin: 'auto',
    display: 'flex',
    justifyContent: 'center',
    '&:before': {
      content: `' '`,
      position: 'absolute',
      height: '437px',
      width: '368px',
      borderRadius: 10,
      left: 121,
      top: 139,
      zIndex: 2,
      background: theme.palette.common.blue,
      [theme.breakpoints.down('xs')]: {
        marginTop: 18,
        width: '268px',
        height: 274,
        left: 78,
        top: 21,
      },
      [theme.breakpoints.down('sm')]: {
        width: '268x',
      },
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: 18,
      marginBottom: 38,

      width: '370px',
    },
  },
  [theme.breakpoints.down('sm')]: {
    marginBottom: 38,
    width: '370px',
  },
  secondndColumnPic: {
    position: 'relative',
    marginTop: 109,
    zIndex: 200,
    borderRadius: 10,
    width: '456px',
    height: '448px',
    [theme.breakpoints.down('xs')]: {
      marginTop: 0,
      width: '303px',
      height: '298px',
      right: 5,
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: 38,
    },
  },
});

export default About;
