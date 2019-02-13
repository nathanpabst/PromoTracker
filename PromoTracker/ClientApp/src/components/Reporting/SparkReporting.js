import React, { Component } from 'react';
import PromoRequests from '../Requests/PromoRequests';
import OrderRequests from '../Requests/OrderRequests';
import { Bar, GroupedBar } from 'britecharts-react';
import colors from 'britecharts/dist/umd/colors.min';

import './SparkReporting.css';

class Reporting extends Component {
    constructor(props) {
        super(props);

        this.state = {
            barData: [],
            groupedBarData: []
            
        };
    }

    componentDidMount() {
        this.getBarData();
        this.getGroupedBarData();
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

        const marginObject = {
            left: 40,
            right: 40,
            top: 40,
            bottom: 40
        };

        return (
            <div>
                <h2> Title Additions</h2>,

                <Bar
                    data={barData}
                    width={1000}
                    isHorizontal={false}
                    margin={marginObject}
                 />,

            <h2> Units Shipped & Print Fees</h2>,
            <GroupedBar
                data={groupedBarData}
                isHorizontal={true}
                width={500}
                height={500}
            />
    
            </div>
        );       
    }
}

export default Reporting;
