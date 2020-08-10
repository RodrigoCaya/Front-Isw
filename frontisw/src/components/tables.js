import React, { Component } from 'react';

import pacientesService from '../services/pacientes.service';

class Tables extends Component{ //transforma la clase en componente

    constructor(props){
        super(props);
        this.state = {
            pacientes: [],
        }
    }

    componentDidMount(){ //es llamado la primera vez que la vista es renderizada (se llama 1 vez)
        pacientesService.getAll().then((response)=>{
            this.setState({
                pacientes: response.status === 200 ? response.data : [],
            })
        })
    }

    render(){//esto es para que muestre contenido HTML
        const { pacientes } = this.state;

        return(//codigo jsx
        <div className="jumbotron">
            <table className="table text-center">
            <thead className="bg-info">
                <tr>
                <th scope="col">#</th>
                <th scope="col">Id</th>
                <th scope="col">Nombre</th>
                <th scope="col">Rut</th>
                <th scope="col">Prioridad</th>
                <th scope="col">Diagnóstico</th>
                <th scope="col">Quimioterapia</th>
                <th scope="col">Recuperación</th>
                </tr>
            </thead>
            <tbody>
                {pacientes.map((pacientes,index)=>{
                    return (
                    <tr key={pacientes.id}>
                        <React.Fragment>
                            <th scope="row">{index+1}</th>
                            <td>{pacientes.id}</td>
                            <td>{pacientes.nombre}</td>
                            <td>{pacientes.rut}</td>
                            <td>{pacientes.prioridad}</td>
                            <td>{pacientes.diagnostico}</td>
                            <td>{pacientes.id_quimio}</td>
                            <td>{pacientes.id_recuperacion}</td>
                        </React.Fragment>
                    </tr>
                    )
                })}
            </tbody>
            </table>
        </div>
        );
    }
};

export default Tables;