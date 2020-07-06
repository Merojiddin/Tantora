import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import hexToRgb from 'hex-rgb';
import Search from './Search';

interface IStyleProps {
  bgSrc: string;
}
interface IProps {
  title: string;
  subtitle?: string;
  subtitle2?: string;
  bgSrc: string;
}

const MainScreen: FC<IProps> = (props) => {
  const classes = useStyles({ bgSrc: props.bgSrc })();

  return (
    <div className={classes.wrapper}>
      <Typography className={classes.title} variant="h1">
        {props.title}
      </Typography>
      <Typography className={classes.titleText} variant="h4">
        {props.subtitle}
      </Typography>
      <Typography className={classes.titleText2} variant="h4">
        {props.subtitle2}
      </Typography>
      <Search />
    </div>
  );
};

const useStyles = (props: IStyleProps) =>
  makeStyles((theme) => {
    const black = hexToRgb(theme.palette.common.black);

    return {
      wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        height: '800px',
        width: '100%',
        minWidth: '700px',
        background: `url(${props.bgSrc}) center no-repeat`,
        backgroundSize: 'cover',
        padding: 0,
        marginBottom: 150,
        position: 'relative',

        '&:before': {
          content: `' '`,
          position: 'absolute',
          height: '800px',
          width: '100%',
          left: 0,
          top: 0,
          zIndex: 4,
          background: `rgba(${black.red},${black.green},${black.blue}, 0.4)`,
        },
      },
      title: {
        fontSize: 72,
        fontFamily: 'Roboto',
        marginTop: 246,
        fontWeight: 'bolder',
        position: 'relative',
        color: theme.palette.common.white,
        textAlign: 'center',
        width: '100%',
        zIndex: 100,
      },
      titleText: {
        fontFamily: 'Roboto',
        fontSize: 24,
        textAlign: 'center',
        width: '100%',
        color: theme.palette.common.white,
        marginTop: '9px',
        zIndex: 10,
      },
      titleText2: {
        fontFamily: 'Roboto',
        fontSize: 24,
        textAlign: 'center',
        width: '100%',
        color: theme.palette.common.white,
        marginTop: '12px',
        zIndex: 10,
        marginBottom: 40,
      },
    };
  });

export default MainScreen;
