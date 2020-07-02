import { CSSProperties } from '@material-ui/core/styles/withStyles';

// interface declaration merging to add custom mixins
declare module '@material-ui/core/styles/createMixins' {
  interface Mixins {
    container: CSSProperties;
    form: CSSProperties;
  }
}

declare module '@material-ui/core/styles/createPalette' {
  interface CommonColors {
    blue: string;
    grey: string;
    lightGrey: string;
    lighterGrey: string;
    black: string;
    green: string;
    whiteGrey: string;
    darkBlue: string;
    ultraLightGrey: string;
    ultraLightGrey2: string;
    grey2: string;
  }
}
