import React, { FC } from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import ColoredLine from '../@common/HrLine'

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
const text = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam a dolorum suscipit velit nobis sunt aspernatur, vero quia! Corporis facilis maxime praesentium cupiditate sint assumenda modi saepe mollitia incidunt soluta?'
interface IResponse {
  exhibitions: Exhibition[];
}
interface IStyleProps {
  bgSrc: string;
}

const Events: FC = () => {
  const classes = useStyles({ bgSrc: require('assets/images/download.jpg') })();
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
        <strong>Up coming</strong> online exhibitions
      </Typography>
      <ColoredLine color="#00D1FF" width="269px" margin="auto auto 50px" right="190px" height="6px" />
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
                  <Typography variant="body2" className={classes.data}>
                      {`Date: ${year}/${month}/${day}`}
                    </Typography>
                  <Typography variant="h6" className={classes.eventTitle}>
                    {name}
                  </Typography>
                  <ColoredLine color="#00D1FF" width="105px" margin="" right="190px"  height="2px"/>
                  <Typography className={classes.text} variant="subtitle2">
                    {description!.length < 150
                      ? description
                      : description!.slice(0, 250) + ' ...'} {text}
                  </Typography>
                  <div className={classes.boxForDateBtn}>
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
      fontSize: 48,
      fontFamily: 'Segoe UI',
    },
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      width: `100%`,
      opacity: '80%',
      borderRadius: 16,
      scale: 'Fill'
    },
    event: {
      textAlign: 'left',
      width: '555px',
      height: '225px',
      padding: '15px 30px',
      boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.1)',
      color: '#rgba(0, 0, 0, 0.1)',
      marginBottom: 25,
      backgroundColor: theme.palette.common.white,
      borderRadius: 16,
      backgroundImage: `url(${props.bgSrc})`,
      backgroundSize: 'cover',
    },
    eventTitle: {
      fontFamily: 'Segoe UI',
      color: theme.palette.common.black,
      fontWeight: 'bolder',
      fontSize: 18,
      letterSpacing: '-1.5%',

    },
    text: {
      height: 150,
      fontSize: 16,
      fontFamily: 'Segoe UI',
      color: theme.palette.common.black,
      fontWeight: 'bolder',
    },
    boxForDateBtn: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
    },
    data: {
      fontSize: 14,
      color: '#929292',
      letterSpacing: '-1.5%',
      fontFamily: 'Segoe UI'
    },
    joinBtn: {
      fontWeight: 'bolder',
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
      width: 97,
      height: 47,
    },
    hrLine: {
      marginBottom: '50',
    }
  }));

export default Events;
