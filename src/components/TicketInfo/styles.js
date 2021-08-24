import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  ticketInfo: {
    width: '100%',
    minHeight: '220px',
    backgroundColor: '#000',
    padding: '24px 12px',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
  action: {
    alignSelf: 'flex-end',
  },
  actionAdd: {
    alignSelf: 'flex-end',
    alignContent: 'bottom',
    marginTop: '64px',
  },
  movieName: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ticketsAmount: {
    minWidth: '150px',
    textAlign: 'end',
  },
}));
