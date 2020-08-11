import React, { useState } from 'react';
import PropTypes from "prop-types"; 

//react-dropdown
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

import pacientesService from '../../services/pacientes.service';

import { useList } from 'react-hooks-lib'

const Paciente_search = ({
    onSubmit
    }) => {
        // const {pacientes,push,set} = useList([]);
        const [state, setState] = useState([]);
        const [param, setParam] = useState('Escoge uno');
        const [valor, setValor] = useState('');
        // const [pacientes = [], setPacientes] = useState('');

        const options = [
            'Id', 'Rut', 'Nombre', 'Prioridad', 'Diagnóstico'
          ];
    
        const onSelect = (event) => {
        // console.log(event);
        setParam(
            event.value
        );
        }

        
        const showPaciente = (event) => {
            event.preventDefault();
            switch(param){
                case 'Id': 
                pacientesService.show_id(valor).then((response)=>{
                    setState(
                        response.status === 200 ? [response.data] : [],
                    );
                });
                break;
                case 'Rut': 
                pacientesService.show_rut(valor).then((response)=>{
                    setState(
                        response.status === 200 ? [response.data] : [],
                    );
                });
                break;
                case 'Nombre': 
                pacientesService.show_nombre(valor).then((response)=>{
                    setState(
                        response.status === 200 ? response.data : [],
                    );
                });
                break;
                case 'Prioridad': 
                pacientesService.show_prioridad(valor).then((response)=>{
                    setState(
                        response.status === 200 ? response.data : [],
                    );
                });
                break;
                case 'Diagnóstico': 
                pacientesService.show_diagnostico(valor).then((response)=>{
                    setState(
                        response.status === 200 ? response.data : [],
                    );
                });
                break;
            };
            }

        return(
            <div>
            <form className="needs-validation" noValidate>
                <div className="form-row " style={{display: 'block',  justifyContent:'center', alignItems:'center'}} ></div>
                    <div className="col-md-12 mb-3">
                        <label htmlFor="validationTooltip04">Seleccione filtro de búsqueda</label>
                            <Dropdown options={options} onChange={onSelect} value= {param} placeholder="Select an option" />
                        
                    </div>
                    <div className="col-md-12 mb-3">
                        <label htmlFor="validationTooltip01">Ingrese información</label>
                        <input value={valor} onChange={(event) => setValor(event.target.value)} type="text" className="form-control" id="validationTooltip01"/>
                    </div>
                    
                    {console.log("param: ",param)}
                    {console.log("valor: ",valor)}
                <button onClick={showPaciente} className="btn btn-primary" type="submit">Buscar</button>
                </form>
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
                    <th scope="col">Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    {state.map((pacientes,index)=>{
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
                                <td>
                                    <a  href="#" className="btn btn-warning" onClick={()=>console.log(pacientes)}> Editar </a>
                                    
                                    <a  onClick={()=>pacientesService.borrarPaciente(pacientes.id)}
                                        href="#" className="btn btn-danger"> Borrar </a>

                                </td>
                            </React.Fragment>
                        </tr>
                        )
                    })}
                </tbody>
                </table>
            </div>
            </div>
        )

    }

Paciente_search.propTypes = {
    onSubmit: PropTypes.func,
}
    
Paciente_search.defaultProps = {
onSubmit: () => {},
}

export default Paciente_search;