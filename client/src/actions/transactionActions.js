import { ADD_TRANSACTION, GET_BALANCE_ACCOUNT } from "./types";
import axios from "axios";

export const depositMoney = (accountNumber, fee) => async dispatch => {
  console.log("calling depositMoneey");
  const response = await axios.put(
    `http://localhost:3005/account/deposit/${accountNumber}/${fee}`
  );
  console.log(response);
  dispatch({ type: ADD_TRANSACTION, payload: response.data });
  dispatch({
    type: GET_BALANCE_ACCOUNT,
    payload: response.data.balance[0].balance
  });
};
