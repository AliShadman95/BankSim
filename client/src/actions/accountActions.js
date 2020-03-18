import { GET_ACCOUNTS, ADD_ACCOUNT, ADD_ERROR } from "./types";
import axios from "axios";

export const getAccountsFromPerson = personName => async dispatch => {
  console.log("calling getAccountFromPerson");
  const response = await axios.get(
    `http://localhost:3005/account/list/person/${personName}`
  );
  console.log(response);
  dispatch({ type: GET_ACCOUNTS, payload: response.data });
};

export const createAccount = (bankName, personName) => async dispatch => {
  console.log("calling createAccount");
  const response = await axios.post(
    `http://localhost:3005/account/${bankName}/${personName}`
  );

  if (response.data.error) {
    dispatch({ type: ADD_ERROR, payload: response.data });
  } else {
    dispatch({ type: ADD_ACCOUNT, payload: response.data });
  }
};
