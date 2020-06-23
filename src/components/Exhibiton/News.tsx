import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

const text =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, necessitatibus beatae!';

const News = () => {
  const classes = useStyles()();

  return (
    <Container>
      <Typography variant="h2" className={classes.title}>
        News
      </Typography>
      <div className={classes.Container}>
        <div className={classes.innerContainer}>
          <div className={classes.img}>img place</div>
          <p className={classes.text}>{text}</p>
          <Button className={classes.button}>Read more</Button>
        </div>
        <div className={classes.innerContainer}>
          <div className={classes.img}>img place</div>
          <p className={classes.text}>{text}</p>
          <Button className={classes.button}>Read more</Button>
        </div>
        <div className={classes.innerContainer}>
          <div className={classes.img}>img place</div>
          <p className={classes.text}>{text}</p>
          <Button className={classes.button}>Read more</Button>
        </div>
        <div className={classes.innerContainer}>
          <div className={classes.img}>img place</div>
          <p className={classes.text}>{text}</p>
          <Button className={classes.button}>Read more</Button>
        </div>
      </div>
    </Container>
  );
};

const useStyles = () =>
  makeStyles((theme) => ({
    wrapper: {
      width: '100%',
      margin: '0 auto 100px',
      color: theme.palette.common.black,
      fontFamily: 'Roboto',
    },
    title: {
      textAlign: 'center',
    },
    Container: {
      textAlign: 'center',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginBottom: 100,
    },
    innerContainer: {
      textAlign: 'center',
      width: 240,
      margin: '30px 2% 50px',
      border: 'black 1px solid',
      padding: '5px',
    },
    text: {
      textAlign: 'left',
      fontSize: 18,
      width: '100%',
      lineHeight: 2,
    },
    img: {
      width: 200,
      height: 200,
      backgroundColor: 'grey',
      margin: '20px auto',
    },
    button: {
      border: 'none',
      backgroundColor: theme.palette.common.white,
      textAlign: 'right',
      fontSize: 14,
      marginLeft: 80,
    },
  }));

export default News;
