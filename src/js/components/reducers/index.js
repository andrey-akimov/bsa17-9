import { combineReducers } from 'redux';

import addUser from './addUser';
import filterUser from './filterUser';
import deleteUser from './deleteUser';

export default combineReducers({
    addUser,
    filterUser,
    deleteUser
});
