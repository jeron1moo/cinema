import axios from 'axios';
import {
  LOADING_MOVIES,
  LOAD_MOVIES_FAILURE,
  LOAD_MOVIES_SUCCESS,
} from '../constants/movies';

const MOVIES_URL = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=`;
const MOVIE_URL = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&i=`;

const loading = () => ({
  type: LOADING_MOVIES,
});

const loadMoviesFailure = (error) => ({
  type: LOAD_MOVIES_FAILURE,
  payload: {
    error,
  },
});

const loadMovies = (movies) => ({
  type: LOAD_MOVIES_SUCCESS,
  payload: { movies },
});

export const getMovies = (name) => async (dispatch) => {
  try {
    dispatch(loading());

    const { data } = await axios.get(`${MOVIES_URL}${name}`);
    const ids = data.Search.map((movie) => movie.imdbID);
    const a = await ids.map(async (id) => {
      const { data: b } = await axios.get(`${MOVIE_URL}${id}`);
      return b;
    });
    const f = await Promise.all(a);
    dispatch(loadMovies(f));
  } catch (err) {
    dispatch(loadMoviesFailure(err.message));
  }
};

export const s = () => {};
