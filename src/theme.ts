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
  mixins: {
    ...theme.mixins,
    container: {
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
