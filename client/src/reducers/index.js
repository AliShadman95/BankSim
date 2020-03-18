import { combineReducers } from "redux";
import personReducer from "./personReducer.js";
import bankReducer from "./bankReducer.js";
import accountReducer from "./accountReducer";

export default combineReducers({
  persons: personReducer,
  banks: bankReducer,
  accounts: accountReducer
});
