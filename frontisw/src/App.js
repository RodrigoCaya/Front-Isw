import React from 'react';
import './App.css';

//my imports
import Navbar from './navbar'; //si es javascript no es necesario que sea .js
import Tables from './tables';
import Form from './form';
import NavBarPaciente from './NavBarPaciente'

//bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <NavBarPaciente></NavBarPaciente>
      <Tables></Tables>
      <Form></Form>
    </div>
  );
}

export default App;
