import React, { FC } from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

import { Exhibition } from 'generated/graphql';
import Loading from 'components/@common/Loading';

const GET_EXHIBITONS = gql`
  query {
    exhibitions(limit: 4) {
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
interface IStyleProps {
  bgSrc: string;
}

const Events: FC = () => {
  const classes = useStyles({ bgSrc: require('assets/images/event-bp.jpg') })();
  const { data, loading, error } = useQuery<IResponse>(GET_EXHIBITONS);

  if (error) {
    return (
      <Typography color="error">
        Error occured during fetching events: {error}!
      </Typography>
    );
  }

  return (
    <Container maxWidth="lg" className={classes.wrapper}>
      <Typography variant="h4" className={classes.title}>
        Up coming online exhibitions
      </Typography>
      {loading && <Loading />}
      <div className={classes.container}>
        {!loading &&
          data!.exhibitions.map(
            ({ exhibitionId, name, description, startDate }) => {
              const date = new Date(startDate!);
              const year = date.getFullYear();
              const month = date.getMonth() + 1;
              const day = date.getDate();

              return (
                <div className={classes.event} key={exhibitionId!}>
                  <Typography variant="h6" className={classes.eventTitle}>
                    {name}
                  </Typography>
                  <Typography className={classes.text} variant="subtitle2">
                    {description!.length < 150
                      ? description
                      : description!.slice(0, 250) + ' ...'}
                  </Typography>
                  <div className={classes.boxForDateBtn}>
                    <Typography variant="body2" className={classes.data}>
                      {`Date: ${year}/${month}/${day}`}
                    </Typography>
                    <Link to="/exhibition" key="Join">
                      <Button className={classes.joinBtn} variant="contained">
                        Join
                      </Button>
                    </Link>
                  </div>
                </div>
              );
            }
          )}
      </div>
    </Container>
  );
};

const useStyles = (props: IStyleProps) =>
  makeStyles((theme) => ({
    wrapper: {
      width: '100%',
      marginBottom: 150,
      padding: '0px 50px',
    },
    title: {
      textAlign: 'center',
      marginBottom: 80,
      fontWeight: 'bold',
      fontSize: 35,
      fontFamily: 'Roboto',
    },
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      width: `100%`,
    },
    event: {
      textAlign: 'left',
      width: '49%',
      height: '300',
      padding: '15px 30px',
      marginBottom: 25,
      backgroundColor: theme.palette.common.grey,
      borderRadius: 5,
      backgroundImage: `url(${props.bgSrc})`,
      backgroundSize: 'cover',
    },
    eventTitle: {
      fontFamily: 'Roboto',
      color: theme.palette.common.white,
      fontWeight: 'bolder',
    },
    text: {
      height: 150,
      fontSize: 18,
      fontFamily: 'Roboto',
      color: theme.palette.common.white,
      fontWeight: 'bolder',
    },
    boxForDateBtn: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
    },
    data: {
      fontSize: 22,
      fontWeight: 'bold',
      color: theme.palette.common.white,
    },
    joinBtn: {
      fontWeight: 'bolder',
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
      width: 97,
      height: 47,
    },
  }));

export default Events;
