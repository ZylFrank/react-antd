import { COUNT_ADD, COUNT_MINUS } from '../actionTypes/count';

export const countAdd = (params) => ({
  type: COUNT_ADD,
  payload: {
    ...params,
  },
});

export const countMinus = (params) => ({
  type: COUNT_MINUS,
  payload: {
    ...params,
  },
});
