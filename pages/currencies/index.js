import React, { useState } from 'react';

import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const Currencies = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Navbar color="light" light expand="md">
            <NavbarBrand href="/">Crypto Live</NavbarBrand>
            <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink href="/currencies/">Currencies</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/Markets/">Markets</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/volume/">Volume</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/exchange-rates/">Exchange Rates</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
            PRomijeni to
        </Navbar>
    );
};

export default Currencies;
