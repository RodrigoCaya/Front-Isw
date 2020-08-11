import { api } from '../helpers';

const basePath = '/api/pacientes';

function getAll() {
    return api.get(`${basePath}/getAll`);
}

function show_id(pacienteId) {
    return api.get(`${basePath}/paciente/${pacienteId}`)
}

function show_rut(rut) {
    return api.get(`${basePath}/rut_paciente/${rut}`)
}

function show_nombre(nombre) {
    return api.get(`${basePath}/nombre_paciente/${nombre}`)
}

function show_diagnostico(diagnostico) {
    return api.get(`${basePath}/diagnostico/${diagnostico}`)
}

function show_prioridad(prioridad) {
    return api.get(`${basePath}/prioridad/${prioridad}`)
}

function borrarPaciente(id) {
    return api.delete(`${basePath}/paciente/${id}`);
  }

function create(data) {
    return api.post(`${basePath}/paciente`,data);
}

function agregar_quimio(id,data) {
    return api.put(`${basePath}/quimio/${id}`,data);
}

const pacientesService = {
    getAll,
    show_id,
    show_rut,
    show_nombre,
    show_diagnostico,
    show_prioridad,
    create,
    borrarPaciente,
    agregar_quimio
};

export default pacientesService;