import {
  ADD_TRANSACTION,
  GET_BALANCE_ACCOUNT,
  ADD_ERROR,
  RESET_ERRORS
} from "./types";
import axios from "axios";

export const depositMoney = (accountNumber, fee) => async dispatch => {
  console.log("calling depositMoneey");
  const response = await axios.put(
    `http://localhost:3005/account/deposit/${accountNumber}/${fee}`
  );
  console.log(response);
  if (response.data.error) {
    dispatch({ type: ADD_ERROR, payload: response.data });
  } else {
    dispatch({ type: RESET_ERRORS });
    dispatch({ type: ADD_TRANSACTION, payload: response.data });
    dispatch({
      type: GET_BALANCE_ACCOUNT,
      payload: response.data.balance[0].balance
    });
  }
};

export const withdrawMoney = (accountNumber, fee) => async dispatch => {
  console.log("calling withdraw");
  const response = await axios.put(
    `http://localhost:3005/account/withdraw/${accountNumber}/${fee}`
  );
  console.log(response);
  if (response.data.error) {
    dispatch({ type: ADD_ERROR, payload: response.data });
  } else {
    dispatch({ type: RESET_ERRORS });
    dispatch({ type: ADD_TRANSACTION, payload: response.data });
    dispatch({
      type: GET_BALANCE_ACCOUNT,
      payload: response.data.balance[0].balance
    });
  }
};
export const transferMoney = (
  accountFrom,
  accountTo,
  fee
) => async dispatch => {
  console.log("calling transfer");
  const response = await axios.put(
    `http://localhost:3005/account/transfer/${accountFrom}/${accountTo}/${fee}`
  );
  console.log(response);
  if (response.data.error) {
    dispatch({ type: ADD_ERROR, payload: response.data });
  } else {
    dispatch({ type: RESET_ERRORS });
    dispatch({ type: ADD_TRANSACTION, payload: response.data });
    dispatch({
      type: GET_BALANCE_ACCOUNT,
      payload: response.data.balance[1].balance
    });
  }
};
