import axios from 'axios';
import { BASE_URL } from '../utils/constants';

const instance = axios.create({
    baseURL: BASE_URL,
    params: {
        key: process.env.API_KEY
    }
});

instance.interceptors.request.use(
    (response) => response,
    (err) => {
        if (err && err.response) return Promise.reject(err.response);
        if (err && err.request) return Promise.reject(err.request);
        return Promise.reject(err);
    }
);

export default instance;
