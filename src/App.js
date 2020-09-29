import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import preingreso1 from "./pages/preingreso1";
import Inicio from "./pages/Inicio";
import AccesoU from "./pages/AccesoU";
import Nosotros from "./pages/Nosotros";
import Preguntas from "./pages/Preguntas";

import Layout from "./Layout";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/Preingreso1" component={preingreso1} />
        <Route exact path="/AccesoU" component={AccesoU} />
        <Route exact path="/Login" component={Login} />
        <Layout>
          <Route exact path="/Inicio" component={Inicio} />
          <Route exact path="/Nosotros" component={Nosotros} />
          <Route exact path="/Preguntas" component={Preguntas} />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
}
