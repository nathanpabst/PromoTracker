import React, { Component } from 'react';
import { Bar } from 'britecharts-react';
import colors from 'britecharts/dist/umd/colors.min';


class Chart extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            chartData: props.chartData           
        };
    }

    render() {
        const { chartData } = this.state;

        return (
            <div className="chart-container">               
                Chart Component  
            </div>
        );
    }
}

export default Chart;

