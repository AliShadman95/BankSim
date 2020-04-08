import axios from "axios";
import { GET_BANKS, ADD_BANK, ADD_ERROR, GET_BALANCE_BANK } from "./types";

export const getBanks = () => async (dispatch) => {
  const response = await axios.get(`https://banksim.herokuapp.com/bank`);
  dispatch({ type: GET_BANKS, payload: response.data });
};

export const getBalanceOfBank = (bankName) => async (dispatch) => {
  const response = await axios.get(
    `https://banksim.herokuapp.com/bank/balance/${bankName}`
  );
  dispatch({ type: GET_BALANCE_BANK, payload: response.data });
};

export const createBank = (bankName) => async (dispatch) => {
  const response = await axios.post(
    `https://banksim.herokuapp.com/bank/${bankName}`
  );
  if (response.data.error) {
    dispatch({ type: ADD_ERROR, payload: response.data });
  } else {
    dispatch({
      type: ADD_BANK,
      payload: { code: response.data.code, name: bankName },
    });
  }
};
