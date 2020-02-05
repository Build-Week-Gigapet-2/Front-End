import { combineReducers } from 'redux';
import userReducer from './userReducer';
import authReducer from './auth';
import foodReducer from './foodReducer';
import childReducer from './childReducer';

export default combineReducers({
    userReducer,
    authReducer,
    foodReducer,
    childReducer,
})