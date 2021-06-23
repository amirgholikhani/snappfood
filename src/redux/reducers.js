/**
 * Combine all reducers in this file and export the combined reducers.
 */

import {combineReducers} from 'redux';

import CustomerReducer from '../customers/reducer';

export default combineReducers({
  customer: CustomerReducer,
});
