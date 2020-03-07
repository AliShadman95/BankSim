import { combineReducers } from "redux";
import personReducer from "./personReducer.js";
import bankReducer from "./bankReducer.js";

export default combineReducers({
  persons: personReducer,
  banks: bankReducer
});
