import React, { FC } from 'react';
// import hexToRgb from 'hex-rgb';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Search from './Search'

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
      <Typography className={classes.titleText} variant="h4">Enjoy exhibitions at home</Typography>
      <Search />
    </div>
  );
};

const useStyles = (props: IStyleProps) =>
  makeStyles((theme) => {
    return {
      wrapper: {
        position: 'relative',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        height: '90vh',
        width: '100%',
        background: `url(${props.bgSrc}) center no-repeat`,
        backgroundSize: 'cover',
        backgroundColor: '#13303F',
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
          background: `rgba(19, 48, 63, 0.9)`,
        },
      },
      title: {
        fontSize: 120,
        fontFamily: 'Segoe UI',
        marginTop: 196,
        fontWeight: 'bolder',
        position: 'relative',
        color: theme.palette.common.white,
        textAlign: 'center',
        width: '100%'
      },
      titleText: {
        fontFamily: 'Segoe UI',
        fontSize: 36,
        textAlign: 'center',
        width: '100%',
        color: theme.palette.common.white,
        marginTop: '20px',
        zIndex: 1001

      }
    };
  });

export default MainScreen;
