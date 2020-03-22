import { ADD_ERROR, GET_ERRORS, RESET_ERRORS } from "../actions/types";

const initialState = { items: [], item: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ERROR:
      return { ...state, item: action.payload };
    case GET_ERRORS:
      return { ...state, item: action.payload };
    case RESET_ERRORS:
      return { ...state, item: [] };
    default:
      return state;
  }
};
