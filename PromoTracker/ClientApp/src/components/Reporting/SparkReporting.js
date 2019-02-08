import React, { Component } from 'react';
import OrderRequests from './../Requests/OrderRequests';
import { Table } from 'react-bootstrap';
import Search from './../Search/Search';

import './SparkReporting.css';
import PromoRequests from '../Requests/PromoRequests';

class Reporting extends Component {
    constructor(props) {
        super(props);

        this.state = {
            orders: [],
            titles: [],
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

        PromoRequests
            .getTitleCountWithPromo()
            .then(titles => {
                this.setState({
                    titles: titles.data
                });
            })
            .catch(error => console.log(error));
    }


    updateSearchInput = (searchTerm) => 
        this.setState({searchTerm})
    

    render() {
        const { orders } = this.state;

        const { titles } = this.state;

        const orderComponents = orders.map((order, index) => (
            <tr key={index}>
                <td>{order.name}</td>
                <td>{order.unitsShipped}</td>
                <td>{order.printFees}</td>
            </tr>
        ));

        const titleComponents = titles.map((title, index) => (
            <tr key={index}>
                <td>{title.promotionName}</td>
                <td>{title.titleCount}</td>
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

                <div className="panel panel-primary">
                    <div className="panel-heading">Title Counts</div>
                    <div className="panel-body">
                        <Table striped bordered hover size="sm">
                            <thead>
                                <tr>
                                    <th>Promotion Name</th>
                                    <th>Title Additions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {titleComponents}
                            </tbody>
                        </Table>
                    </div>
                </div>
                
            </div>

            );
    }
}

export default Reporting;
