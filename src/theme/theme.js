import { createTheme } from '@material-ui/core';

const theme = createTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          WebkitFontSmoothing: 'auto',
        },
        body: {
          backgroundColor: '#171515',
        },
      },
    },
  },
});

export default theme;
