import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

export default createStore(
    combineReducers({}),
    {},
    applyMiddleware(createLogger(), thunk),
);