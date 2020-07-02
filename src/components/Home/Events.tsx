// import React, { FC } from 'react';
// import { gql } from 'apollo-boost';
// import { useQuery } from '@apollo/react-hooks';
// import { makeStyles } from '@material-ui/core';
// import Container from '@material-ui/core/Container';
// import Typography from '@material-ui/core/Typography';
// import hexToRgb from 'hex-rgb';

// import { Exhibition } from 'generated/graphql';
// import Loading from 'components/@common/Loading';

// const GET_EXHIBITONS = gql`
//   query {
//     exhibitions(limit: 4) {
//       exhibitionId
//       name
//       description
//       startDate
//     }
//   }
// `;

// interface IResponse {
//   exhibitions: Exhibition[];
// }
// interface IStyleProps {
//   bgSrc: string;
// }

// const text =
//   'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam a dolorum suscipit velit nobis sunt aspernatur, vero quia! Corporis facilis maxime praesentium cupiditate sint assumenda modi saepe mollitia incidunt soluta?';

// const Events: FC = () => {
//   const classes = useStyles({
//     bgSrc: require('assets/images/homeEventBg.jpg'),
//   })();
//   const { data, loading, error } = useQuery<IResponse>(GET_EXHIBITONS);

//   if (error) {
//     return (
//       <Typography color="error">
//         Error occured during fetching events: {error}!
//       </Typography>
//     );
//   }

//   return (
//     <Container maxWidth="lg" className={classes.wrapper}>
//       <Typography variant="h4" className={classes.title}>
//         Up coming online exhibitions
//       </Typography>
//       {loading && <Loading />}
//       <div className={classes.container}>
//         {!loading &&
//           data!.exhibitions.map(
//             ({ exhibitionId, name, description, startDate }) => {
//               const date = new Date(startDate!);
//               const year = date.getFullYear();
//               const month = date.getMonth() + 1;
//               const day = date.getDate();

//               return (
//                 <div className={classes.event} key={exhibitionId!}>
//                   <Typography variant="body2" className={classes.data}>
//                     {`Date: ${year}/${month}/${day}`}
//                   </Typography>
//                   <Typography variant="h6" className={classes.eventTitle}>
//                     {name}
//                   </Typography>
//                   <Typography className={classes.text} variant="subtitle2">
//                     {description!.length < 150
//                       ? description
//                       : description!.slice(0, 250) + ' ...'}{' '}
//                     {text}
//                   </Typography>
//                   <div className={classes.boxForDateBtn} />
//                 </div>
//               );
//             }
//           )}
//       </div>
//     </Container>
//   );
// };

// const useStyles = (props: IStyleProps) =>
//   makeStyles((theme) => {
//     const black = hexToRgb(theme.palette.common.black);

//     return {
//       wrapper: {
//         width: '100%',
//         marginBottom: 150,
//         padding: '0px 50px',
//       },
//       title: {
//         textAlign: 'center',
//         fontSize: 42,
//         fontFamily: 'Roboto',
//         fontWeight: 'bold',
//         marginBottom: 10,
//       },
//       container: {
//         display: 'flex',
//         justifyContent: 'center',
//         flexWrap: 'wrap',
//         width: `100%`,
//         opacity: '80%',
//         borderRadius: 16,
//         scale: 'Fill',
//       },
//       event: {
//         textAlign: 'left',
//         width: '580px',
//         height: '248px',
//         padding: '15px 30px',
//         boxShadow: `0px 4px 16px rgba(${black.red}, ${black.green}, ${black.blue} 0.1)`,
//         color: theme.palette.common.black,
//         opacity: 0.1,
//         marginBottom: 25,
//         borderRadius: 10,
//         backgroundImage: `url(${props.bgSrc})`,
//         backgroundSize: ' 372px 248px',
//         backgroundRepeat: 'no-repeat',
//         backgroundPosition: 'right',
//         justifyContent: 'center',
//         '&:before': {
//           content: ' ',
//           width: '100%',
//           height: '100%',
//           position: 'absolute',
//           zIndex: 250,
//           top: 0,
//           left: 0,
//           background:
//             'linear-gradient(red 0%, orange 25%, yellow 50%, green 75%, blue 100%)',
//         },
//       },
//       eventTitle: {
//         fontFamily: 'Roboto',
//         color: theme.palette.common.black,
//         fontWeight: 'bolder',
//         fontSize: 18,
//         letterSpacing: '-1.5%',
//       },
//       text: {
//         height: 150,
//         fontSize: 16,
//         fontFamily: 'Roboto',
//         color: theme.palette.common.black,
//         fontWeight: 'bolder',
//         fontStyle: 'light',
//         width: '356px',
//       },
//       boxForDateBtn: {
//         display: 'flex',
//         alignItems: 'flex-end',
//         justifyContent: 'space-between',
//       },
//       data: {
//         fontSize: 14,
//         color: theme.palette.common.lighterGrey,
//         letterSpacing: '-1.5%',
//         fontFamily: 'Roboto',
//         marginBottom: 17,
//       },
//       joinBtn: {
//         fontWeight: 'bolder',
//         backgroundColor: theme.palette.primary.main,
//         color: theme.palette.common.white,
//         width: 97,
//         height: 47,
//       },
//       hrLine: {
//         marginBottom: '50',
//       },
//     };
//   });

// export default Events;
import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import hexToRgb from 'hex-rgb';



interface IStyleProps {
  bgSrc: string;
}

const text =
  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam a dolorum suscipit velit nobis sunt aspernatur, vero quia! Corporis facili';

  
const exhibitions = [
  {
    exhibitionId: 1,
    name: "Rxhibition",
    description: text,
    startDate: '1998.05.31'
    
  },
  {
    exhibitionId: 2,
    name: "Rxhibition",
    description: text,
    startDate: '1998.05.31'
    
  },
  {
    exhibitionId: 3,
    name: "Rxhibition",
    description: text,
    startDate: '1998.05.31'
    
  },
  {
    exhibitionId: 4,
    name: "Rxhibition",
    description: text,
    startDate: '1998.05.31'
    
  }
]
const Events: FC = () => {
  const classes = useStyles({
    bgSrc: require('assets/images/homeEventBg.jpg'),
  })();



  return (
    <Container maxWidth="lg" className={classes.wrapper}>
      <Typography variant="h4" className={classes.title}>
        Up coming online exhibitions
      </Typography>
      <div className={classes.container}>
        {exhibitions.map(
            (index) => {
              return (
                <div className={classes.event} key={index.exhibitionId!}>
                  <Typography variant="body2" className={classes.data}>
                   {index.startDate}
                  </Typography>
                  <Typography variant="h6" className={classes.eventTitle}>
                    {index.name}
                  </Typography>
                  <Typography className={classes.text} variant="subtitle2">
                    {index.description!.length < 150
                      ? index.description
                      : index.description!.slice(0, 250) + ' ...'}{' '}
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

    return {
      wrapper: {
        width: '100%',
        marginBottom: 150,
        padding: '0px 50px',
      },
      title: {
        textAlign: 'center',
        fontSize: 42,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        marginBottom: 10,
      },
      container: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        width: `100%`,
        //opacity: '80%',
        borderRadius: 16,
        scale: 'Fill',
      },
      event: {
        position: 'relative',
        textAlign: 'left',
        width: '580px',
        height: '248px',
        padding: '15px 30px',
        boxShadow: `0px 4px 16px rgba(${black.red}, ${black.green}, ${black.blue} 0.1)`,
        color: theme.palette.common.black,
        marginBottom: 25,
        borderRadius: 10,
        backgroundImage: `url(${props.bgSrc})`,
        backgroundSize: ' 372px 248px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right',
        justifyContent: 'center',
        zIndex: 10,
        '&:before': {
          content: `' '`,
          width: '100%',
          height: '100%',
          position: 'absolute',
          zIndex: -1,
          top: 0,
          left: 0,
          background: 'linear-gradient(96.76deg, #FFFFFF 60.4%, rgba(255, 255, 255, 0) 97.59%)',
        },
      },
      eventTitle: {
        fontFamily: 'Roboto',
        color: theme.palette.common.black,
        fontWeight: 'bolder',
        fontSize: 18,
        letterSpacing: '-1.5%',
      },
      text: {
        height: 150,
        fontSize: 16,
        fontFamily: 'Roboto',
        color: theme.palette.common.black,
        fontWeight: 300,
        fontStyle: 'light',
        width: '356px',
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

