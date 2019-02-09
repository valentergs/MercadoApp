import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";

import Header from "./layout/Header.js";
import Dashboard from "./mercado/Dashboard.js";

import { Provider } from "react-redux";
import store from "../store";

class Mercado_app extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <Header />
          <div className="container">
            <Dashboard />
          </div>
        </Fragment>
      </Provider>
    );
  }
}

ReactDOM.render(<Mercado_app />, document.getElementById("app"));
