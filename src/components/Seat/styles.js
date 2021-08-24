import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  seat: {
    borderRadius: '3px',
    width: '36px',
    height: '36px',
    backgroundColor: '#C4C4C4',
  },
  avaiable: {
    border: '3px solid #85FF91',
    '&:hover ': {
      backgroundColor: '#85FF91',
    },
  },
  checked: {
    border: '3px solid #FBC60A',
    '&:hover ': {
      backgroundColor: '#FBC60A',
    },
  },
  reserved: {
    border: '3px solid #FF0000',
    '&:hover ': {
      backgroundColor: '#FF0000',
    },
  },
}));
