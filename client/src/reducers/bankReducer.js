import { ADD_BANK, GET_BANKS, GET_BALANCE } from "../actions/types";

const initialState = { items: [], item: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_BANK:
      return { ...state, items: [...state.items, action.payload] };
    case GET_BANKS:
      return { ...state, items: action.payload };
    case GET_BALANCE:
      return { ...state, item: action.payload };
    default:
      return state;
  }
};
