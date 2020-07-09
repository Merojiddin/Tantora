import React, { FC } from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';

interface IProps {
  icon: string;
  title: string;
  text: string;
}

const TabItem: FC<IProps> = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.tabPanelItem}>
      <CardMedia image={props.icon} className={classes.tabPanelIcon} />
      <h1 className={classes.tabPanelTitle}>{props.title}</h1>
      <Typography className={classes.tabPanelText}>{props.text}</Typography>
    </div>
  );
};

const useStyles = makeStyles(() => {
  return {
    tabPanelItem: {
      color: 'black',
      width: 362,
      margin: '15px 11px',
    },
    tabPanelIcon: {
      size: 'cover',
      borderRadius: '50%',
      width: 117,
      height: 117,
      margin: 'auto',
      display: 'flex',
    },
    tabPanelTitle: {
      fontFamily: 'Roboto',
      fontWeight: 'bold',
      fontSize: 20,
      justifyContent: 'center',
      margin: 'auto',
      display: 'flex',
    },
    tabPanelText: {
      fontFamily: 'Roboto',
      fontSize: 16,
      textAlign: 'center',
      width: 362,
    },
  };
});

export default TabItem;
