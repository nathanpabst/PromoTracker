import React, { Component } from 'react';
import OrderRequests from './../Requests/OrderRequests';
import { Table } from 'react-bootstrap';
import Search from './../Search/Search';

import './SparkReporting.css';

class Reporting extends Component {
    constructor(props) {
        super(props);

        this.state = {
            orders: [],
            searchTerm: ''
        };
    }

    componentDidMount() {
        OrderRequests
            .GetAggregatedOrderData()
            .then(orders => {
                this.setState({
                    orders: orders.data
                });
            })
            .catch(error => console.log(error));      
    }

    updateSearchInput = (searchTerm) => 
        this.setState({searchTerm})
    

    render() {
        const { orders } = this.state;

        const orderComponents = orders.map((order) => (
            <tr>
                <td>{order.name}</td>
                <td>{order.unitsShipped}</td>
                <td>{order.printFees}</td>
            </tr>
        ));
               
        return (
            <div className="sparkReporting">
                <Search
                    onSearch={this.updateSearchInput}
                    searchTerm={this.state.searchTerm}
                />                   

                <div className="panel panel-primary">
                    <div className="panel-heading">Orders</div>
                    <div className="panel-body">
                        <Table striped bordered hover size="sm">
                            <thead>
                                <tr>
                                    <th>Promotion Name</th>
                                    <th>Units Shipped</th>
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
