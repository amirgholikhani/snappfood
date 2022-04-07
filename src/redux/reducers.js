/**
 * Combine all reducers in this file and export the combined reducers.
 */
import {connectRouter} from 'connected-react-router';
import history from '../utils/history';

import {combineReducers} from 'redux';

import CustomersReducer from '../customers/reducer';

export default combineReducers({
  customer: CustomersReducer,
  router: connectRouter(history),
});
