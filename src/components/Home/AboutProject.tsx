import React, { FC } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';

import about from 'assets/images/about.jpg';

const About: FC = () => {
  const classes = useStyles();
  const [t] = useTranslation('home');

  return (
    <div className={classes.wrapper}>
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

const useStyles = makeStyles((theme) => ({
  wrapper: {
    ...theme.mixins.sectionPaddings,
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: theme.palette.common.lightGrey,
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  firstColumn: {
    width: '50%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      marginBottom: 50,
    },
  },
  title: {
    fontFamily: 'Roboto',
    textAlign: 'left',
    marginBottom: 25,
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
    marginBottom: 50,
    width: 478,
    color: theme.palette.common.grey,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
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
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  secondColumn: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    height: '40vw',
    width: 'calc(45% - 20px)',
    maxHeight: '448px',
    boxSizing: 'border-box',
    '&:before': {
      content: `' '`,
      position: 'absolute',
      height: '40vw',
      width: 'calc(100% - 20px)',
      maxHeight: '437px',
      borderRadius: 10,
      top: 30,
      right: -20,
      zIndex: 2,
      background: theme.palette.common.blue,
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  [theme.breakpoints.down('sm')]: {
    marginBottom: 38,
    width: '370px',
  },
  secondndColumnPic: {
    position: 'relative',
    height: '100%',
    width: '100%',
    borderRadius: 10,
    zIndex: 200,
  },
}));

export default About;
