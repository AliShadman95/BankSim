import axios from "axios";
import {
  GET_ACCOUNTS,
  ADD_ACCOUNT,
  ADD_ERROR,
  GET_BALANCE_ACCOUNT,
  RESET_ERRORS,
} from "./types";

export const getAccountsFromPerson = (personName) => async (dispatch) => {
  const response = await axios.get(
    `http://localhost:3005/account/list/person/${personName}`
  );

  dispatch({ type: GET_ACCOUNTS, payload: response.data });
};

export const getAccountsFromBank = (bankName) => async (dispatch) => {
  const response = await axios.get(
    `http://localhost:3005/account/list/bank/${bankName}`
  );

  dispatch({ type: GET_ACCOUNTS, payload: response.data });
};

export const getBalanceOfAccount = (accountNumber) => async (dispatch) => {
  const response = await axios.get(
    `http://localhost:3005/account/balance/${accountNumber}`
  );

  dispatch({ type: GET_BALANCE_ACCOUNT, payload: response.data });
};

export const createAccount = (bankName, personName) => async (dispatch) => {
  const response = await axios.post(
    `http://localhost:3005/account/${bankName}/${personName}`
  );

  if (response.data.error) {
    dispatch({ type: ADD_ERROR, payload: response.data });
  } else {
    dispatch({ type: RESET_ERRORS });
    dispatch({ type: ADD_ACCOUNT, payload: response.data });
  }
};
