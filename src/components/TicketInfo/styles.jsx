import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  ticketInfo: {
    width: '100%',
    height: 'auto',
    backgroundColor: '#000',
    padding: '24px 12px',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
  action: {
    alignSelf: 'flex-end',
    alignContent: 'bottom',
  },
  movieName: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  typo: {
    fontWeight: 700,
    fontSize: '24px',
    lineHeight: '29px',
  },
}));
