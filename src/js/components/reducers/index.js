import { combineReducers } from 'redux'

import adduser from './adduser';
import filteruser from './filteruser';
// import deleteuser from './deleteuser';

export default combineReducers({
  adduser,
  filteruser
//   deleteuser
});
