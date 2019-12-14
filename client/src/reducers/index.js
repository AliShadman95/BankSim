import { combineReducers } from "redux";
import userReducer from "./userReducer.js";
import bankReducer from "./bankReducer.js";

export default combineReducers({
  users: userReducer,
  banks: bankReducer
});
