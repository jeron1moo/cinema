import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  button: {
    backgroundColor: '#2B2243',
    borderRadius: '5px',
    color: '#EEEAEA',
    width: '140px',
    minHeight: '48px',
    textTransform: 'none',
    '& .MuiButton-label': {
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: '14px',
      letterSpacing: '-2%',
      lineHeight: '17px',
    },
    '&:hover': {
      backgroundColor: '#FFFFFF',
      border: '3px solid #2B2243',
      color: '#2B2243',
    },
  },
  dark: {
    background: '#000000',
    color: '#FFFFFF',
    '&:hover': {
      border: '3px solid #FFFFFF',
    },
  },
}));
