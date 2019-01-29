import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.scss';

class Navbar extends React.Component {
    render() {

    return (
            <div className="Navbar navbar-fixed-top">
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link to="/" className="navbar-brand">Promo Code Tracker</Link>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        {
                            <ul className="nav navbar-nav navbar-right">
                                <li>
                                    <Link to="/ingramspark" className="navbar-brand">IngramSpark</Link>
                                </li>
                                <li>
                                    <Link to="/reporting" className="navbar-brand">Reporting</Link>
                                </li>
                                <li>
                                    <Link to="/admin" className="navbar-brand">Admin</Link>
                                </li>
                            </ul>
                        }
                    </div>
                </div>
            </nav>
          </div>
          );

    };
}

export default Navbar;
