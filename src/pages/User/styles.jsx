import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  user: {
    width: '100%',
    backgroundColor: theme.palette.background.main,
    padding: '36px 112px',
  },
  userTitle: {
    fontWeight: 700,
    fontSize: '24px',
    lineHeight: '29px',
    marginBottom: '44px',
  },
  userSelect: {
    width: '608px',
  },
  ticketsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    marginBottom: '16px',
  },
}));
