import React from "react";
import Chart from "react-apexcharts";


class Slave1Adc extends React.Component {
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
        fetch('https://energytile-dashboard.herokuapp.com/api/slave1')
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
                                fontFamily: 'Nunito, sans-serif',
                                height: 365,
                                type: 'area',
                                foreColor: "#ccc",
                                zoom: {
                                    enabled: false
                                },
                                dropShadow: {
                                    enabled: true,
                                    opacity: 0.3,
                                    blur: 5,
                                    left: -7,
                                    top: 22
                                },
                                toolbar: {
                                    show: false
                                },
                            },
                            colors: ['#1b55e2', '#e7515a'],
                            dataLabels: {
                                enabled: false
                            },
                            stroke: {
                                show: true,
                                curve: 'smooth',
                                width: 2,
                                lineCap: 'square'
                            },
                            markers: {
                                discrete: [{
                                    seriesIndex: 0,
                                    dataPointIndex: 7,
                                    fillColor: '#000',
                                    strokeColor: '#000',
                                    size: 5
                                }, {
                                    seriesIndex: 2,
                                    dataPointIndex: 11,
                                    fillColor: '#000',
                                    strokeColor: '#000',
                                    size: 4
                                }]
                            },
                            grid: {
                                borderColor: '#191e3a',
                                strokeDashArray: 5,
                                xaxis: {
                                    lines: {
                                        show: true
                                    }
                                },
                                yaxis: {
                                    lines: {
                                        show: false,
                                    }
                                },
                                padding: {
                                    top: 0,
                                    right: 0,
                                    bottom: 0,
                                    left: -10
                                },
                            },
                            yaxis: {
                                labels: {
                                    offsetX: -15,
                                    offsetY: 0,
                                    style: {
                                        fontSize: '12px',
                                        fontFamily: 'Nunito, sans-serif',
                                        cssClass: 'apexcharts-yaxis-title',
                                    },
                                }
                            },
                            xaxis: {
                                type: 'datetime',
                                categories: timestamp,
                                axisBorder: {
                                    show: false
                                },
                                axisTicks: {
                                    show: false
                                },
                                crosshairs: {
                                    show: true
                                },
                                labels: {
                                    offsetX: 0,
                                    offsetY: 5,
                                    style: {
                                        fontSize: '12px',
                                        fontFamily: 'Nunito, sans-serif',
                                        cssClass: 'apexcharts-xaxis-title',
                                    },
                                }
                            },
                            legend: {
                                position: 'top',
                                horizontalAlign: 'right',
                                // offsetY: -50,
                                fontSize: '16px',
                                fontFamily: 'Nunito, sans-serif',
                                markers: {
                                    width: 10,
                                    height: 10,
                                    strokeWidth: 0,
                                    strokeColor: '#fff',
                                    fillColors: undefined,
                                    radius: 12,
                                    onClick: undefined,
                                    offsetX: 0,
                                    offsetY: 0
                                },
                                itemMargin: {
                                    horizontal: 0,
                                    vertical: 20
                                }
                            },
                            tooltip: {
                                theme: 'dark',
                                marker: {
                                    show: true,
                                },
                                x: {
                                    show: false,
                                    format: 'dd/MM/yy HH:mm'
                                }
                            },
                            fill: {
                                type:"gradient",
                                gradient: {
                                    type: "vertical",
                                    shadeIntensity: 1,
                                    inverseColors: !1,
                                    opacityFrom: .28,
                                    opacityTo: .05,
                                    stops: [45, 100]
                                }
                            },
                            responsive: [{
                                breakpoint: 575,
                                options: {
                                    legend: {
                                        offsetY: -30,
                                    },
                                },
                            }]
                        }})

                }
            )
    }

}

export default Slave1Adc
