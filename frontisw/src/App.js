import React from 'react';
import './App.css';

//my imports
import Navbar from './navbar'; //si es javascript no es necesario que sea .js
import Tables from './tables';

//bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Tables></Tables>
    </div>
  );
}

export default App;
