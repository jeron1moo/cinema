import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  movies: {
    paddingTop: '60px',
  },
  moviesList: {
    paddingTop: '48px',
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
  },
  nothingFound: {
    fontWeight: 'bold',
    fontSize: '24px',
    lineHeight: '29px',
  },
}));
