import React from 'react';
import './App.css';
import { Router, Switch, Route } from "react-router-dom";
import history from './helpers/history'

//my imports
import Navbar from './components/navbar'; //si es javascript no es necesario que sea .js
import Tables from './components/tables';
import NavBarPaciente from './components/NavBarPaciente/NavBarPaciente'
import PacienteRegistro from './views/PacienteRegistro/PacienteRegistro'
import PacienteBuscar from './views/PacienteBuscar/PacienteBuscar'
import PacienteBorrar from './views/PacienteBorrar/PacienteBorrar';

//bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';



function App() {
  return (
    <Router 
    history={history}>
    <div>
      <Navbar></Navbar>
      <NavBarPaciente></NavBarPaciente>
      <Switch>
        <Route
          exact
          path='/'
          component={Tables}
        />
        <Route
          path='/registro'
          component={PacienteRegistro}
        />
        <Route
          path='/buscar'
          component={PacienteBuscar}
        />
        <Route
          path='/borrar'
          component={PacienteBorrar}
        />
      </Switch>
    </div>
  </Router>
  );
}

export default App;