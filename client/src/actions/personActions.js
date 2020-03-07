import { GET_PERSONS, ADD_PERSON } from "./types";
import axios from "axios";

export const getPersons = () => async dispatch => {
  console.log("calling getusers");
  const response = await axios.get(`http://localhost:3005/person`);
  console.log(response);
  dispatch({ type: GET_PERSONS, payload: response.data });
};

export const createPerson = personName => async dispatch => {
  console.log("calling peersonCreate");
  const response = await axios.post(
    `http://localhost:3005/person/${personName}`
  );
  console.log(response);
  dispatch({ type: ADD_PERSON, payload: response.data });
};
