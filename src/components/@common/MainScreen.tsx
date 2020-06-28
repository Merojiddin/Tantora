import React, { FC } from 'react';
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
      <Typography className={classes.titleText2} variant="h4">Keep in touch with all online exhibitions</Typography>
      <Search />
    </div>
  );
};

const useStyles = (props: IStyleProps) =>
  makeStyles((theme) => {
    return {
      wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        height: '90vh',
        width: '100%',
        minWidth: '700px', 
        background: `url(${props.bgSrc}) center no-repeat`,
        backgroundSize: 'cover',
        backgroundColor: '#13303F',
        padding: 0,
        marginBottom: 150,

        '&:before': {
          content: `' '`,
          position: 'absolute',
          height: '90vh',
          width: '100%',
          left: 0,
          top: 0,
          zIndex: 4,
          background: `rgba(0, 0, 0, 0.4)`,
        },
      },
      title: {
        fontSize: 120,
        fontFamily: 'Roboto',
        marginTop: 196,
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
        zIndex: 1001
      },
      titleText2: {
        fontFamily: 'Roboto',
        fontSize: 24,
        textAlign: 'center',
        width: '100%',
        color: theme.palette.common.white,
        marginTop: '12px',
        zIndex: 1001,
        marginBottom: 40,
      },
     
    };
  });

export default MainScreen;
