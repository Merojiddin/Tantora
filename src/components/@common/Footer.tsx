import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Logo from '../../assets/images/icon.png';
import CardMedia from '@material-ui/core/CardMedia';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';

const Header = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg" className={classes.root}>
        <div>
          <CardMedia image={Logo} className={classes.logo} />
          <Typography color="inherit" className={classes.ftitle}>
            &copy; {new Date().getFullYear()} 2020 Tantora. Allrights reserved.
          </Typography>
        </div>
        <div className={classes.menu}>
          <p className={classes.title}>Menu</p>
          <p className={classes.btn}>Home</p>
          <p className={classes.btn}>About</p>
          <p className={classes.btn}>Services</p>
          <p className={classes.btn}>News</p>
          <p className={classes.btn}>Gallery</p>
          <p className={classes.btn}>Contact</p>
        </div>
        <div className={classes.menu}>
          <p className={classes.title}>Services</p>
          <p className={classes.btn}>Virtual exhibition</p>
          <p className={classes.btn}>Online conference</p>
          <p className={classes.btn}>MarketPlace</p>
          <p className={classes.btn}>Traditional exhibition</p>
          <p className={classes.btn}>Lorem ipsum</p>
          <p className={classes.btn}>Dolor sit amet</p>
        </div>
        <div className={classes.contact}>
          <p className={classes.title}>CONTACT US</p>
          <p className={classes.btn}>
            <EmailIcon fontSize="small" /> nurislam.ashirmatov@yandex.ru
          </p>
          <p className={classes.btn}>
            <PhoneIcon fontSize="small" /> +8 613 249 72 0671
          </p>
          <FacebookIcon fontSize="small" /> <InstagramIcon fontSize="small" />
        </div>
      </Container>
    </footer>
  );
};

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.darkBlue,
  },
  root: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: theme.palette.common.darkBlue,
    color: theme.palette.common.white,
    padding: '0 25px',
    justifyContent: 'space-between',
  },
  logo: {
    width: 274,
    height: 180,
    boxSizing: 'border-box',
    backgroundSize: 'cover',
    position: 'relative',
    left: -82,
    marginBottom: 65,
  },
  ftitle: {
    marginBottom: '79px',
    color: theme.palette.common.grey2,
    fontSize: 14,
  },
  menu: {
    color: theme.palette.common.ultraLightGrey,
  },
  title: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  contact: {
    color: theme.palette.common.ultraLightGrey,
    position: 'relative',
    bottom: 53,
  },
  btn: {
    fontSize: 14,
  },
}));

export default Header;
