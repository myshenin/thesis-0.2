import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import location from './reducers/location';
import tabs from "./reducers/tabs";
import periods from "./reducers/periods";

export default createStore(
    combineReducers({location, tabs, periods}),
    {},
    applyMiddleware(createLogger(), thunk),
);