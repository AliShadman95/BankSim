import axios from "axios";
import {
  GET_ACCOUNTS,
  ADD_ACCOUNT,
  ADD_ERROR,
  GET_BALANCE_ACCOUNT,
  RESET_ERRORS,
  RESET_ACCOUNTS,
} from "./types";

export const getAccountsFromPerson = (personName) => async (dispatch) => {
  const response = await axios.get(
    `https://banksim.herokuapp.com/account/list/person/${personName}`
  );

  if (response.data.error) {
    dispatch({ type: ADD_ERROR, payload: response.data });
    dispatch({ type: RESET_ACCOUNTS });
  } else {
    dispatch({ type: RESET_ERRORS });
    dispatch({ type: GET_ACCOUNTS, payload: response.data.data });
  }
};

export const getAccountsFromBank = (bankName) => async (dispatch) => {
  const response = await axios.get(
    `https://banksim.herokuapp.com/account/list/bank/${bankName}`
  );

  if (response.data.error) {
    dispatch({ type: ADD_ERROR, payload: response.data });
    dispatch({ type: RESET_ACCOUNTS });
  } else {
    dispatch({ type: RESET_ERRORS });
    dispatch({ type: GET_ACCOUNTS, payload: response.data.data });
  }
};

export const getBalanceOfAccount = (accountNumber) => async (dispatch) => {
  const response = await axios.get(
    `https://banksim.herokuapp.com/account/balance/${accountNumber}`
  );

  dispatch({ type: GET_BALANCE_ACCOUNT, payload: response.data });
};

export const createAccount = (bankName, personName) => async (dispatch) => {
  const response = await axios.post(
    `https://banksim.herokuapp.com/account/${bankName}/${personName}`
  );

  if (response.data.error) {
    dispatch({ type: ADD_ERROR, payload: response.data });
  } else {
    dispatch({ type: RESET_ERRORS });
    dispatch({ type: ADD_ACCOUNT, payload: response.data });
  }
};
