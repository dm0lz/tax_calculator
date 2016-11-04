import {combineReducers} from 'redux';
import UserReducer from './reducer-users.js';
import ActiveUserReducer from './reducer-active-user.js';

const allReducers = combineReducers({
  users: UserReducer,
  activeUser: ActiveUserReducer
});

export default allReducers;
