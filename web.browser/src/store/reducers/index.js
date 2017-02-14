import { combineReducers } from 'redux';
import postsReducer from './posts';
import weeksReducer from './weeks';
import loginReducer from './login';
import fetchReducer from './fetching';

export default combineReducers({
  posts: postsReducer,
  weeks: weeksReducer, 
  loadingResource: fetchReducer, 
  loggedIn: loginReducer,
});
