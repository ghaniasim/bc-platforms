import React, { Component } from 'react'
import { Bar } from 'react-chartjs-2';

class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: {
                labels: ['Male', 'Female'],
                datasets: [
                    {
                        label: 'Male',
                        data: [3],
                        backgroundColor: 'rgba(255, 99, 132, 0.6)'
                    },
                    {
                        label: 'Female',
                        data: [0,2],
                        backgroundColor: 'rgba(54, 162, 235, 0.6)'
                    },
                ]
            }
        }
    }

    render() {
        return (
            <div className="chart" style={{marginTop: 16, width: '50%'}}>
                <Bar 
                    data={this.state.chartData}
                    options={{
                        responsive: true,
                    }}
                />
            </div>
        )
    }
}

export default Chart;
