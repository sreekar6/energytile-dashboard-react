import React from "react";
import MasterCard from "../statusCards/MasterCard";
import Slave2Card from "../statusCards/Slave2Card";
import Slave4Card from "../statusCards/Slave4Card";
import Slave6Card from "../statusCards/Slave6Card";
import Slave1Card from "../statusCards/Slave1Card";
import Slave3Card from "../statusCards/Slave3Card";
import Slave5Card from "../statusCards/Slave5Card";
import Slave7Card from "../statusCards/Slave7Card";
import MasterAdc from "../adcCharts/MasterAdc";
import Slave1Adc from "../adcCharts/Slave1Adc";
import Slave2Adc from "../adcCharts/Slave2Adc";
import Slave3Adc from "../adcCharts/Slave3Adc";
import Slave4Adc from "../adcCharts/Slave4Adc";
import Slave5Adc from "../adcCharts/Slave5Adc";
import Slave6Adc from "../adcCharts/Slave6Adc";
import Slave7Adc from "../adcCharts/Slave7Adc";
import RecentActivity from "../Activity/RecentActivity";
import PerfectScrollbar from "react-perfect-scrollbar";
import '../css/modules-widgets.css'

class EnergyTiles extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            chartType : 'master',

        };
    }


    render() {
        return (
            <div class="main-content">
            <div className="container-fluid " style={{width: '100%', height: '100%', backgroundColor: "#060818"}}>
                {/*<h3 style={{color: 'white', fontFamily: 'Nunito Sans'}}> Energy Tile Dashboard</h3>*/}
                {/*<div className="row">*/}
                {/*    <div className="col-9" style={{marginTop: '10px'}}>*/}
                <div className="row offset-xl-0" style={{marginLeft: "30px", display : 'flex'}}>
                    <div className="card-deck shadow">
                        <div className='row'>
                            <MasterCard/>
                            <Slave2Card/>
                            <Slave4Card/>
                            <Slave6Card/>
                        </div>
                        <div className="row">
                            <Slave1Card/>
                            <Slave3Card/>
                            <Slave5Card/>
                            <Slave7Card/>
                        </div>
                    </div>
                </div>

                <div className="row" style={{marginTop : '20px'}}>
                    <div className="col-xl-8 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing" >
                        <div style={{paddingTop: '10px',paddingLeft: '20px',paddingRight: '10px',borderRadius: '10px',marginBottom:'10px', backgroundColor: '#0e1726'}} className="card shadow">
                            <p style={{fontSize : '20px'}}>Sensing Data : ADC Values
                                <button className='btn btn-danger btn-sm' style={{float: 'right'}}><span>Live</span></button>
                            </p>
                            <select className="form-control col-2 bg-transparent" style={{color: '#ccc'}} placeholder="Device" onChange={(e) =>
                                this.setState({
                                    chartType : e.target.value
                                })}>
                                <option value="master"> Master Tile</option>
                                <option value="slave1"> Slave1 Tile</option>
                                <option value="slave2"> Slave2 Tile</option>
                                <option value="slave3"> Slave3 Tile</option>
                                <option value="slave4"> Slave4 Tile</option>
                                <option value="slave5"> Slave5 Tile</option>
                                <option value="slave6"> Slave6 Tile</option>
                                <option value="slave7"> Slave7 Tile</option>
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

                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing">

                        <RecentActivity/>
       
                    </div>   
                </div>
            </div>
            </div>
        );
    }
}


export default EnergyTiles
