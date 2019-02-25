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
            orderRatioData: [],
            unitsData: [],
            feeData: []
        };
    }

    componentDidMount() {
        this.getBarData();
        this.getGroupedBarData();
        this.getOrderRatioData();
        this.getUnitsShippedData();
        this.getFeeData();
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

    getUnitsShippedData() {
        OrderRequests
            .GetUnitsShipped()
            .then(unitsData => {
                this.setState({
                    unitsData: unitsData.data
                });
            })
            .catch(error => console.log(error));
    }

    getFeeData() {
        OrderRequests
            .GetPrintFees()
            .then(feeData => {
                this.setState({
                    feeData: feeData.data
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
        const { unitsData } = this.state;
        const { feeData } = this.state;

        const marginObject = {
            left: 40,
            right: 40,
            top: 40,
            bottom: 40
        };

        const UnitsMarginObject = {
            left: 120,
            right: 20,
            top: 20,
            bottom: 40
        };

        const orderTypeComponents = orderRatioData.map((type, i) => (
            <tr key={i}>
                <td>{type.name}</td>
                <td>{type.quantity.toLocaleString()}</td>
            </tr>
        ));


        return (
            <div className="reportingContainer">
                <div className="titleAdditionsContainer">
                    <h3 className="text-center"> Title Additions</h3>
                    <Bar
                        data={barData}
                        width={1000}
                        isAnimated={true}
                        isHorizontal={false}
                        margin={marginObject}
                    />
                </div>

                <div className="unitsContainer col-sm-12">
                    <h3 className="unitsShippedHeader text-center">Units Shipped by Promotion</h3>
                    <Bar
                        data={unitsData}
                        width={1000}
                        isHorizontal={true}
                        isAnimated={true}
                        margin={UnitsMarginObject}
                    />
                </div>
                <div className="feesContainer col-sm-12">
                    <h3 className="printFeesHeader text-center">Fees Collected by Promotion</h3>
                    <Bar
                        data={feeData}
                        isAnimated={true}
                        width={1000}
                        margin={UnitsMarginObject}
                    />
                </div>

                <div className="unitsShippedContainer">
                    <h3 className="text-center"> Units Shipped & Print Fees</h3>
                    <GroupedBar
                        data={groupedBarData}
                        isHorizontal={true}
                        width={1000}
                        height={750}
                    />
                </div>

                <div className="orderType">
                    <section>

                        <div className="orderTypeItem col-sm-6">
                            <h3 className="donutHeader"> Order Type Summary </h3>
                            <Donut
                                data={orderRatioData}
                                isAnimated={true}
                                width={300}
                                height={300}
                            />
                        </div>

                        <div className="orderTypeContainer">
                            <div className="orderTypeItem col-sm-6">
                                <h3 className="text-center">Aggregated Orders by Type</h3>
                                <div className="orderMethodTable">
                                    <Table striped bordered hover variant="dark">
                                        <thead>
                                            <tr>
                                                <th>Order Method</th>
                                                <th>Units Shipped</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {orderTypeComponents}
                                        </tbody>
                                    </Table>
                                </div>
                            </div>

                        </div>
                    </section>
                </div>


            </div >
        );
    }
}

export default Reporting;
