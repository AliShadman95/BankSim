import { combineReducers } from "redux";
import personReducer from "./personReducer.js";
import bankReducer from "./bankReducer.js";
import accountReducer from "./accountReducer";
import errorReducer from "./errorReducer";
import transactionReducer from "./transactionReducer";

export default combineReducers({
  persons: personReducer,
  banks: bankReducer,
  accounts: accountReducer,
  errors: errorReducer,
  transactions: transactionReducer
});
