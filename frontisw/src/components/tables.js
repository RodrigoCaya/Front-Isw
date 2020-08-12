import React, { Component } from 'react';

import pacientesService from '../services/pacientes.service';
import quimioService from '../services/quimio.service';
// import pacientesService from '../services/pacientes.service';

import Dropdown from 'react-dropdown';

class Tables extends Component{ //transforma la clase en componente

    constructor(props){
        super(props);

        
        this.state = {
            pacientes: [],
            options_quimio : [],
            options_para_quimio : [],
            options_rec : ['Id', 'Rut', 'Nombre', 'Prioridad', 'Diagnóstico'],
        }
        
        
    }

    componentDidMount(){ //es llamado la primera vez que la vista es renderizada (se llama 1 vez)
        pacientesService.getAll().then((response)=>{
            this.setState({
                ...this.state,
                pacientes: response.status === 200 ? response.data : [],
            })
        })
        quimioService.get_sillon().then((response)=>{
            this.setState({
                ...this.state,
                options_quimio: response.status === 200 ? response.data : [],
            });

            
            this.state.options_quimio.filter(this.filtrarPorActivo).map((sillon,index)=>{
                // console.log("AAAAAA",sala)
                return(
                    this.state.options_para_quimio.push('Sala: '+sillon.idSala+'/Sillon: '+sillon.id)
                    // sala.sillones.map((sillon,index)=>{
                    //     // console.log("XDDD",sillon.activo,sillon.idSala)
                    //     // console.log("PANTUFLA",this.state.options_para_quimio)
                    // }
                    // )
                )
            }) 
        })
        
    }
    
    deletePaciente(id) {    
        pacientesService.borrarPaciente(id)
            .then(response => {
                console.log(response.data);
                this.props.history.push('/') //me lleva a la ruta "/"
            })
            .catch(e => {
                console.log(e);
            });
        }

    filtrarPorActivo(obj) {
        if ('activo' in obj && (obj.activo) && !(obj.asignado)) {
        return true;
        } else {
        return false;
        }
    }

    onSelect(event,id) {
        console.log("EQUIS DE ",event.value.split(" ")[2])
        let nuevo_quimio = {
            "id_quimio":event.value.split(" ")[2]
        }
        
        pacientesService.agregar_quimio(id,nuevo_quimio)
        let act = {
            "id": event.value.split(" ")[2],
            "asignado": true,
            "activo": true,
            "idSala": event.value.slice(6,7)
        }
        quimioService.actualizar(act)
        
    }
    
    render(){//esto es para que muestre contenido HTML
        const { pacientes,options_quimio,options_rec } = this.state;
        
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
                <th scope="col">Programa de Salud</th>
                <th scope="col">Diagnóstico</th>
                <th scope="col">Quimioterapia</th>
                {/* <th scope="col">Recuperación</th> */}
                <th scope="col">Opciones</th>
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
                            <td>{pacientes.programa_de_salud}</td>
                            <td>{pacientes.diagnostico}</td>
                            <td>{pacientes.id_quimio}
                                <div className="col-8">
                                    <Dropdown options={this.state.options_para_quimio} onChange={(event) => this.onSelect(event,pacientes.id)} value= "Cambia" placeholder="Select an option"/>
                                </div>
                            </td>
                            {/* <td>{pacientes.id_recuperacion}
                                <div className="col-8">
                                    <Dropdown options={options_rec} value= "Cambia" placeholder="Select an option" />
                                </div>
                            </td> */}
                            <td>                                
                                <a  onClick={()=>this.deletePaciente(pacientes.id)}
                                    href="#" className="btn btn-danger"> Borrar </a>
                            </td>
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