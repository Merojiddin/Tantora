import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

import TabItem from 'components/@common/TabItems';
import Data from './store';

import theme from 'theme';

const MyTabs: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h1" className={classes.title}>
        What do you get as a result
      </Typography>
      <div className={classes.tabPanel}>
        {Data.map((data) => {
          return (
            <TabItem
              icon={data.icon}
              title={data.title}
              text={data.text}
              key={data.index}
            />
          );
        })}
      </div>
    </div>
  );
};

const useStyles = makeStyles({
  root: {
    maxWidth: 1251,
    color: theme.palette.common.black,
    margin: 'auto',
  },
  title: {
    display: 'flex',
    fontSize: 42,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    margin: '49px auto 62px',
    justifyContent: 'center',
  },
  tabPanel: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    padding: '0 20px',
    justifyContent: 'center',
    '& .MuiBox-root': {
      '& .MuiTypography-root': {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        maxWidth: 1240,
      },
    },
  },
});

export default MyTabs;
