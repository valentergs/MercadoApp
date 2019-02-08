import React, { Component } from "react";
import ReactDOM from "react-dom";

import Header from "../layout/Header.js";

class Mercado_app extends Component {
  render() {
    return <Header />;
  }
}

ReactDOM.render(<Mercado_app />, document.getElementById("app"));
