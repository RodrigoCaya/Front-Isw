import React, { Component } from 'react';
class PacienteBorrar extends Component{ //transforma la clase en componente

    render(){//esto es para que muestre contenido HTML
        return(//codigo jsx
        <div>
            <div className="container" style={{display: 'block',  justifyContent:'center', alignItems:'center', height: '100vh', marginTop: '50px'}}>
                <header class="masthead">
                    <div class="container h-100">
                        <div class="row h-100 align-items-center">
                            <div id="titulo" class="col-12 text-center">
                                <h1 class="font-weight-light">Borrar Paciente</h1>
                                <p class="lead">Ingrese el ID del paciente a borrar</p>
                            </div>
                        </div>
                    </div>
                </header>
                <form class="needs-validation" novalidate>
                    
                <div class="form-row" style={{display: 'block',  justifyContent:'center', alignItems:'center',marginTop: '30px', marginLeft: '450px'}}>

                    <div class="col-md-3 mb-3">
                        <label for="validationTooltip01">Ingrese ID</label>
                        <input type="text" class="form-control" id="validationTooltip01"/>
                    </div>
                    
                    <button class="btn btn-danger" type="submit" >Borrar</button>

                </div>
                </form>
            </div>
        </div>
        );
    }
};

export default PacienteBorrar;