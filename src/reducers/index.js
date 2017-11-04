import { combineReducers } from 'redux';
import mainReducer from './mainReducer';

const reducers = {
  mainReducer
};
const combined = combineReducers(reducers);
module.exports = combined;
