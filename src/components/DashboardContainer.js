import React from "react";
import ReactApexChart from 'apexcharts'
import Chart from "react-apexcharts";
import MasterAdc from "../adcCharts/MasterAdc";
import MasterCard from "../statusCards/MasterCard";
import Slave1Adc from "../adcCharts/Slave1Adc";
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component'
import Slave2Adc from "../adcCharts/Slave2Adc";
import Slave1Card from "../statusCards/Slave1Card";
import Slave2Card from "../statusCards/Slave2Card";
import Slave3Card from "../statusCards/Slave3Card";
import Slave4Card from "../statusCards/Slave4Card";
import Slave5Card from "../statusCards/Slave5Card";
import Slave6Card from "../statusCards/Slave6Card";
import Slave7Card from "../statusCards/Slave7Card";
import Slave3Adc from "../adcCharts/Slave3Adc";
import Slave4Adc from "../adcCharts/Slave4Adc";
import Slave5Adc from "../adcCharts/Slave5Adc";
import Slave6Adc from "../adcCharts/Slave6Adc";
import Slave7Adc from "../adcCharts/Slave7Adc";
import Timeline from "react-time-line";
import RecentActivity from "../Activity/RecentActivity";
class DashboardContainer extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            chartType : 'master',

        };
    }


    render() {
        return (
            <div className="container-fluid bg-dark" style={{width: '100%', height: '100%'}}>
                <h3 style={{color: '#ccc'}}> Energy Tile Dashboard</h3>
                <div className="row">
                    <div className="col-9" style={{marginTop: '10px'}}>
                        <div className="card-deck">
                            <MasterCard/>
                            <Slave2Card/>
                            <Slave4Card/>
                            <Slave6Card/>
                            <Slave1Card/>
                            <Slave3Card/>
                            <Slave5Card/>
                            <Slave7Card/>

                        </div>

                        <div style={{marginTop : '30px', padding: '70px', borderColor : '#ccc'}} className="card shadow bg-dark">
                            <select className="form-control col-2" placeholder="Device" onChange={(e) =>
                                this.setState({
                                chartType : e.target.value
                            })}>
                                <option value="master"> Master </option>
                                <option value="slave1"> Slave1 </option>
                                <option value="slave2"> Slave2 </option>
                                <option value="slave3"> Slave3 </option>
                                <option value="slave4"> Slave4 </option>
                                <option value="slave5"> Slave5 </option>
                                <option value="slave6"> Slave6 </option>
                                <option value="slave7"> Slave7 </option>
                            </select>
                            {
                                (this.state.chartType === 'master') && <MasterAdc
                                    options={this.state.options}
                                    series={this.state.series}
                                />
                            }
                            {
                                (this.state.chartType === 'slave1') && <Slave1Adc
                                    options={this.state.options}
                                    series={this.state.series}
                                />
                            }
                            {
                                (this.state.chartType === 'slave2') && <Slave2Adc
                                    options={this.state.options}
                                    series={this.state.series}
                                />
                            }
                            {
                                (this.state.chartType === 'slave3') && <Slave3Adc
                                    options={this.state.options}
                                    series={this.state.series}
                                />
                            }
                            {
                                (this.state.chartType === 'slave4') && <Slave4Adc
                                    options={this.state.options}
                                    series={this.state.series}
                                />
                            }
                            {
                                (this.state.chartType === 'slave5') && <Slave5Adc
                                    options={this.state.options}
                                    series={this.state.series}
                                />
                            }
                            {
                                (this.state.chartType === 'slave6') && <Slave6Adc
                                    options={this.state.options}
                                    series={this.state.series}
                                />
                            }
                            {
                                (this.state.chartType === 'slave7') && <Slave7Adc
                                    options={this.state.options}
                                    series={this.state.series}
                                />
                            }

                        </div>
                    </div>

                    <div className="col-3 card shadow bg-dark" style={{borderColor : '#ccc'}}>
                        <h5 style={{color: "#ccc"}}> Recent Activity </h5>
                        <RecentActivity/>
                    </div>

                </div>



            </div>
        );
    }
}


export default DashboardContainer
