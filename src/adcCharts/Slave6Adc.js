import React from "react";
import Chart from "react-apexcharts";


class Slave6Adc extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        series: [],
        options: {}
    }
    componentDidMount() {
        this.fetchData();
        setInterval(this.fetchData,2000)
    }

    render() {
        return (
            <div id="chart">
                <Chart options={this.state.options} series={this.state.series} type="area" height={350} />
            </div>
        );
    }
    fetchData = () => {
        fetch('https://energytile-dashboard.herokuapp.com/api/slave6')
            .then(response => response.json())
            .then(response => {
                    // console.log(response)
                    let series = [];
                    let timestamp = [];
                    response.forEach( data =>{
                        // console.log("each dataset-->", data)
                        series.push(data.adc);
                        timestamp.push(data.id)
                    });
                    // console.log(series);
                    // console.log(timestamp);
                    this.setState({series : [{name: "ADC", data: series}]});
                    this.setState({options: {
                            chart: {
                                height: 350,
                                type: 'area',
                                foreColor: "#ccc",
                            },
                            dataLabels: {
                                enabled: false,
                            },
                            stroke: {
                                curve: 'smooth'
                            },
                            markers: {
                                size: 5,
                                colors: ["#000524"],
                                strokeColor: "#00BAEC",
                                strokeWidth: 3
                            },
                            grid: {
                                borderColor: "#555",
                                clipMarkers: false,
                                yaxis: {
                                    lines: {
                                        show: false
                                    }
                                }
                            },
                            xaxis: {
                                type: 'datetime',
                                categories: timestamp,
                            },
                            tooltip: {
                                x: {
                                    format: 'dd/MM/yy HH:mm'
                                },
                            },
                        }})

                }
            )
    }
}

export default Slave6Adc
