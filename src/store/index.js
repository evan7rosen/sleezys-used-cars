import { createStore, combineReducers, applyMiddleware } from "redux";
import carsReducer from "./cars/reducer";
import locationsReducer from "./locations/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  cars: carsReducer,
  locations: locationsReducer
});

const middleware = [thunk];

export default createStore(rootReducer, applyMiddleware(...middleware));
