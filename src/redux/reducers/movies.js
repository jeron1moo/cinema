import produce from 'immer';
import {
  LOADING_MOVIES,
  LOAD_MOVIES_FAILURE,
  LOAD_MOVIES_SUCCESS,
} from '../constants/movies';

const initialState = {
  movies: [],
  isLoading: false,
  error: null,
};

export default produce((state, { type, payload }) => {
  switch (type) {
    case LOADING_MOVIES:
      state.loading = true;
      break;
    case LOAD_MOVIES_SUCCESS:
      state.movies = payload.movies;
      state.loading = false;
      state.error = null;
      break;
    case LOAD_MOVIES_FAILURE:
      state.loading = false;
      state.error = payload.error;
      break;
    default:
      break;
  }
}, initialState);
