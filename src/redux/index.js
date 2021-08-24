import { combineReducers } from 'redux';
import movies from './reducers/movies';
import seats from './reducers/seats';

const rootReducer = combineReducers({
  movies,
  seats,
});

export default rootReducer;
