import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";

import Header from "./layout/Header.js";
import Dashboard from "./mercado/Dashboard.js";

class Mercado_app extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className="container">
          <Dashboard />
        </div>
      </Fragment>
    );
  }
}

ReactDOM.render(<Mercado_app />, document.getElementById("app"));
