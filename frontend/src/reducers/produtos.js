import {
  GET_PRODS,
  DELETE_PROD,
  ADD_PROD,
  CLEAR_PROD
} from "../actions/types.js";

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
    case ADD_PROD:
      return {
        ...state,
        produtos: [...state.produtos, action.payload]
      };
    case CLEAR_PROD:
      return {
        ...state,
        produtos: []
      };
    default:
      return state;
  }
}
