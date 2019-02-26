import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import './Navbar.css';

class NavBar extends React.Component {
    render() {

        return (
            <Navbar inverse collapseOnSelect className="menu">
                <div className="container-fluid">
                <Navbar.Header>
                    <Navbar.Brand className="navbar-brand">
                        <Link to="/">PromoTracker</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false"/>
                    </Navbar.Header>
                

                <Navbar.Collapse>
                    <Nav className="nav navbar-nav navbar-right">                       
                        <LinkContainer to="/bookSpark">
                            <NavItem href="/bookSpark">
                                Promotions
                            </NavItem>
                        </LinkContainer>
                        <LinkContainer to="/sparkReporting">
                            <NavItem href="/sparkReporting">
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
                </div>

            </Navbar>
        );
    }
}

export default NavBar;
