import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import './Navbar.scss';

class NavBar extends React.Component {
    render() {

        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand className="navbar-brand">
                        <Link to="/">Promo Code Tracker</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>                       
                        <LinkContainer to="/ingramspark">
                            <NavItem href="/ingramspark">
                                IngramSpark
                            </NavItem>
                        </LinkContainer>
                        <LinkContainer to="/reporting">
                            <NavItem href="/reporting">
                                Reporting
                            </NavItem>
                        </LinkContainer>
                        <LinkContainer to="/admin">
                            <NavItem href="/admin">
                                Admin
                            </NavItem>
                        </LinkContainer>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default NavBar;
