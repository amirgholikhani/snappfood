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
export function* getBundles(actions) {
  try {
    const makeCustomersRequest = new GetCustomersBuilder()
      .params({ ...actions.payload, sort: 'created,desc' })
      .build();

    const client = new Client(token);
    const response = yield client.execute(makeCustomersRequest);

    yield put({
      type: GET_CUSTOMERS_SUCCESS,
      data: response.data,
      count: response.data.total,
    });
  } catch (error) {
    yield put({
      type: GET_CUSTOMERS_FAILED,
      error: error.message,
    });
    console.log(error.response);
  }
}

export default function* bundleSaga() {
  yield takeLatest(GET_CUSTOMERS, getBundles);
}
