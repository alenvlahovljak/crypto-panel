import React, { useState } from 'react';

import {
    Collapse,
    Container,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    NavLink
} from 'reactstrap';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Navbar color="light" light expand="md">
            <Container>
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
            </Container>
        </Navbar>
    );
};

export default Header;
