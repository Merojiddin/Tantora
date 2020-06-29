import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';

import about from '../../assets/images/about.jpg';
import theme from 'theme';

const text =
  'Online fair is a platform for organizing virtual exhibitions, offering a whole range of software solutions and additional servicesfor the entire exhibition industry Online fair brings together exhibition centers and exhibition organizers into a single network. Which Will serve as an economical and effective tool for promoting products and services to international markets and developing international trade relations';

const About: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.div}>
      <Container maxWidth="lg" className={classes.root}>
        <div className={classes.firstColumn}>
          <Typography variant="h4" className={classes.title}>
            <strong>About</strong> The Project
          </Typography>
          <Typography className={classes.text}>{text}</Typography>
          <Button color="primary" className={classes.learnBtn}>
            Learn more
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
  },
  root: {
    width: '100%',
    marginBottom: 150,
    justifyContent: 'space-around',
    display: 'flex',
    flexWrap: 'wrap',
  },
  title: {
    fontFamily: 'Roboto',
    textAlign: 'left',
    marginBottom: 0,
    marginTop: 92,
    fontSize: 48,
  },
  text: {
    fontFamily: 'Roboto',
    fontSize: 18,
    textAlign: 'left',
    letterSpacing: '-0.015em',
    margin: '25px 0 50px',
    width: 478,
    color: theme.palette.common.grey,
  },
  firstColumn: {
    width: 518,
    padding: 20,
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
  },
  secondColumn: {
    width: 478,
    boxSizing: 'border-box',
    '&:before': {
      content: `' '`,
      position: 'absolute',
      height: '437px',
      width: '368px',
      borderRadius: 10,
      left: 850,
      top: 1307,
      zIndex: -1,
      background: theme.palette.common.blue,
    },
  },
  secondndColumnPic: {
    marginTop: 109,
    zIndex: 200,
    borderRadius: 10,
    width: '456px',
    height: '448px',
  },
});

export default About;
