import React, { Component } from "react";
//import Carousel from "../components/Carousel";


export default class Preguntas extends Component {
  render() {
    return (
      <>
<br/>
        <h1>
          {" "}
          <center>
            {" "}
            <strong>
              <br />
              Preguntas Frecuentes
            </strong>
          </center>
        </h1>
        <br />
        <table>
          <ul class="list-group">
          <li>
            <strong>¿Quienes manejan la app?</strong>
            <br />
            La app la manejan los administradores y los creadores de la app,
            también la manejan los asociados de ella.
          </li>
          <br />
          <li>
            <strong>¿Cada cuanto actualizan la app?</strong>
            <br />
            La app se actualizara cada que hay información nueva o medicamentos
            nuevos para ingresar, se puede decir que se actualizara cada noche.
          </li>
          <br />
          <li>
            <strong>¿Donde puedo raclamar los medicamentos?</strong>
            <br />
            Los medicamentos los podrás reclamar en la farmacia que se te
            muestre donde esta disponible y cual te queda cercana.
          </li>
          <br />
          <li>
            <strong>¿Cuales son los asociados?</strong>
            <br />
            Los asociados son los hospitales, farmacias y las EPS.
          </li>
          </ul></table>
      </>
    );
  }
}
