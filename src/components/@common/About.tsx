import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import theme from 'theme';

const text =
  'We give buyers a complete B2B product hunting experience so they can easily find quality products from top manufacturers in six different sectors. Buyers can stay updated on industry news and trends; locate nearest points of sale; request and compare custom price quotes and documentation from leading manufacturers; and browse thousands of products worldwide.';

const About: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h1" className={classes.title}>
        About the project
      </Typography>
      <p className={classes.text}>{text}</p>
    </div>
  );
};

const useStyles = makeStyles({
  root: {
    maxWidth: 1251,
    color: theme.palette.common.black,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    margin: 'auto',
    marginTop: '76px',
    padding: '0px 40px ',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 42,
    lineHeight: '174.19%',
  },
  text: {
    fontSize: 20,
    fontWeight: 'normal',
    minHeight: 148,
    paddingTop: 14,
    lineHeight: 1.5,
  },
});

export default About;
