import axios from "axios";

import { GET_PRODS, DELETE_PROD, ADD_PROD } from "./types";

// GET Produtos
export const getProds = () => dispatch => {
  axios
    .get("api/mercado_app/produto/")
    .then(res => {
      dispatch({
        type: GET_PRODS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

//DELETE Produto
export const deleteProd = id => dispatch => {
  axios
    .delete(`api/mercado_app/produto/${id}/`)
    .then(res => {
      dispatch({
        type: DELETE_PROD,
        payload: id
      });
    })
    .catch(err => console.log(err));
};

// ADD Produto
export const addProd = produto => dispatch => {
  axios
    .post("api/mercado_app/produto/", produto)
    .then(res => {
      dispatch({
        type: ADD_PROD,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
