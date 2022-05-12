import {combineReducers} from 'redux';
import authReducers from './authReducers';

const appReducer = combineReducers({
  auth: authReducers,
});

export default appReducer;
