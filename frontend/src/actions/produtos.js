import axios from "axios";

import { GET_PRODS } from "./types";

export const getProds = () => dispatch => {
  axios
    .get("api/mercado_app/produto")
    .then(res => {
      dispatch({
        type: GET_PRODS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
