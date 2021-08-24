import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  table: {
    marginBottom: '80px',
  },
  tableCell: {
    padding: '8px',
    '&:nth-child(1)': {
      paddingLeft: '4px',
    },
    '&:nth-child(12)': {
      paddingRight: '4px',
    },
    border: 0,
  },
}));
