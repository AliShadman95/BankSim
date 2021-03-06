import {
  ADD_TRANSACTION,
  GET_TRANSACTIONS,
  RESET_TRANSACTIONS,
} from "../actions/types";

const initialState = { items: [], item: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case RESET_TRANSACTIONS:
      return { ...state, items: [] };
    case ADD_TRANSACTION:
      return { ...state, items: [...state.items, action.payload] };
    case GET_TRANSACTIONS:
      return { ...state, items: action.payload };
    default:
      return state;
  }
};
