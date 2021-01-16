import axios from '@/services/axios';

const cryptoAPI = (method, url, { params, paramsSerializer }) =>
    axios({
        method,
        url,
        params,
        paramsSerializer
    });

export default cryptoAPI;
