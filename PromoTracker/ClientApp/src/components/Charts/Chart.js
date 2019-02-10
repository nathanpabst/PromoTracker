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

        return (
            <div className="chart-container">               
                <Bar
                    ChartData={this.state.chartData}
                    colorSchema={colors.colorSchemas.orange}
                    loadingState={''}
                    isHorizontal
                    height={600}
                    width={400}
                    betweenBarsPadding={0.3}
                    margin={{
                        left: 100,
                        right: 40,
                        top: 40,
                        bottom: 40
                    }}
                />                
            </div>
        );
    }
}

export default Chart;

