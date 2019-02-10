import React, { Component } from 'react';
//import Chart from './../Charts/Chart';
//import PromoRequests from '../Requests/PromoRequests';
import { Bar } from 'britecharts-react';
import './SparkReporting.css';

class Reporting extends Component {
    

    render() {
        const barData = [
            {
                value: 5000,
                name: 'FREEBOOK'
            },
            {
                value: 10000,
                name: 'GETSTARTED'
            },
            {
                value: 8500,
                name: 'NANO'
            }
        ];
        const marginObject = {
            left: 40,
            right: 40,
            top: 40,
            bottom: 40,
        };

        return(
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
