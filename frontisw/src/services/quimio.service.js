import { quimio } from '../helpers/quimio';

const basePath = '/api';

function get_sillon() {
    return quimio.get(`${basePath}/sillon`);
}

function get_sala() {
    return quimio.get(`${basePath}/sala`);
}

const quimioService = {
    get_sillon,
    get_sala,
};

export default quimioService;