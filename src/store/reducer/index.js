import { combineReducers } from 'redux';
import countReducer from './count';

const reduces = combineReducers({
  countReducer,
});

export default reduces;
