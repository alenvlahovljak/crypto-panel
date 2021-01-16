import React from 'react';

import { currencies } from 'pages/api';

import { Currencies } from 'components';

const Index = () => {
    const getCurrenciesMeta = async (dispatch) => {
        try {
            const { data } = await currencies.getCurrenciesMeta(['BTC', 'ETH', 'XRP']);
            dispatch(data);
        } catch (err) {
            throw new Error(err);
        }
    };

    return <Currencies getCurrenciesMeta={getCurrenciesMeta} />;
};

export default Index;
