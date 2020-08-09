import React, { Component } from 'react';
class PacienteBuscar extends Component{ //transforma la clase en componente

    render(){//esto es para que muestre contenido HTML
        return(//codigo jsx
        <div>
            <div className="container" style={{display: 'block',  justifyContent:'center', alignItems:'center', height: '100vh', marginTop: '50px'}}>
                <header class="masthead">
                    <div class="container h-100">
                        <div class="row h-100 align-items-center">
                            <div id="titulo" class="col-12 text-center">
                                <h1 class="font-weight-light">Buscar Paciente</h1>
                                <p class="lead">Seleccione e ingrese datos necesarios para hacer la búsqueda</p>
                            </div>
                        </div>
                    </div>
                </header>
                <form class="needs-validation" novalidate>
                    
                <div class="form-row " style={{display: 'block',  justifyContent:'center', alignItems:'center'}} ></div>
                    <div class="col-md-12 mb-3">
                    <label for="validationTooltip04">Seleccione filtro de búsqueda</label>
                    <select class="custom-select" id="validationTooltip04" required>
                        <option selected disabled value="">Elija...</option>
                        <option>ID</option>
                        <option>Rut</option>
                        <option>Nombre</option>
                        <option>Prioridad</option>
                        <option>Diagnóstico</option>
                    </select>
                    </div>
                    <div class="col-md-12 mb-3">
                        <label for="validationTooltip01">Ingrese información</label>
                        <input type="text" class="form-control" id="validationTooltip01"/>
                    </div>
                    
                <button class="btn btn-primary" type="submit">Buscar</button>
                </form>
            </div>
        </div>
        );
    }
};

export default PacienteBuscar;