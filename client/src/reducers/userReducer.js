import { ADD_USER, GET_USERS } from "../actions/types";

const initialState = { items: [], item: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return { ...state, items: [...state.items, action.payload] };
    case GET_USERS:
      return { ...state, items: action.payload };
    default:
      return state;
  }
};
