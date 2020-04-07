import axios from "axios";
import {
  ADD_TRANSACTION,
  GET_BALANCE_ACCOUNT,
  ADD_ERROR,
  RESET_ERRORS,
  GET_TRANSACTIONS,
} from "./types";

export const getTransactions = (accountNumber) => async (dispatch) => {
  const response = await axios.get(
    `http://localhost:3005/account/transactions/${accountNumber}`
  );
  if (response.data.error) {
    dispatch({ type: ADD_ERROR, payload: response.data });
  } else {
    dispatch({ type: RESET_ERRORS });
    dispatch({ type: GET_TRANSACTIONS, payload: response.data.data });
  }
};

export const depositMoney = (accountNumber, fee) => async (dispatch) => {
  const response = await axios.put(
    `http://localhost:3005/account/deposit/${accountNumber}/${fee}`
  );
  if (response.data.error) {
    dispatch({ type: ADD_ERROR, payload: response.data });
  } else {
    dispatch({ type: RESET_ERRORS });
    dispatch({
      type: ADD_TRANSACTION,
      payload: {
        TransactionTime: response.data.transaction[0].TransactionTime,
        Amount: response.data.transaction[0].Amount,
        Code: "deposit",
      },
    });
    dispatch({
      type: GET_BALANCE_ACCOUNT,
      payload: response.data.balance[0].balance,
    });
  }
};

export const withdrawMoney = (accountNumber, fee) => async (dispatch) => {
  const response = await axios.put(
    `http://localhost:3005/account/withdraw/${accountNumber}/${fee}`
  );
  if (response.data.error) {
    dispatch({ type: ADD_ERROR, payload: response.data });
  } else {
    dispatch({ type: RESET_ERRORS });
    dispatch({
      type: ADD_TRANSACTION,
      payload: {
        TransactionTime: response.data.transaction[0].TransactionTime,
        Amount: response.data.transaction[0].Amount,
        Code: "withdraw",
      },
    });
    dispatch({
      type: GET_BALANCE_ACCOUNT,
      payload: response.data.balance[0].balance,
    });
  }
};
export const transferMoney = (accountFrom, accountTo, fee) => async (
  dispatch
) => {
  const response = await axios.put(
    `http://localhost:3005/account/transfer/${accountFrom}/${accountTo}/${fee}`
  );
  if (response.data.error) {
    dispatch({ type: ADD_ERROR, payload: response.data });
  } else {
    dispatch({ type: RESET_ERRORS });
    dispatch({
      type: ADD_TRANSACTION,
      payload: {
        TransactionTime: response.data.transaction[0].TransactionTime,
        Amount: response.data.transaction[0].Amount,
        Code: "transfer",
      },
    });
    dispatch({
      type: GET_BALANCE_ACCOUNT,
      payload: response.data.balance[1].balance,
    });
  }
};
