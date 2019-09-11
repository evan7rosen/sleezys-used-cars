import { createStore, combineReducers, applyMiddleware } from "redux";
import carsReducer from "./cars/reducer";
import locationsReducer from "./locations/reducer";
import thunk from "redux-thunk";
import logger from "redux-logger";

const rootReducer = combineReducers({
  cars: carsReducer,
  locations: locationsReducer
});

const middleware = [thunk, logger];

export default createStore(rootReducer, applyMiddleware(...middleware));
