import { GET_BANKS } from "./types";
import axios from "axios";

export const getBanks = () => async dispatch => {
  console.log("calling getbanks");
  const response = await axios.get(`http://localhost:3005/bank`);
  console.log(response);
  dispatch({ type: GET_BANKS, payload: response.data });
};
