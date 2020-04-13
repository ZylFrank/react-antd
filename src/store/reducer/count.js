import { COUNT_ADD, COUNT_MINUS } from '../actionTypes/count';

const countReducer = (state = 0, action) => {
  switch (action.type) {
    case COUNT_ADD:
      return state + 1;
    case COUNT_MINUS:
      return state - 1;
    default:
      return state;
  }
};

export default countReducer;
