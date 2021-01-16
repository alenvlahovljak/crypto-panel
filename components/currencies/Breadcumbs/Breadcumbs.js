import React from 'react';

import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

const Breadcrumbs = () => {
    return (
        <Breadcrumb>
            <BreadcrumbItem>
                <a href="#">Home</a>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <a href="#">Library</a>
            </BreadcrumbItem>
            <BreadcrumbItem active>Data</BreadcrumbItem>
        </Breadcrumb>
    );
};

export default Breadcrumbs;
