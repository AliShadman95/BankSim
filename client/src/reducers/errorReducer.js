import { ADD_ERROR, GET_ERRORS } from "../actions/types";

const initialState = { items: [], item: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ERROR:
      return { ...state, item: action.payload };
    case GET_ERRORS:
      return { ...state, item: action.payload };
    default:
      return state;
  }
};
