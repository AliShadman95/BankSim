import { combineReducers } from "redux";
import usersReducer from "./userReducer.js";

export default combineReducers({
  users: usersReducer
});
