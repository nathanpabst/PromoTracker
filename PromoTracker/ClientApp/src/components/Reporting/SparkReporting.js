import React, { Component } from 'react';
import OrderRequests from './../Requests/OrderRequests';
import { Table } from 'react-bootstrap';

import './SparkReporting.css';

class Reporting extends Component {
    constructor(props) {
        super(props);

        this.state = {
            orders: []
        }
    }

    componentDidMount() {
        OrderRequests
            .getOrders()
            .then(orders => {

            })
    }
    render() {
        return (
            <div className="sparkReporting">
                <h1>IngramSpark Reporting</h1>
            </div>

            );
    }
}

export default Reporting;
