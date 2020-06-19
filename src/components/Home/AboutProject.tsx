import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import ColoredLine from '../@common/HrLine'
import MyTabs from './Tabs';

const text =
  'Online fair is a platform for organizing virtual exhibitions, offering a whole range of software solutions and additional servicesfor the entire exhibition industry Online fair brings together exhibition centers and exhibition organizers into a single network. Which Will serve as an economical and effective tool for promoting products and services to international markets and developing international trade relations';

const About: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.div}>
      <Container maxWidth="lg" className={classes.root}>
        <Typography variant="h4" className={classes.title}>
          <strong>About</strong> The Project
        </Typography>
        <ColoredLine color="#00D1FF" width="132px" margin="auto auto 25px" right="127px" height="6px" />

        <Typography className={classes.text}>{text}</Typography>
        <MyTabs />
      </Container>
    </div>
  );
};

const useStyles = makeStyles({
  div: {
    backgroundColor: '#13303F',
    paddingTop: 1,
  },
  root: {
    width: '100%',
    marginBottom: 150, 
  },
  title: {
    fontFamily: 'Segoe UI',
    textAlign: 'center',
    marginBottom: 0,
    marginTop: 92,
    fontSize: 48,
  },
  text: {
    fontFamily: 'Segoe UI',
    fontSize: 18,
    textAlign: 'center',
    letterSpacing: '-0.015em',
    margin: '25px 0 50px',
  },
});

export default About;
