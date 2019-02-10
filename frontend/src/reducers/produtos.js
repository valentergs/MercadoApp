import { GET_PRODS, DELETE_PROD } from "../actions/types.js";

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
    case DELETE_PROD:
      return {
        ...state,
        produtos: state.produtos.filter(
          produto => produto.id !== action.payload
        )
      };
    default:
      return state;
  }
}
