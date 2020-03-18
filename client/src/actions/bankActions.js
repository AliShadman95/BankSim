import { GET_BANKS, ADD_BANK } from "./types";
import axios from "axios";

export const getBanks = () => async dispatch => {
  console.log("calling getbanks");
  const response = await axios.get(`http://localhost:3005/bank`);
  console.log(response);
  dispatch({ type: GET_BANKS, payload: response.data });
};

export const createBank = bankName => async dispatch => {
  console.log("calling createBank");
  const response = await axios.post(`http://localhost:3005/bank/${bankName}`);
  console.log(response);
  dispatch({ type: ADD_BANK, payload: response.data });
};
