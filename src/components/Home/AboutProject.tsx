import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import about from '../../assets/images/about.jpg'

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
          <Button color="primary" className={classes.learnBtn}>Learn more</Button>
        </div>
        <div className={classes.secondColumn}>
          <img src={about} alt="" width="456px" height="448px"/>
        </div>
      </Container>
    </div>
  );
};

const useStyles = makeStyles({
  div: {
    backgroundColor: '#EFF4F8',
    paddingTop: 1,
  },
  root: {
    width: '100%',
    marginBottom: 150, 
    alignContent: 'center',
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
    width: 478
  },
  firstColumn: {
    //padding: 100,
    width: 518,
    padding: 20,
  },
  learnBtn: {
    border: '1px solid #1B70BE',
    borderRadius: 5,
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    width: 163,
    height: 47,
    textAlign: 'center',
  },
  secondColumn: {
    width: 478,
    boxSizing: 'border-box',
      '&:before': {
        content: ' ',
        position: 'absolute',
        width: 368,
        height: 437,
        backgroundColor: '#1B70BE',
        borderRadius: 10,
        zIndex: 15

      }
    //display: 'flex',
  }
});

export default About;
