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
          <h3 className={classes.title}>Menu</h3>
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
          <h3 className={classes.title}>Services</h3>
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
              <EmailIcon fontSize="small" /> nurislam.ashirmatov@yandex.ru
            </li>
            <li className={classes.contacts}>
              <PhoneIcon fontSize="small" /> +8 613 249 72 0671
            </li>
          </ul>
          <FacebookIcon fontSize="small" /> <InstagramIcon fontSize="small" />
        </div>
      </Container>
    </footer>
  );
};

const useStyles = makeStyles((theme) => ({
  footer: {
    paddingTop: 75,
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
    width: 74,
    height: 55,
    boxSizing: 'border-box',
    backgroundSize: 'cover',
    position: 'relative',
    marginBottom: 65,
  },
  ftitle: {
    marginBottom: '79px',
    color: theme.palette.common.grey2,
    fontSize: 14,
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
    color: theme.palette.common.ultraLightGrey,
    position: 'relative',
    bottom: 62,
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
  },
}));

export default Header;
