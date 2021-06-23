import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import state from './initialState';
import createReducer from './reducers';
import rootSaga from './saga';

let composeEnhancers = compose;

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const enhancers = [applyMiddleware(...middlewares)];

export const store = createStore(
  createReducer,
  state,
  composeEnhancers(...enhancers)
);

sagaMiddleware.run(rootSaga);
