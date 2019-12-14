import { GET_USERS } from "./types";
import axios from "axios";

export const getUsers = () => async dispatch => {
  console.log("calling getusers");
  const response = await axios.get(`http://localhost:3005/person`);
  console.log(response);
  dispatch({ type: GET_USERS, payload: response.data });
};
