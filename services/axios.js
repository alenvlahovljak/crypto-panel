import getConfig from 'next/config';
import axios from 'axios';
import { BASE_URL } from '@/utils/constants';

const { publicRuntimeConfig } = getConfig();

const instance = axios.create({
    baseURL: BASE_URL,
    params: {
        key: publicRuntimeConfig.cryptoApiKey
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
