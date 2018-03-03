import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import location from './reducers/location';
import tabs from "./reducers/tabs";

export default createStore(
    combineReducers({location, tabs}),
    {},
    applyMiddleware(createLogger(), thunk),
);