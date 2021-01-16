import axios from '../../services/axios';

const cryptoAPI = (method, url, data) =>
    axios({
        method,
        url,
        data
    });

export default cryptoAPI;
