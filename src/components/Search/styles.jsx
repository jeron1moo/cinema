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
    borderRadius: '5px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'justify',
    borderTopRightRadius: '0',
    borderBottomRightRadius: '0',
    overflow: 'hidden',
  },
  search: {
    width: '100%',
    fontFamily: 'Montserrat',
    backgroundColor: '#EAEAEA',
    '& .MuiInputBase-root': {
      borderRadius: '5px 0px 0px 5px',
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
    borderRadius: '0px 5px 5px 0px',
  },
}));
