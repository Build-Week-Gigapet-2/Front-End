import { combineReducers } from 'redux';
import userReducer from './userReducer';
import authReducer from './auth';
import foodReducer from './foodReducer';


export default combineReducers({
    userReducer,
    authReducer,
    foodReducer,
})