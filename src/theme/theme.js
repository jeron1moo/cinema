import { createTheme } from '@material-ui/core';

const palette = {
  primary: {
    main: '#EAEAEA',
  },
  background: {
    main: '#2B2243',
    dark: ' #171515',
  },
};

const theme = createTheme({
  palette,
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          WebkitFontSmoothing: 'auto',
        },
        body: {
          backgroundColor: palette.background.dark,
        },
      },
    },
  },
});

export default theme;
