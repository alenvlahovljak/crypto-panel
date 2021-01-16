import React, { useState, useEffect } from 'react';

import { Container } from 'reactstrap';
import Breadcrumbs from './Breadcumbs/Breadcumbs';
import Table from './Table/Table';
import Pagination from './Pagination/Pagination';

const Currencies = ({ getCurrenciesMeta }) => {
    const [currencies, setCurrencies] = useState([]);

    useEffect(() => {
        getCurrenciesMeta(setCurrencies);
    }, []);

    console.log('currencies', currencies);

    return (
        <Container className="mt-4">
            <Breadcrumbs />
            <Table currencies={currencies} />
            <Pagination />
        </Container>
    );
};

export default Currencies;
