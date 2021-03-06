import { createSelector } from 'reselect';
import { initialState } from './reducer';

const select = (state) => state.customer ||  initialState;

const makeSelectCustomersList = () =>
  createSelector(select, substate => substate.customersList);

const makeSelectCustomer = () =>
  createSelector(select, substate => substate.customerDetail);

const makeSelectCountList = () =>
  createSelector(select, substate => substate.count);

const makeSelectLoading = () =>
  createSelector(select, substate => substate.loading);

const makeSelectError = () =>
  createSelector(select, substate => substate.error);

export default select;
export {
  makeSelectCustomersList,
  makeSelectCustomer,
  makeSelectLoading,
  makeSelectCountList,
  makeSelectError,
};
