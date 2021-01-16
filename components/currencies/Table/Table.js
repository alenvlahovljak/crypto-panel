import React, { useState } from 'react';

import { Table } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CurrenciesTable = ({ currencies }) => {
    return (
        <Table striped>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Symbol</th>
                    <th>Markets No.</th>
                    <th>Site</th>
                </tr>
            </thead>
            <tbody>
                {currencies.map(
                    ({ id, name, original_symbol, logo_url, website_url, markets_count }) => (
                        <tr key={id}>
                            <th>
                                <img height="30" width="30" src={logo_url} />
                            </th>
                            <td>{name}</td>
                            <td>{original_symbol}</td>
                            <td>{markets_count}</td>
                            <td>
                                <a href={website_url} target="_blank">
                                    Go!
                                </a>
                            </td>
                        </tr>
                    )
                )}
            </tbody>
        </Table>
    );
};

export default CurrenciesTable;
