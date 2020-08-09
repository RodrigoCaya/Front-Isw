import axios from 'axios';

const endpoints = {
    // development: 'https://loapisw.herokuapp.com/',
    development: 'http://localhost:8000/',
};

export const api = axios.create({
    baseURL: endpoints['development'],
    timeout: 20000,
});