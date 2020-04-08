import {
  ADD_ACCOUNT,
  GET_ACCOUNTS,
  GET_BALANCE_ACCOUNT,
  RESET_ACCOUNTS,
} from "../actions/types";

const initialState = { items: [], item: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case RESET_ACCOUNTS:
      return { ...state, items: [] };
    case ADD_ACCOUNT:
      return { ...state, items: [...state.items, action.payload] };
    case GET_ACCOUNTS:
      return { ...state, items: action.payload };
    case GET_BALANCE_ACCOUNT:
      return { ...state, item: action.payload };
    default:
      return state;
  }
};
