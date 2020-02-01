import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../Reducers';

// Put middleware into an array, stored into variable
const middleware = [thunk, logger]

export default createStore(rootReducer, applyMiddleware(...middleware))
// Spread the combined middleware into applymiddleware