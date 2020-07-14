import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import hexToRgb from 'hex-rgb';

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
        justifyContent: 'center',
        height: '800px',
        width: '100%',
        background: `url(${props.bgSrc}) center no-repeat`,
        backgroundSize: 'cover',
        padding: 0,
        position: 'relative',
        flexDirection: 'column',
        '&:before': {
          content: `''`,
          position: 'absolute',
          height: '100%',
          width: '100%',
          left: 0,
          top: 0,
          zIndex: 4,
          background: `rgba(${black.red},${black.green},${black.blue}, 0.4)`,
        },
        [theme.breakpoints.down('xs')]: {
          height: '80vh',
        },
      },
      title: {
        fontSize: 72,
        fontFamily: 'Roboto',
        fontWeight: 'bolder',
        position: 'relative',
        color: theme.palette.common.white,
        textAlign: 'center',
        width: '100%',
        zIndex: 100,
        [theme.breakpoints.down('xs')]: {
          fontSize: 42,
          lineHeight: '37px',
          marginBottom: 25,
        },
      },
      titleText: {
        fontFamily: 'Roboto',
        fontSize: 24,
        textAlign: 'center',
        width: '100%',
        color: theme.palette.common.white,
        marginTop: '9px',
        zIndex: 10,
        [theme.breakpoints.down('xs')]: {
          marginTop: 4,
          fontSize: 18,
          lineHeight: '21px',
        },
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
        [theme.breakpoints.down('xs')]: {
          marginTop: 5,
          fontSize: 18,
          lineHeight: '21px',
        },
      },
    };
  });

export default MainScreen;
