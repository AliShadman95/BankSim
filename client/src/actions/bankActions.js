import axios from "axios";
import { GET_BANKS, ADD_BANK, ADD_ERROR, GET_BALANCE_BANK } from "./types";

export const getBanks = () => async (dispatch) => {
  const response = await axios.get(`http://localhost:3005/bank`);
  dispatch({ type: GET_BANKS, payload: response.data });
};

export const getBalanceOfBank = (bankName) => async (dispatch) => {
  const response = await axios.get(
    `http://localhost:3005/bank/balance/${bankName}`
  );
  dispatch({ type: GET_BALANCE_BANK, payload: response.data });
};

export const createBank = (bankName) => async (dispatch) => {
  const response = await axios.post(`http://localhost:3005/bank/${bankName}`);
  if (response.data.error) {
    dispatch({ type: ADD_ERROR, payload: response.data });
  } else {
    dispatch({
      type: ADD_BANK,
      payload: { code: response.data.code, name: bankName },
    });
  }
};
