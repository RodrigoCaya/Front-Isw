import React, { Component } from 'react';
class PacienteRegistro extends Component{ //transforma la clase en componente

    render(){//esto es para que muestre contenido HTML
        return(//codigo jsx
        <div>
            <div className="container" style={{display: 'block',  justifyContent:'center', alignItems:'center', height: '100vh', marginTop: '50px'}}>
            <header class="masthead">
                <div class="container h-100">
                    <div class="row h-100 align-items-center">
                        <div id="titulo" class="col-12 text-center">
                            <h1 class="font-weight-light">Registro Paciente</h1>
                            <p class="lead">Ingresa los datos del paciente en el siguiente formulario</p>
                        </div>
                    </div>
                </div>
            </header>
            <form class="needs-validation" novalidate>
            <div class="form-row">
                <div class="col-md-6 mb-3">
                <label for="validationTooltip01">Nombre</label>
                <input type="text" class="form-control" id="validationTooltip01"/>

                </div>
                <div class="col-md-6 mb-3">
                <label for="validationTooltip02">Rut</label>
                <input type="text" class="form-control" id="validationTooltip02"/>

                </div>
                <div class="col-md-6 mb-3">
                <label for="validationTooltip02">Fecha de nacimiento</label>
                <input type="text" class="form-control" id="validationTooltip02"/>

                </div>
                <div class="col-md-6 mb-3">
                <label for="validationTooltip02">Prioridad</label>
                <input type="text" class="form-control" id="validationTooltip02"/>

                </div>
            </div>
            <div class="form-row">
                <div class="col-md-6 mb-3">
                <label for="validationTooltip03">Diagnóstico</label>
                <input type="text" class="form-control" id="validationTooltip03" required/>

                </div>
                <div class="col-md-6 mb-3">
                <label for="validationTooltip04">Plan de Salud</label>
                <select class="custom-select" id="validationTooltip04" required>
                    <option selected disabled value="">Choose...</option>
                    <option>FONASA</option>
                    <option>ISAPRE</option>
                </select>
                </div>
                <div class="col-md-12 mb-3">
                <label for="validationTooltip03">Comentario</label>
                <textarea class="form-control" id="descripcionProblema" rows="10"></textarea>

                </div>
            </div>
            <button class="btn btn-primary" type="submit">Registrar</button>
            </form>
        </div>
        </div>
        );
    }
};

export default PacienteRegistro;