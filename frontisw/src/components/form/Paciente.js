import React, { useState } from 'react';
import PropTypes from "prop-types"; 


const Paciente = ({
  onSubmit
  }) => {
    const [nombre, setNombre] = useState('');
    const [rut, setRut] = useState('');
    const [fecha_de_nacimiento, setFecha_de_nacimiento] = useState('');
    const [prioridad, setPrioridad] = useState('');
    const [programa_de_salud, setPrograma_de_salud] = useState('');
    const [diagnostico, setDiagnostico] = useState('');
    const [comentario, setComentario] = useState('');

    return(
        <form className="needs-validation" noValidate>
        <div className="form-row">
            <div className="col-md-6 mb-3">
            <label htmlFor="validationTooltip01">Nombre</label>
            <input value={nombre} type="text" onChange={(event) => setNombre(event.target.value)} className="form-control" id="validation01"/>
            </div>

            <div className="col-md-6 mb-3">
            <label htmlFor="validationTooltip02">Rut</label>
            <input value={rut} type="text" onChange={(event) => setRut(event.target.value)} className="form-control" id="validation02"/>
            </div>

            <div className="col-md-6 mb-3">
            <label htmlFor="validationTooltip02">Fecha de nacimiento</label>
            <input type="text" onChange={(event) => setFecha_de_nacimiento(event.target.value)} className="form-control" id="validation03" placeholder="AAAA-MM-DD"/>
            </div>

            <div className="col-md-6 mb-3">
            <label htmlFor="validationTooltip02">Prioridad</label>
            <input value={prioridad} type="text" onChange={(event) => setPrioridad(event.target.value)} className="form-control" id="validation04"/>
            </div>
        </div>

        <div className="form-row">
            <div className="col-md-6 mb-3">
            <label htmlFor="validationTooltip03">Diagnóstico</label>
            <input value={diagnostico} type="text" onChange={(event) => setDiagnostico(event.target.value)} className="form-control" id="validation05" required/>
            </div>

            <div className="col-md-6 mb-3">
            <label htmlFor="validationTooltip04">Plan de Salud</label>
            <select defaultValue="" className="custom-select" id="validation06" required>
                <option disabled value="">Choose...</option>
                <option onSubmit={(event) => setPrograma_de_salud('FONASA')}>FONASA</option>
                <option onSubmit={(event) => setPrograma_de_salud('ISAPRE')}>ISAPRE</option>
            </select>
            </div>
            
            <div className="col-md-12 mb-3">
            <label htmlFor="validationTooltip03">Comentario</label>
            <textarea value={comentario} onChange={(event) => setComentario(event.target.value)} className="form-control" id="descripcionProblema" rows="10"></textarea>
            </div>
        </div>
        {console.log(programa_de_salud)}
        <button 
        onClick={(event) => onSubmit({'id_quimio': null,'id_recuperacion': null,'nombre': nombre,'fecha_de_nacimiento': fecha_de_nacimiento,'fecha_de_defuncion': null,'rut': rut,'programa_de_salud': programa_de_salud,'diagnostico': diagnostico,'entrada': null,'salida': null,'prioridad': prioridad,'comentario': comentario})} 
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