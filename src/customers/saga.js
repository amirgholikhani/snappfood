import { takeLatest, put } from 'redux-saga/effects';
import {
  GET_CUSTOMERS_FAILED,
  GET_CUSTOMERS_SUCCESS,
  GET_CUSTOMERS,
} from './constants';

import {
  GetCustomersBuilder,
} from '../Client/customers/customers';
import Client from '../Client/client';

const token = localStorage.getItem('token') || '';
export function* getCustomers(actions) {
  try {
    const makeCustomersRequest = new GetCustomersBuilder()
      .params({ ...actions.payload })
      .build();

    const client = new Client(token);
    const response = yield client.execute(makeCustomersRequest);

    console.log("response", response.data.data);

    yield put({
      type: GET_CUSTOMERS_SUCCESS,
      data: response.data.data.finalResult,
      count: response.data.data.count,
    });
  } catch (error) {
    yield put({
      type: GET_CUSTOMERS_FAILED,
      error: error.message,
    });
    console.log(error.response);
  }
}

export default function* customerSaga() {
  yield takeLatest(GET_CUSTOMERS, getCustomers);
}
