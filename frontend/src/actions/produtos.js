import axios from "axios";

import { GET_PRODS, DELETE_PROD, ADD_PROD } from "./types";
import { tokenConfig } from "./auth";

// GET Produtos
export const getProds = () => (dispatch, getState) => {
  axios
    .get("api/mercado_app/produto/", tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_PRODS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

//DELETE Produto
export const deleteProd = id => (dispatch, getState) => {
  axios
    .delete(`api/mercado_app/produto/${id}/`, tokenConfig(getState))
    .then(res => {
      dispatch({
        type: DELETE_PROD,
        payload: id
      });
    })
    .catch(err => console.log(err));
};

// ADD Produto
export const addProd = produto => (dispatch, getState) => {
  axios
    .post("api/mercado_app/produto/", produto, tokenConfig(getState))
    .then(res => {
      dispatch({
        type: ADD_PROD,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
