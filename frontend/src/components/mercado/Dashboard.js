import React, { Fragment } from "react";
import Form from "./Form";
import Produtos from "./Produtos";

function Dashboard() {
  return (
    <Fragment>
      <Form />
      <Produtos />
    </Fragment>
  );
}

export default Dashboard;
