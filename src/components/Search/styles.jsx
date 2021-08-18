import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  '@global': {
    '.MuiInputLabel-outlined': {
      transform: 'translate(20px, 35px) scale(1)',
      zIndex: 1,
      fontFamily: 'Montserrat',
    },
  },
  searchField: {
    width: '840px',
    height: '84px',
    backgroundColor: '#EAEAEA',
    borderRadius: '5px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'justify',
    borderTopRightRadius: '0',
    borderBottomRightRadius: '0',
  },
  search: {
    width: '100%',
    fontFamily: 'Montserrat',

    '& .MuiInputBase-root': {
      height: '168px',
      textAlign: 'center',
      fontFamily: 'Montserrat',
    },
  },
  button: {
    width: '168px',
    height: '84px',
    maxWidth: '168px',
    fontSize: '24px',
    borderTopLeftRadius: '0',
    borderBottomLeftRadius: '0',
  },
}));
