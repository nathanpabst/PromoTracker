import React, { Component } from 'react';
//import OrderRequests from './../Requests/OrderRequests';
//import { Table } from 'react-bootstrap';
//import Search from './../Search/Search';
import ChartTitleCount from './../Charts/ChartTitleCount';
import PromoRequests from '../Requests/PromoRequests';

import './SparkReporting.css';

class Reporting extends Component {
    constructor(props) {
        super(props);

        this.state = {
            chartData: props.chartData
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

        //const chartData = titles.map((title) =>
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
                    <ChartTitleCount 
                        chartData={this.state.chartData}
                    />;
                </div>                                                              
            </div>
            );
    }
}

export default Reporting;
