import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './redux';
import { loadState, saveState } from './sessionStorage';

const persistedState = loadState();

export default () => {
  const middlewares = [thunkMiddleware];

  const middlewareEnhancer = applyMiddleware(...middlewares);
  const enhancers = [middlewareEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);
  const store = createStore(rootReducer, persistedState, composedEnhancers);

  store.subscribe(() => {
    saveState({
      seats: store.getState().seats,
    });
  });

  return store;
};
