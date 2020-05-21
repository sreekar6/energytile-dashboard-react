import React from "react";

import "../css/dash_1.css"
import "../css/modules-widgets.css"
import "../css/structure.css"
import {API_URL} from "../constants/url";

class LiveTileInformation extends React.Component{
    state ={
        master : {},
        slave1 : {},
        slave2 : {},
        slave3 : {},
        slave4 : {},
        slave5 : {},
        slave6 : {},
        slave7 : {},
        m_cap : '0',
        s1_cap : '0',
        s2_cap : '0',
        s3_cap : '0',
        s4_cap : '0',
        s5_cap : '0',
        s6_cap : '0',
        s7_cap : '0'
    }

    componentDidMount() {
        this.fetchActivity();
        setInterval(this.fetchActivity,1000)
    }

    render() {
        return (
            <div className="widget widget-table-two" style={{paddingLeft:"10px", paddingRight: "10px", paddingTop: "30px"}}>

                <div className="widget-heading" style={{paddingLeft:"10px", paddingRight: "10px"}}>
                    <h5 className="">Energy Tiles Real-Time Status</h5>
                </div>

                <div className="widget-content">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                            <tr>
                                <th>
                                    <div className="th-content">Tile</div>
                                </th>

                                <th>
                                    <div className="th-content">IPv6</div>
                                </th>

                                <th>
                                    <div className="th-content">Impedance</div>
                                </th>

                                <th>
                                    <div className="th-content">Status</div>
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>
                                    <div className="td-content customer-name">{this.state.master.tile}</div>
                                </td>

                                <td>
                                    <div className="td-content">{this.state.master.ipv6}</div>
                                </td>

                                <td>
                                    <div className="td-content">{this.state.m_cap}</div>
                                </td>

                                {
                                    (this.state.master.live === 1) && <td>
                                        <div className="td-content"><span
                                            className="badge outline-badge-success">ON</span></div>
                                    </td>
                                }
                                {
                                    (this.state.master.live === 0) && <td>
                                        <div className="td-content"><span
                                            className="badge outline-badge-danger">OFF</span></div>
                                    </td>
                                }
                            </tr>
                            <tr>
                                <td>
                                    <div className="td-content customer-name">{this.state.slave1.tile}</div>
                                </td>

                                <td>
                                    <div className="td-content">{this.state.slave1.ipv6}</div>
                                </td>

                                <td>
                                    <div className="td-content">{this.state.s1_cap}</div>
                                </td>

                                {
                                    (this.state.slave1.live === 1) && <td>
                                        <div className="td-content"><span
                                            className="badge outline-badge-success">ON</span></div>
                                    </td>
                                }
                                {
                                    (this.state.slave1.live === 0) && <td>
                                        <div className="td-content"><span
                                            className="badge outline-badge-danger">OFF</span></div>
                                    </td>
                                }
                            </tr>
                            <tr>
                                <td>
                                    <div className="td-content customer-name">{this.state.slave2.tile}</div>
                                </td>

                                <td>
                                    <div className="td-content">{this.state.slave2.ipv6}</div>
                                </td>

                                <td>
                                    <div className="td-content">{this.state.s2_cap}</div>
                                </td>

                                {
                                    (this.state.slave2.live === 1) && <td>
                                        <div className="td-content"><span
                                            className="badge outline-badge-success">ON</span></div>
                                    </td>
                                }
                                {
                                    (this.state.slave2.live === 0) && <td>
                                        <div className="td-content"><span
                                            className="badge outline-badge-danger">OFF</span></div>
                                    </td>
                                }
                            </tr>
                            <tr>
                                <td>
                                    <div className="td-content customer-name">{this.state.slave3.tile}</div>
                                </td>

                                <td>
                                    <div className="td-content">{this.state.slave3.ipv6}</div>
                                </td>

                                <td>
                                    <div className="td-content">{this.state.s3_cap}</div>
                                </td>

                                {
                                    (this.state.slave3.live === 1) && <td>
                                        <div className="td-content"><span
                                            className="badge outline-badge-success">ON</span></div>
                                    </td>
                                }
                                {
                                    (this.state.slave3.live === 0) && <td>
                                        <div className="td-content"><span
                                            className="badge outline-badge-danger">OFF</span></div>
                                    </td>
                                }
                            </tr>
                            <tr>
                                <td>
                                    <div className="td-content customer-name">{this.state.slave4.tile}</div>
                                </td>

                                <td>
                                    <div className="td-content">{this.state.slave4.ipv6}</div>
                                </td>

                                <td>
                                    <div className="td-content">{this.state.s4_cap}</div>
                                </td>

                                {
                                    (this.state.slave4.live === 1) && <td>
                                        <div className="td-content"><span
                                            className="badge outline-badge-success">ON</span></div>
                                    </td>
                                }
                                {
                                    (this.state.slave4.live === 0) && <td>
                                        <div className="td-content"><span
                                            className="badge outline-badge-danger">OFF</span></div>
                                    </td>
                                }
                            </tr>
                            <tr>
                                <td>
                                    <div className="td-content customer-name">{this.state.slave5.tile}</div>
                                </td>

                                <td>
                                    <div className="td-content">{this.state.slave5.ipv6}</div>
                                </td>

                                <td>
                                    <div className="td-content">{this.state.s5_cap}</div>
                                </td>

                                {
                                    (this.state.slave5.live === 1) && <td>
                                        <div className="td-content"><span
                                            className="badge outline-badge-success">ON</span></div>
                                    </td>
                                }
                                {
                                    (this.state.slave5.live === 0) && <td>
                                        <div className="td-content"><span
                                            className="badge outline-badge-danger">OFF</span></div>
                                    </td>
                                }
                            </tr>
                            <tr>
                                <td>
                                    <div className="td-content customer-name">{this.state.slave6.tile}</div>
                                </td>

                                <td>
                                    <div className="td-content">{this.state.slave6.ipv6}</div>
                                </td>

                                <td>
                                    <div className="td-content">{this.state.s6_cap}</div>
                                </td>

                                {
                                    (this.state.slave6.live === 1) && <td>
                                        <div className="td-content"><span
                                            className="badge outline-badge-success">ON</span></div>
                                    </td>
                                }
                                {
                                    (this.state.slave6.live === 0) && <td>
                                        <div className="td-content"><span
                                            className="badge outline-badge-danger">OFF</span></div>
                                    </td>
                                }
                            </tr>
                            <tr>
                                <td>
                                    <div className="td-content customer-name">{this.state.slave7.tile}</div>
                                </td>

                                <td>
                                    <div className="td-content">{this.state.slave7.ipv6}</div>
                                </td>

                                <td>
                                    <div className="td-content">{this.state.s7_cap}</div>
                                </td>

                                {
                                    (this.state.slave7.live === 1) && <td>
                                        <div className="td-content"><span
                                            className="badge outline-badge-success">ON</span></div>
                                    </td>
                                }
                                {
                                    (this.state.slave7.live === 0) && <td>
                                        <div className="td-content"><span
                                            className="badge outline-badge-danger">OFF</span></div>
                                    </td>
                                }
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }

    fetchActivity = () => {
        fetch(`${API_URL}/api/liveip`)
            .then(response => response.json())
            .then(response => {
                this.setState({master : response[0]});
                this.setState({slave1 : response[1]});
                this.setState({slave2 : response[2]});
                this.setState({slave3 : response[3]});
                this.setState({slave4 : response[4]});
                this.setState({slave5 : response[5]});
                this.setState({slave6 : response[6]});
                this.setState({slave7 : response[7]});
                if(response[0].live === 1) {
                    fetch(`${API_URL}/api/master`)
                        .then(response => response.json())
                        .then(response => {
                            this.setState({m_cap : response[response.length - 1].cap});
                        });
                }
                if(response[1].live === 1) {
                    fetch(`${API_URL}/api/slave1`)
                        .then(response => response.json())
                        .then(response => {
                            this.setState({s1_cap : response[response.length - 1].cap});
                        });
                }
                if(response[2].live === 1) {
                    fetch(`${API_URL}/api/slave2`)
                        .then(response => response.json())
                        .then(response => {
                            this.setState({s2_cap : response[response.length - 1].cap});
                        });
                }
                if(response[3].live === 1) {
                    fetch(`${API_URL}/api/slave3`)
                        .then(response => response.json())
                        .then(response => {
                            this.setState({s3_cap : response[response.length - 1].cap});
                        });
                }
                if(response[4].live === 1) {
                    fetch(`${API_URL}/api/slave4`)
                        .then(response => response.json())
                        .then(response => {
                            this.setState({s4_cap : response[response.length - 1].cap});
                        });
                }
                if(response[5].live === 1) {
                    fetch(`${API_URL}/api/slave55`)
                        .then(response => response.json())
                        .then(response => {
                            this.setState({s5_cap : response[response.length - 1].cap});
                        });
                }
                if(response[6].live === 1) {
                    fetch(`${API_URL}/api/slave6`)
                        .then(response => response.json())
                        .then(response => {
                            this.setState({s6_cap : response[response.length - 1].cap});
                        });
                }
                if(response[7].live === 1) {
                    fetch(`${API_URL}/api/slave7`)
                        .then(response => response.json())
                        .then(response => {
                            this.setState({s7_cap : response[response.length - 1].cap});
                        });
                }
            })
    }
}

export default LiveTileInformation