import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CardMedia from '@material-ui/core/CardMedia';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import Logo from '../../assets/images/icon.png';

const Header = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg" className={classes.root}>
        <div className={classes.logoContainer}>
          <CardMedia image={Logo} className={classes.logo} />
        </div>
        <div className={classes.menu}>
          <h3 className={classes.title}>MENU</h3>
          <ul>
            <li className={classes.btn}>Home</li>
            <li className={classes.btn}>About</li>
            <li className={classes.btn}>Services</li>
            <li className={classes.btn}>News</li>
            <li className={classes.btn}>Gallery</li>
            <li className={classes.btn}>Contact</li>
          </ul>
        </div>
        <div className={classes.menu}>
          <h3 className={classes.title}>SERVICES</h3>
          <ul>
            <li className={classes.btn}>Virtual exhibition</li>
            <li className={classes.btn}>Online conference</li>
            <li className={classes.btn}>Marketlilace</li>
            <li className={classes.btn}>Traditional exhibition</li>
            <li className={classes.btn}>Lorem ilisum</li>
            <li className={classes.btn}>Dolor sit amet</li>
          </ul>
        </div>
        <div className={classes.contact}>
          <h3 className={classes.title}>CONTACT US</h3>
          <ul>
            <li className={classes.contacts}>
              <EmailIcon fontSize="small" className={classes.icons} />{' '}
              nurislam.ashirmatov@yandex.ru
            </li>
            <li className={classes.contacts}>
              <PhoneIcon fontSize="small" className={classes.icons} /> +8 613
              249 72 0671
            </li>
          </ul>
          <div className={classes.icon}>
            <FacebookIcon fontSize="default" className={classes.faceInsta} />{' '}
            <InstagramIcon fontSize="default" className={classes.faceInsta} />
          </div>
        </div>

        <Typography color="inherit" className={classes.ftitle}>
          &copy; {new Date().getFullYear()} 2020 Tantora. Allrights reserved.
        </Typography>
      </Container>
    </footer>
  );
};

const useStyles = makeStyles((theme) => ({
  footer: {
    paddingTop: 55,
    paddingBottom: 59,
    backgroundColor: theme.palette.common.darkBlue,
    padding: 20,
    [theme.breakpoints.down('xs')]: {
      paddingBottom: 29,
    },
  },
  root: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    backgroundColor: theme.palette.common.darkBlue,
    color: theme.palette.common.white,
    padding: '0 25px',
    justifyContent: 'space-between',
    [theme.breakpoints.down('xs')]: {
      flexWrap: 'wrap',
    },
  },
  logoContainer: {
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  logo: {
    // 1.2375
    width: 99,
    height: 80,
    boxSizing: 'border-box',
    backgroundSize: 'cover',
    position: 'relative',
    marginBottom: 28,
    bottom: 44,
    margin: 'auto',
    [theme.breakpoints.down('xs')]: {
      margin: '0 108px 28px',
    },
  },
  ftitle: {
    color: theme.palette.common.grey2,
    fontSize: 14,
    width: '100%',
    marginLeft: 0,
    [theme.breakpoints.down('xs')]: {
      marginBottom: 0,
      margin: 'auto',
      textAlign: 'center',
    },
  },
  menu: {
    position: 'relative',
    color: theme.palette.common.ultraLightGrey2,
    bottom: 30,
  },
  title: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  contact: {
    color: theme.palette.common.ultraLightGrey2,
    position: 'relative',
    bottom: 47,
    width: 360,
    [theme.breakpoints.down('xs')]: {
      bottom: 0,
    },
  },
  btn: {
    fontSize: 14,
    listStyle: 'none',
    marginTop: 8,
  },
  contacts: {
    fontSize: 14,
    listStyle: 'none',
    display: 'flex',
    alignItems: 'center',
    marginTop: 8,
    color: theme.palette.common.ultraLightGrey2,
  },
  icon: {
    display: 'flex',
    margin: 'auto',
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 'auto',
    },
  },
  faceInsta: {
    marginTop: 25,
    border: `solid 1px ${theme.palette.common.ultraLightGrey2}`,
    padding: 3,
    borderRadius: '50%',
    [theme.breakpoints.down('xs')]: {
      marginTop: 20,
      padding: 5,
      alignItems: 'center',
      width: 33,
      height: 33,
      marginBottom: 22,
    },
  },
  icons: {
    padding: 3,
    borderRadius: '50%',
  },
}));

export default Header;
