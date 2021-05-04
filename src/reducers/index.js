import { combineReducers } from 'redux';
import allReducers from "./allReducers";

export default combineReducers({
  state: allReducers
});