import { ADD_BANK, GET_BANKS, GET_BALANCE_BANK } from "../actions/types";

const initialState = { items: [], item: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_BANK:
      return { ...state, items: [...state.items, action.payload] };
    case GET_BANKS:
      return { ...state, items: action.payload };
    case GET_BALANCE_BANK:
      return { ...state, item: action.payload };
    default:
      return state;
  }
};
