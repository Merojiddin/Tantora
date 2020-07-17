import React, { FC } from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import theme from 'theme';

interface IProps {
  icon: string;
  text: string;
  fontSize: string;
  fontWeight: number;
  lineHeight: string;
}
interface IStyleProps {
  fontSize: string;
  fontWeights: number;
  lineHeight: string;
}

const TabItem: FC<IProps> = (props) => {
  const classes = useStyles({
    fontSize: props.fontSize,
    fontWeights: props.fontWeight,
    lineHeight: props.lineHeight,
  })();

  return (
    <div className={classes.tabPanelItem}>
      <CardMedia image={props.icon} className={classes.tabPanelIcon} />
      <Typography className={classes.tabPanelText}>{props.text}</Typography>
    </div>
  );
};

const useStyles = (props: IStyleProps) =>
  makeStyles(() => {
    return {
      tabPanelItem: {
        color: theme.palette.common.black,
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
      tabPanelText: {
        fontFamily: 'Roboto',
        fontSize: props.fontSize,
        textAlign: 'center',
        fontWeight: props.fontWeights,
        lineHeight: props.lineHeight,
        width: 362,
        textTransform: 'capitalize',
      },
    };
  });
export default TabItem;
