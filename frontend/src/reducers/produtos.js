import { GET_PRODS } from "../actions/types.js";

const initialState = {
  produtos: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PRODS:
      return {
        ...state,
        produtos: action.payload
      };
    default:
      return state;
  }
}
