import { createStore, combineReducers, applyMiddleware } from "redux";

// import reporter from "./middleware/reporter.js";
import thunk from 'redux-thunk';
import petsReducer from "./reducers.js";

let reducers = combineReducers({
  pets: petsReducer
});

export default createStore(reducers, applyMiddleware(thunk))
