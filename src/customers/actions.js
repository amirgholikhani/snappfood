import {
  GET_CUSTOMERS,
} from './constants';

export function getCustomersAction(payload) {
  return {
    type: GET_CUSTOMERS,
    payload,
  };
}
