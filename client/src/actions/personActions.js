import axios from "axios";
import { GET_PERSONS, ADD_PERSON, ADD_ERROR, RESET_ERRORS } from "./types";

export const getPersons = () => async (dispatch) => {
  const response = await axios.get(`https://banksim.herokuapp.com/person`);
  dispatch({
    type: GET_PERSONS,
    payload: response.data,
  });
};

export const createPerson = (personName) => async (dispatch) => {
  const response = await axios.post(
    `https://banksim.herokuapp.com/person/${personName}`
  );
  if (response.data.error) {
    dispatch({ type: ADD_ERROR, payload: response.data });
  } else {
    dispatch({ type: RESET_ERRORS });
    dispatch({ type: ADD_PERSON, payload: { name: personName } });
  }
};
