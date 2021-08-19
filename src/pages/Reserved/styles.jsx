import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  reserved: {
    width: '100%',
    height: '100%',
    color: '#EEEAEA',
    background: theme.palette.background.main,
    padding: '36px 112px',
  },
  reservedTitle: {
    fontSize: '24px',
    lineHeight: '29px',
    marginBottom: '32px',
  },
}));
