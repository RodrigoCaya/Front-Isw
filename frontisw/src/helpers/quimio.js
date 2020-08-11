import axios from 'axios';

const endpoints = {
    development: 'https://quimioterapia.herokuapp.com/',
};

export const quimio = axios.create({
    baseURL: endpoints['development'],
    timeout: 20000,
});