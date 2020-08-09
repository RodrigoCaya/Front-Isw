import axios from 'axios';

const endpoints = {
    development: 'https://loapisw.herokuapp.com/',
};

export const api = axios.create({
    baseURL: endpoints['development'],
    timeout: 20000,
});