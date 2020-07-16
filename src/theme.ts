import { createMuiTheme } from '@material-ui/core';
import indigo from '@material-ui/core/colors/indigo';
import blueGrey from '@material-ui/core/colors/blueGrey';

let theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: blueGrey,
    common: {
      white: '#fff',
      blue: '#1B70BE',
      grey: '#757575',
      lightGrey: '#EFF4F8',
      lighterGrey: '#858585',
      ultraLightGrey: '#BCCFE1',
      ultraLightGrey2: '#8A9CAD',
      ultraLightGrey3: '#C5C5C5',
      roundGrey: '#DCE8F2',
      grey2: '#97A4AF',
      black: '#000000',
      green: '#1BBE61',
      whiteGrey: '#E3E8ED',
      darkBlue: '#212D37',
    },
  },
});

theme = {
  ...theme,
  breakpoints: {
    ...theme.breakpoints,
    values: {
      xs: 480,
      sm: 600,
      md: 960,
      lg: 1180,
      xl: 1920,
    },
  },
  mixins: {
    ...theme.mixins,
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      maxWidth: 1180,
      margin: '0 auto',
      [theme.breakpoints.down('md')]: {
        padding: '0 50px',
      },
      [theme.breakpoints.down('sm')]: {
        padding: '0 40px',
      },
      [theme.breakpoints.down('xs')]: {
        padding: '0 30px',
      },
    },
    sectionPaddings: {
      padding: '111px 0',
      [theme.breakpoints.down('md')]: {
        padding: '111px 50px',
      },
      [theme.breakpoints.down('sm')]: {
        padding: '111px 40px',
      },
      [theme.breakpoints.down('xs')]: {
        padding: '111px 30px',
      },
    },
    fullPageContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: 'calc(100vh - 64px)',
      padding: '150px 0',
    },
    form: {
      width: '100%',
      maxWidth: '400px',
      padding: '25px 50px',
      border: `1px solid ${theme.palette.divider}`,
      borderRadius: 5,
    },
  },
};

export default theme;
