import React, { FC } from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Exhibition } from 'generated/graphql';
import ExhibitorsIcon from '@material-ui/icons/Business';
import ListItemText from '@material-ui/core/ListItemText';
import VisitorsIcon from '@material-ui/icons/Group';
import LanguageIcon from '@material-ui/icons/Public';
import SpeakerIcon from '@material-ui/icons/RecordVoiceOver';
import ProductIcon from '@material-ui/icons/CardGiftcard';

import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

const GET_EXHIBITONS = gql`
  query {
    exhibition(id: "5") {
      exhibitionId
      name
      description
      startDate
    }
  }
`;

interface IResponse {
  exhibitions: Exhibition[];
}

const Event: FC = () => {
  const classes = useStyles()();
  const { error } = useQuery<IResponse>(GET_EXHIBITONS);

  if (error) {
    return (
      <Typography color="error">
        Error occured during fetching events: {error}!
      </Typography>
    );
  }

  return (
    <Container className={classes.wrapper}>
      <Typography variant="h2" className={classes.title}>
        About Exhibitions
      </Typography>
      <Typography className={classes.text}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius ducimus
        natus facere consectetur nostrum. Repellat autem omnis quae cum! Eos
        neque esse consequatur alias quasi odio recusandae cupiditate! Fugit
        doloremque impedit quibusdam facilis corrupti, totam tenetur omnis
        sapiente magni aliquid! Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Eius ducimus natus facere consectetur nostrum.
        Repellat autem omnis quae cum! Eos neque esse consequatur alias quasi
        odio recusandae cupiditate! Fugit doloremque impedit quibusdam facilis
        corrupti, totam tenetur omnis sapiente magni aliquid! Lorem ipsum, dolor
        sit amet consectetur adipisicing elit. Eius ducimus natus facere
        consectetur nostrum. Repellat autem omnis quae cum! Eos neque esse
        consequatur alias quasi odio recusandae cupiditate! Fugit doloremque
        impedit quibusdam facilis corrupti, totam tenetur omnis sapiente magni
        aliquid!
      </Typography>

      <div className={classes.root}>
        <Button variant="contained" color="primary" className={classes.buttons}>
          <ListItemText>
            <ExhibitorsIcon className={classes.icon} />
          </ListItemText>
          100+
        </Button>
        <Button variant="contained" color="primary" className={classes.buttons}>
          <ListItemText>
            <ProductIcon className={classes.icon} />
          </ListItemText>
          2000+
        </Button>
        <Button variant="contained" color="primary" className={classes.buttons}>
          <ListItemText>
            <VisitorsIcon className={classes.icon} />
          </ListItemText>
          50000+
        </Button>
        <Button variant="contained" color="primary" className={classes.buttons}>
          <ListItemText>
            <SpeakerIcon className={classes.icon} />
          </ListItemText>
          20+
        </Button>
        <Button variant="contained" color="primary" className={classes.buttons}>
          <ListItemText>
            <LanguageIcon className={classes.icon} />
          </ListItemText>
          Chinese
        </Button>
      </div>
    </Container>
  );
};

const useStyles = () =>
  makeStyles((theme) => ({
    wrapper: {
      width: '100%',
      marginBottom: 100,
    },
    title: {
      fontSize: '40px',
      fontWeight: 'bold',
      color: theme.palette.common.black,
      textAlign: 'center',
    },
    text: {
      marginTop: 20,
      fontSize: 24,
      fontFamily: 'Roboto',
    },
    root: {
      width: '100%',
      textAlign: 'center',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    buttons: {
      color: theme.palette.common.white,
      fontSize: 48,
      display: 'inline-flex',
      width: 300,
      margin: 50,
      backgroundColor: theme.palette.common.grey,
    },
    icon: {
      fontSize: '46px',
      marginRight: '10px',
      width: 76,
    },
  }));

export default Event;
