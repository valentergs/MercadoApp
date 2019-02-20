import { combineReducers } from "redux";
import produtos from "./produtos";
import auth from "./auth";

export default combineReducers({
  produtos,
  auth
});
