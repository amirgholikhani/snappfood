import {
  GET_CUSTOMERS,
} from './constants';

export function getCustomersAction(payload: object) {
  return {
    type: GET_CUSTOMERS,
    payload,
  };
}
