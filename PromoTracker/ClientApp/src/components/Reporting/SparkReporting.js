import React, { Component } from 'react';
//import OrderRequests from './../Requests/OrderRequests';
//import { Table } from 'react-bootstrap';
//import Search from './../Search/Search';
import Chart from './../Charts/Chart';
import PromoRequests from '../Requests/PromoRequests';

import './SparkReporting.css';

class Reporting extends Component {
    constructor(props) {
        super(props);

        this.state = {
            chartData: {}
        };
    }
    componentWillMount() {
        this.getChartData();
    }  

    getChartData() {
        PromoRequests
            .getTitleCountWithPromo()
            .then(chartData => {
                this.setState({
                    chartData: chartData.data                   
                });
            })
            .catch(error => console.log(error));
    }

    render() {
        const { chartData } = this.state;

        //const { data } = this.state.chartData && (
        //    <Chart
        //        chartData={this.state.chartData}
        //    />);
        
        //const data = titles.map((title) =>
        //    (return
        //{
        //    {
        //        name: title.promotionName
        //        value: title.titleCount
        //    }
        //}));
             
        return (
            <div className="sparkReporting">             
                <div className="titleCountChart">
                    Chart Component
                    <Chart
                        chartData={this.state.chartData}
                    />
                </div>                                                              
            </div>
            );
    }
}

export default Reporting;
