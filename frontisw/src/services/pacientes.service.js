import { api } from '../helpers';

const basePath = '/api/pacientes';

function getAll() {
    return api.get(`${basePath}/getAll`);
}

function show(pacienteId) {
    return api.get(`${basePath}/?id=${pacienteId}`)
}

function create(data) {
    return api.post(`${basePath}/paciente`,data);
}

const pacientesService = {
    getAll,
    show,
    create,
};

export default pacientesService;