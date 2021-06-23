// combines all saga
import {all} from 'redux-saga/effects';
import customerSaga from '../customers/saga';

export default function* rootSaga() {
  yield all([
    customerSaga(),
  ]);
}
