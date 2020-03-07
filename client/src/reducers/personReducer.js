import { ADD_PERSON, GET_PERSONS } from "../actions/types";

const initialState = { items: [], item: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PERSON:
      return { ...state, items: [...state.items, action.payload] };
    case GET_PERSONS:
      return { ...state, items: action.payload };
    default:
      return state;
  }
};
