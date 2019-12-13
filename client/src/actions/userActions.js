import { SET_USERS } from "./types";
import axios from "axios";

export const setUsers = user => dispatch => {
  dispatch({ type: SET_USERS, payload: user });
};
