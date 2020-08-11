import { quimio } from '../helpers/quimio';

const basePath = '/api';

function get_sillon() {
    return quimio.get(`${basePath}/sillon`);
}

function get_sala() {
    return quimio.get(`${basePath}/sala`);
}

function actualizar(data) {
    return quimio.put(`${basePath}/sillon`,data);
}

const quimioService = {
    get_sillon,
    get_sala,
    actualizar,
};

export default quimioService;