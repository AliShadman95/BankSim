import { ADD_ACCOUNT, GET_ACCOUNTS } from "../actions/types";

const initialState = { items: [], item: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ACCOUNT:
      return { ...state, items: [...state.items, action.payload] };
    case GET_ACCOUNTS:
      return { ...state, items: action.payload };
    default:
      return state;
  }
};
