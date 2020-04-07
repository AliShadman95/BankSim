import axios from "axios";
import { GET_PERSONS, ADD_PERSON, ADD_ERROR } from "./types";

export const getPersons = () => async (dispatch) => {
  const response = await axios.get(`http://localhost:3005/person`);
  dispatch({ type: GET_PERSONS, payload: response.data });
};

export const createPerson = (personName) => async (dispatch) => {
  const response = await axios.post(
    `http://localhost:3005/person/${personName}`
  );
  if (response.data.error) {
    dispatch({ type: ADD_ERROR, payload: response.data });
  } else {
    dispatch({ type: ADD_PERSON, payload: { name: personName } });
  }
};
