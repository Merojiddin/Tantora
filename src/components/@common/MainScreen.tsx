import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import hexToRgb from 'hex-rgb';

interface IStyleProps {
  bgSrc: string;
  height: string;
}
interface IProps {
  title: string;
  bgSrc: string;
  secondTitle?: string;
  thirdTitle?: string;
  height: string;
}

const MainScreen: FC<IProps> = (props) => {
  const classes = useStyles({ bgSrc: props.bgSrc, height: props.height })();

  return (
    <div className={classes.wrapper}>
      <Typography className={classes.title} variant="h1">
        {props.title}
      </Typography>
      <Typography className={classes.titleText} variant="h4">
        "Enjoy exhibitions at home"
      </Typography>
      <Typography className={classes.titleText2} variant="h4">
        "Keep in touch with all online exhibitions"
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
        height: props.height,
        width: '100%',
        minWidth: '700px',
        background: `url(${props.bgSrc}) center no-repeat`,
        backgroundSize: 'cover',
        alignItems: 'center',
        flexDirection: 'column',
        padding: 0,
        position: 'relative',

        '&:before': {
          content: `' '`,
          position: 'absolute',
          height: '100%',
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
        marginTop: '191px',
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
