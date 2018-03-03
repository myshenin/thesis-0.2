import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import promise from "redux-promise-middleware";

import location from './reducers/location';
import tabs from "./reducers/tabs";
import periods from "./reducers/periods";
import weather from "./reducers/weather";

export default createStore(
    combineReducers({location, tabs, periods, weather}),
    {},
    applyMiddleware(createLogger(), thunk, promise()),
);