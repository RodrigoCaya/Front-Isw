import React, { useState } from 'react';
import PropTypes from "prop-types"; 

//react-dropdown
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const Paciente = ({ //funcion
  onSubmit
  }) => {
    const [nombre, setNombre] = useState('');
    const [rut, setRut] = useState('');
    const [fecha_de_nacimiento, setFecha_de_nacimiento] = useState('');
    const [prioridad, setPrioridad] = useState('');
    const [programa_de_salud, setPrograma_de_salud] = useState('Escoge uno');
    const [diagnostico, setDiagnostico] = useState('');
    const options = [
      'FONASA', 'ISAPRE'
    ];
    const defaultOption = programa_de_salud;

    const obj = {'id_quimio': null,
                 'id_recuperacion': null,
                 'nombre': nombre,
                 'fecha_de_nacimiento': fecha_de_nacimiento,
                 'fecha_de_defuncion': null,
                 'rut': rut,
                 'programa_de_salud': programa_de_salud,
                 'diagnostico': diagnostico,
                 'entrada': null,
                 'salida': null,
                 'prioridad': prioridad}

    const onSelect = (event) => {
      // console.log(event);
      setPrograma_de_salud(
        event.value
      );
    }

    return(
        <form className="needs-validation" noValidate>
        <div className="form-row">
            <div className="col-md-6 mb-3">
            <label htmlFor="validationTooltip01">Nombre</label>
            <input value={nombre} type="text" onChange={(event) => setNombre(event.target.value)} className="form-control" id="validation01" placeholder="Ej: Juan Francisco Perez Herrera"/>
            </div>

            <div className="col-md-6 mb-3">
            <label htmlFor="validationTooltip02">Rut</label>
            <input value={rut} type="text" onChange={(event) => setRut(event.target.value)} className="form-control" id="validation02" placeholder="xx.xxx.xxx-x"/>
            </div>

            <div className="col-md-6 mb-3">
            <label htmlFor="validationTooltip02">Fecha de nacimiento</label>
            <input type="text" onChange={(event) => setFecha_de_nacimiento(event.target.value)} className="form-control" id="validation03" placeholder="AAAA-MM-DD"/>
            </div>

            <div className="col-md-6 mb-3">
            <label htmlFor="validationTooltip02">Prioridad</label>
            <input value={prioridad} type="text" onChange={(event) => setPrioridad(event.target.value)} className="form-control" id="validation04" placeholder="1-5"/>
            </div>
        </div>

        <div className="form-row">
            <div className="col-md-6 mb-3">
            <label htmlFor="validationTooltip03">Diagnóstico</label>
            <input value={diagnostico} type="text" onChange={(event) => setDiagnostico(event.target.value)} className="form-control" id="validation05" required/>
            </div>

            <div className="col-md-6 mb-3">
              <label htmlFor="validationTooltip04">Plan de Salud</label>
              <Dropdown options={options} onChange={onSelect} value={defaultOption} placeholder="Select an option" />
            </div>
        </div>
        {/* {console.log(programa_de_salud)} */}
        <button
        onClick={(event) => onSubmit(obj)} 
        className="btn btn-primary">Registrar</button>
        </form>
    );
  }


  
Paciente.propTypes = {
  onSubmit: PropTypes.func,
}

Paciente.defaultProps = {
  onSubmit: () => {},
}

export default Paciente;