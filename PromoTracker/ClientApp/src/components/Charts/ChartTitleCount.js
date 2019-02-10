import React, { Component } from 'react';
import { Bar } from 'britecharts-react';
import colors from 'britecharts/dist/umd/colors.min';


class ChartTitleCount extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            chartData: this.props.chartData
            //or chartData: {
            //value: this.props..
            //name: this.props..
            //}
        };
    }

    render() {

        return (
            <div className="chart">
                Chart Component

                
            </div>

        );
    }
}

export default ChartTitleCount;

