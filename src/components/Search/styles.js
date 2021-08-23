import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  '@global': {
    '.MuiInputLabel-outlined': {
      transform: 'translate(20px, 30px) scale(1)',
      zIndex: 1,
      fontFamily: 'Montserrat',
      fontWeight: '400',
      fontSize: '24px',
      lineHeight: '29px',
      color: '#000',
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
    '& .MuiInputLabel-outlined.MuiInputLabel-shrink': {
      display: 'none',
    },
  },
  search: {
    width: '100%',
    backgroundColor: '#EAEAEA',
    '& .MuiInputBase-root': {
      borderRadius: '5px 0px 0px 5px',
      height: '168px',
      fontFamily: 'Montserrat',
      fontWeight: '400',
      fontSize: '24px',
      lineHeight: '29px',
      color: '#000',
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
