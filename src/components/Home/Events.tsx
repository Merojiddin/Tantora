import React, { FC } from 'react';
import { gql } from 'apollo-boost';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@apollo/react-hooks';
import { makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import hexToRgb from 'hex-rgb';

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

const text =
  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam a dolorum suscipit velit nobis sunt aspernatur, vero quia! Corporis facilis maxime praesentium cupiditate sint assumenda modi saepe mollitia incidunt soluta?';

const Events: FC = () => {
  const [t] = useTranslation('home');
  const { data, loading, error } = useQuery<IResponse>(GET_EXHIBITONS);
  const classes = useStyles({
    bgSrc: require('assets/images/homeEventBg.jpg'),
  })();

  if (error) {
    return (
      <Typography color="error">
        Error occured during fetching events: {error.message}!
      </Typography>
    );
  }

  return (
    <Container maxWidth="lg" className={classes.wrapper}>
      <Typography variant="h4" className={classes.title}>
        {t('exhibitions.title')}
      </Typography>
      {loading && <Loading />}
      <div className={classes.container}>
        {!loading &&
          data?.exhibitions.map(
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
                  <Typography variant="h2" className={classes.eventTitle}>
                    {name}
                  </Typography>
                  <Typography className={classes.text} variant="subtitle2">
                    {description!.length < 150
                      ? description
                      : description!.slice(0, 250) + ' ...'}{' '}
                    {text}
                  </Typography>
                  <div className={classes.boxForDateBtn} />
                </div>
              );
            }
          )}
      </div>
    </Container>
  );
};

const useStyles = (props: IStyleProps) =>
  makeStyles((theme) => {
    const black = hexToRgb(theme.palette.common.black);
    const white = hexToRgb(theme.palette.common.white);

    return {
      wrapper: {
        ...theme.mixins.sectionPaddings,
        width: '100%',
        marginTop: -60,
        paddingLeft: 24,
        paddingRight: 24,
        [theme.breakpoints.down('xs')]: {
          margin: '0px',
          padding: '0px 20px',
        },
      },
      title: {
        textAlign: 'center',
        fontSize: 42,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        marginBottom: 58,
        [theme.breakpoints.down('xs')]: {
          fontSize: 32,
          lineHeight: '37px',
        },
      },
      container: {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        width: `100%`,
        borderRadius: 16,
      },
      event: {
        position: 'relative',
        justifyContent: 'center',
        textAlign: 'left',
        width: 'calc(50% - 12.5px)',
        minHeight: '248px',
        padding: '15px 30px',
        marginBottom: 25,
        boxShadow: `0px 4px 16px rgba(${black.red}, ${black.green}, ${black.blue}, 0.2)`,
        color: theme.palette.common.black,
        borderRadius: 10,
        backgroundImage: `url(${props.bgSrc})`,
        backgroundSize: ' 372px 248px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right',
        overflow: 'hidden',
        zIndex: 10,
        '&:before': {
          content: `' '`,
          width: '100%',
          height: '100%',
          position: 'absolute',
          zIndex: -1,
          top: 0,
          left: 0,
          background: `linear-gradient(96.76deg, ${theme.palette.common.white} 60.4%, rgba(${white.red},${white.green},${white.blue}, 0) 97.59%)`,
          [theme.breakpoints.down('sm')]: {
            background: `linear-gradient(96.76deg, ${theme.palette.common.white} 20.4%, rgba(${white.red},${white.green},${white.blue}, 0) 97.59%)`,
          },
        },
        [theme.breakpoints.down('xs')]: {
          width: '100%',
          height: 275,
          marginRight: 0,
          backgroundSize: ' 400px 275px',
        },
      },
      eventTitle: {
        fontFamily: 'Roboto',
        color: theme.palette.common.black,
        fontWeight: 'bolder',
        fontSize: 18,

        [theme.breakpoints.down('xs')]: {
          fontSize: 20,
          lineHeight: '23px',
          margin: 0,
          marginBottom: 10,
        },
      },
      text: {
        height: 150,
        fontSize: 16,
        fontFamily: 'Roboto',
        color: theme.palette.common.black,
        fontWeight: 300,
        fontStyle: 'light',
        width: '356px',
        [theme.breakpoints.down('xs')]: {
          width: 285,
          height: 143,
        },
      },
      boxForDateBtn: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
      },
      data: {
        fontSize: 14,
        color: theme.palette.common.lighterGrey,
        letterSpacing: '-1.5%',
        fontFamily: 'Roboto',
        marginBottom: 17,
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
      },
    };
  });

export default Events;
