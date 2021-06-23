import {
  GET_CUSTOMERS,
  GET_CUSTOMERS_SUCCESS,
  GET_CUSTOMERS_FAILED,
} from './constants';

export const initialState = {
  customersList: [],
  customer: {},
  count: 0,
  loading: false,
  error: '',
};

export const CustomersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CUSTOMERS:
      state.loading = true;
      break;
    case GET_CUSTOMERS_SUCCESS:
      state.customersList = action.data;
      state.count = action.count;
      state.loading = false;
      break;
    case GET_CUSTOMERS_FAILED:
      state.error = action.error;
      state.loading = false;
      break;
    default:
      break;
  }
}
export default CustomersReducer;
