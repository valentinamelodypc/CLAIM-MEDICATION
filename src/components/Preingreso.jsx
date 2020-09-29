import React, { Component } from "react";
//import "./Style/preingresoStyles.css"
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom";

//import { Button } from "react-bootstrap";
export default class Preingreso extends Component {
  render() {
    return (
      <>
        <br />
        <Link to="/Inicio" className="nav-link">
        <Button variant="primary" size="lg" active>
        USUARIO
        </Button>{' '}
        </Link>
        <br />
        <br />
        <Link to="/Login" className="nav-link">
        <Button variant="primary" size="lg" active>
        ADMINISTRADOR
        </Button>{' '}
        </Link>
      </>
    );
  }
}
