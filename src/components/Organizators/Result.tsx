import React, { FC } from 'react';
import { makeStyles,  } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import TabItem from './TabItem';
import datas from '@config/organizators';
import theme from 'theme';

const Results: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <Typography variant="h1" className={classes.title}>
          What do you get as a result
        </Typography>
        <div className={classes.tabPanel}>
          {datas[1].map((data) => {
            return (
              <TabItem
                icon={data.icon}
                text={data.text}
                key={data.index}
                fontSize="20px"
                lineHeight="32px"
                fontWeight={700}
              />
            );
          })}
        </div>
      </Container>
    </div>
  );
};

const useStyles = makeStyles({
  root: {
    width: '100%',
    backgroundColor: theme.palette.common.lightGrey,
    padding: '89px 50px 65px',
    marginBottom: 76,
  },
  container: {
    maxWidth: 1280,
    color: theme.palette.common.black,
    margin: 'auto',
  },
  title: {
    display: 'flex',
    fontSize: 42,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    margin: '0px auto 62px',
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

export default Results;
