import React, { Component } from 'react';

class NavBarPaciente extends Component{ //transforma la clase en componente

    render(){//esto es para que muestre contenido HTML
        return(//codigo jsx
        <div>
            <nav className="navbar navbar-dark "style={{ alignItems:'center',display: 'block',  backgroundColor: '#3f4452'}}> {/*hola*/}
            <a className="navbar-brand" href="#">Buscar Paciente</a>
            <a className="navbar-brand" href="#">Agregar Paciente</a>
            </nav>
        </div>
        );
    }
};

export default NavBarPaciente;