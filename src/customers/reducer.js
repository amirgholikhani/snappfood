import produce from 'immer';
import {
  GET_CUSTOMERS,
  GET_CUSTOMERS_SUCCESS,
  GET_CUSTOMERS_FAILED,
} from './constants';

export const initialState = {
  customersList: [],
  customerDetail: {},
  count: 0,
  loading: false,
  error: '',
};

export const CustomersReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_CUSTOMERS:
        draft.loading = true;
        break;
      case GET_CUSTOMERS_SUCCESS:
        draft.customersList = action.data;
        draft.count = action.count;
        draft.loading = false;
        break;
      case GET_CUSTOMERS_FAILED:
        draft.error = action.error;
        draft.loading = false;
        break;
      default:
        break;
    }
  });
export default CustomersReducer;
