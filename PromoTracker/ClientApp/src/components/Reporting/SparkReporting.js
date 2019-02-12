import React, { Component } from 'react';
//import Chart from './../Charts/Chart';
import PromoRequests from '../Requests/PromoRequests';
import { Bar } from 'britecharts-react';
import colors from 'britecharts/dist/umd/colors.min';

import './SparkReporting.css';

class Reporting extends Component {
    constructor(props) {
        super(props);

        this.state = {
            barData: []
            
        };
    }

    componentDidMount() {
        this.getBarData();
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

        //const barData = [
        //    {
        //        value: 5000,
        //        name: 'FREEBOOK'
        //    },
        //    {
        //        value: 10000,
        //        name: 'GETSTARTED'
        //    },
        //    {
        //        value: 8500,
        //        name: 'NANO'
        //    }
        //];
        const marginObject = {
            left: 40,
            right: 40,
            top: 40,
            bottom: 40
        };

        return (
            <Bar
                data={barData}
                width={400}
                isHorizontal={false}
                margin={marginObject}
            />
            
        );
           
        
    }
}

export default Reporting;
