import qs from 'qs';
import { cryptoAPI } from '@/api';

const getCurrenciesMeta = (ids, attributes, format) => {
    return cryptoAPI('GET', '/currencies', {
        params: { ids, attributes, format },
        paramsSerializer: (params) => qs.stringify(params, { arrayFormat: 'repeat' })
    });
};

export default { getCurrenciesMeta };
