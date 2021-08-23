import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  header: {
    backgroundColor: '#2B2243',
    width: '100%',
    height: '160px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '24px',
  },
  headerDescription: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '840px',
  },
  headerContent: {
    display: 'flex',
    gap: '36px',
    flexDirection: 'column',
  },

  link: {
    alignSelf: 'flex-start',
    width: 'auto',
    minWidth: '100px',
    height: '28px',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '14px',
    letterSpacing: '-2%',
    lineHeight: '17px',
    color: '#EEEAEA',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',

    textDecoration: 'none',
    '&:focus, &:hover, &:visited, &:link, &:active': {
      textDecoration: 'none',
    },
    ' &:hover': {
      textDecoration: 'underline',
    },
  },
}));
