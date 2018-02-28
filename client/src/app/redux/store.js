import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import location from './reducers/location';

export default createStore(
    combineReducers({location}),
    {},
    applyMiddleware(createLogger(), thunk),
);