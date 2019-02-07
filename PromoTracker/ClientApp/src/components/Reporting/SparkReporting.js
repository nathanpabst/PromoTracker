import React, { Component } from 'react';
import OrderRequests from './../Requests/OrderRequests';
import { Table, Button } from 'react-bootstrap';

import './SparkReporting.css';
import PromoRequests from '../Requests/PromoRequests';

class Reporting extends Component {
    constructor(props) {
        super(props);

        this.state = {
            orders: [],
            promos: []
        };
    }

    componentDidMount() {
        OrderRequests
            .getOrders()
            .then(orders => {
                this.setState({
                    orders: orders.data
                });
            })
            .catch(error => console.log(error));
        PromoRequests
            .getPromos()
            .then(promos => {
                this.setState({
                    promos: promos.data
                });
            })
            .catch(error => console.log(error));
    }

    render() {
        const { orders } = this.state;

        const orderComponents = orders.map((order) => (
            <tr key={order.id}>
                <td>{order.orderNumber}</td>
                <td>{order.bookId}</td>
                <td>{order.orderDate}</td>
                <td>{order.quantity}</td>
                <td>{order.orderTypeId}</td>
                <td>{order.printFee}</td>
            </tr>
        ));

        const { promos } = this.state;

        const promoComponents = promos.map((promo) => (
            <tr key={promo.id}>
                <td>{promo.name}</td>
                <td>
                    <Button
                        
                    >
                        View
                    </Button>
                </td>
            </tr>
        ));

        
        return (
            <div className="sparkReporting">
                <h1>IngramSpark Reporting</h1>
                <h3>Search Placeholder</h3>

                <div className="panel panel-primary">
                    <div className="panel-heading">Promotions</div>
                    <div className="panel-body">
                        <Table striped bordered hover size="sm">
                            <thead>
                                <tr>
                                    <th>Promotion Name</th>
                                    <th>Results</th>
                                </tr>
                            </thead>
                            <tbody>
                                {promoComponents}
                            </tbody>
                        </Table>
                    </div>
                </div>


                <div className="panel panel-primary">
                    <div className="panel-heading"> Orders </div>
                    <div className="panel-body">
                        <Table striped bordered hover size="sm">
                            <thead>
                                <tr>
                                    <th>Order Number</th>
                                    <th>Book Id</th>
                                    <th>Order Date</th>
                                    <th>Quantity</th>
                                    <th>Order Type Id</th>
                                    <th>Print Fees</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orderComponents}
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>

            );
    }
}

export default Reporting;
