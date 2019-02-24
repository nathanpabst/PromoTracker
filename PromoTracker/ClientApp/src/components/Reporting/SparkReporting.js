import React, { Component } from 'react';
import PromoRequests from '../Requests/PromoRequests';
import OrderRequests from '../Requests/OrderRequests';
import { Table } from 'react-bootstrap';
import { Bar, GroupedBar, Donut } from 'britecharts-react';

import './SparkReporting.css';

class Reporting extends Component {
    constructor(props) {
        super(props);

        this.state = {
            barData: [],
            groupedBarData: [],
            orderRatioData: []

        };
    }

    componentDidMount() {
        this.getBarData();
        this.getGroupedBarData();
        this.getOrderRatioData();
    }

    getOrderRatioData() {
        OrderRequests
            .GetOrderTypeRatio()
            .then(orderRatioData => {
                this.setState({
                    orderRatioData: orderRatioData.data
                });
            })
            .catch(error => console.log(error));
    }

    getGroupedBarData() {
        OrderRequests
            .GetAggregatedOrderData()
            .then(groupedBarData => {

                this.setState({
                    groupedBarData: groupedBarData.data
                });
            })
            .catch(error => console.log(error));
    }

    getBarData() {
        PromoRequests
            .getTitleCountWithPromo()
            .then(barData => {
                let data = barData.data.map((promo) => {
                    return {
                        name: promo.promotionName,
                        value: promo.titleCount
                    };
                });

                this.setState({
                    barData: data
                });
            })
            .catch(error => console.log(error));
    }

    render() {
        const { barData } = this.state;
        const { groupedBarData } = this.state;
        const { orderRatioData } = this.state;

        const marginObject = {
            left: 40,
            right: 40,
            top: 40,
            bottom: 40
        };

        const orderTypeComponents = orderRatioData.map((type, i) => (
            <tr key={i}>
                <td>{type.name}</td>
                <td>{type.quantity.toLocaleString()}</td>
            </tr>
        ));

        return (
            <div>
                <div className="titleAdditionsContainer">
                    <h2 className="text-center"> Title Additions</h2>

                    <Bar
                        data={barData}
                        width={1000}
                        isAnimated={true}
                        isHorizontal={false}
                        margin={marginObject}
                    />
                </div>

                <div className="unitsShippedContainer">
                    <h2 className="text-center"> Units Shipped & Print Fees</h2>
                    <GroupedBar
                        data={groupedBarData}
                        isHorizontal={true}
                        width={1000}
                        height={750}
                    />
                </div>

                <div className="orderRatioContainer">
                    <h2 className="text-center"> Order Type Ratio</h2>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th> Order Type </th>
                                <th> Order Quantity </th>
                            </tr>
                        </thead>

                            <tbody>
                                {orderTypeComponents}
                            </tbody>
                    </Table>

                    <Donut
                        data={orderRatioData}
                        isAnimated={true}
                        width={500}
                        height={500}
                    />
                </div>



            </div>
        );
    }
}

export default Reporting;
