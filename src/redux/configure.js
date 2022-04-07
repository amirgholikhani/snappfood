import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import state from './initialState';
import createReducer from './reducers';
import rootSaga from './saga';

let reduxSagaMonitorOptions = {};
let composeEnhancers = compose;

//  Dev Tools once it supports redux-saga version 1.x.x
if (window.__SAGA_MONITOR_EXTENSION__) {
  reduxSagaMonitorOptions = {
    sagaMonitor: window.__SAGA_MONITOR_EXTENSION__,
  };
}

const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
const middlewares = [sagaMiddleware];
const enhancers = [applyMiddleware(...middlewares)];

export const store = createStore(
  createReducer,
  state,
  composeEnhancers(...enhancers)
);

sagaMiddleware.run(rootSaga);
