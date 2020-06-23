import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import WifiTetheringRoundedIcon from '@material-ui/icons/WifiTetheringRounded';
import Container from '@material-ui/core/Container';

const text =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, deserunt Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, deserunt!';

const Reason = () => {
  const classes = useStyles()();

  return (
    <Container className={classes.wrapper}>
      <Typography className={classes.title} variant="h2">
        Why choose us?
      </Typography>
      <div className={classes.insideWrapper}>
        <div className={classes.container}>
          <WifiTetheringRoundedIcon className={classes.circle} />
          <Typography variant="h3" className={classes.inTitle}>
            Chooping Heads
          </Typography>
          <p className={classes.text}>{text}</p>
        </div>
        <div className={classes.container}>
          <WifiTetheringRoundedIcon className={classes.circle} />
          <Typography variant="h3" className={classes.inTitle}>
            Chooping Heads
          </Typography>
          <p className={classes.text}>{text}</p>
        </div>
        <div className={classes.container}>
          <WifiTetheringRoundedIcon className={classes.circle} />
          <Typography variant="h3" className={classes.inTitle}>
            Chooping Heads
          </Typography>
          <p className={classes.text}>{text}</p>
        </div>
        <div className={classes.container}>
          <WifiTetheringRoundedIcon className={classes.circle} />
          <Typography variant="h3" className={classes.inTitle}>
            Chooping Heads
          </Typography>
          <p className={classes.text}>{text}</p>
        </div>
        <div className={classes.container}>
          <WifiTetheringRoundedIcon className={classes.circle} />
          <Typography variant="h3" className={classes.inTitle}>
            Chooping Heads
          </Typography>
          <p className={classes.text}>{text}</p>
        </div>
        <div className={classes.container}>
          <WifiTetheringRoundedIcon className={classes.circle} />
          <Typography variant="h3" className={classes.inTitle}>
            Chooping Heads
          </Typography>
          <p className={classes.text}>{text}</p>
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
    },
    title: {
      color: theme.palette.common.black,
      fontSize: 40,
      fontWeight: 'bold',
      textAlign: 'center',
      width: '100%',
      margin: '50px auto',
    },
    container: {
      width: 360,
      height: 280,
      textAlign: 'left',
    },
    insideWrapper: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      textAlign: 'center',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    circle: {
      border: 'black 2px solid',
      borderRadius: '50%',
      fontSize: '75px',
    },
    inTitle: {
      fontSize: 26,
      fontWeight: 'bold',
    },
    text: {
      fontSize: 18,
    },
  }));

export default Reason;
