import React, { FC } from 'react';
import hexToRgb from 'hex-rgb';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

interface IStyleProps {
  bgSrc: string;
}
interface IProps {
  title: string;
  bgSrc: string;
}

const MainScreen: FC<IProps> = (props) => {
  const classes = useStyles({ bgSrc: props.bgSrc })();

  return (
    <div className={classes.wrapper}>
      <Typography className={classes.title} variant="h1">
        {props.title}
      </Typography>
    </div>
  );
};

const useStyles = (props: IStyleProps) =>
  makeStyles((theme) => {
    const black = hexToRgb(theme.palette.common.black);
    const primary = hexToRgb(theme.palette.secondary.main);

    return {
      wrapper: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '90vh',
        width: '100%',
        background: `url(${props.bgSrc}) center no-repeat`,
        backgroundSize: 'cover',
        backgroundColor: theme.palette.secondary.main,
        padding: 0,
        marginBottom: 150,

        '&:before': {
          content: `""`,
          position: 'absolute',
          height: '100%',
          width: '100%',
          left: 0,
          top: 0,
          // tslint:disable-next-line: prettier
          background: `linear-gradient(90deg, rgba(${black.red}, ${black.green}, ${black.blue}, 0.5) 0%, rgba(${primary.red}, ${primary.green}, ${primary.blue}, 0.7) 96%)`,
        },
      },
      title: {
        position: 'relative',
        color: theme.palette.common.white,
      },
    };
  });

export default MainScreen;
