import React, { Component } from "react";

import "./Style/accesoStyle.css";
import AccesoUS from "../components/AccesoUS";

export default class AccesoU extends Component {
  render() {
    return (
      <div className="container ">
        <div className="row d-flex justify-content-center align-items-center login-container">
          <div className="border p-3">
            <AccesoUS />
          </div>
        </div>
      </div>
    );
  }
}
