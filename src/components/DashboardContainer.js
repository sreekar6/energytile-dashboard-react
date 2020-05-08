import React from "react";
import EnergyTiles from "./EnergyTiles";
import green from '../images/green.png'
import ca from '../images/ca.png'
import logo from '../images/90x90.jpg'
import '../css/structure.css'
import {BrowserRouter as Router, Link, Route} from "react-router-dom";

class DashboardContainer extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            showDashboard : false,
            showApps : false,
            showEnergyTile : false,
        };
    }

    render() {
        return (
            <div className="bg-dark">
                <nav className="navbar navbar-expand-sm" style={{background: '#060818'}}>
                    <a className="navbar-brand" href="#">
                        <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="" style={{borderRadius : '5px', justifyContent :'space-between'}}/>
                        <a style={{color: 'white', fontFamily: 'Nunito Sans', fontSize : '24px', fontWeight : '700', paddingLeft : '10px'}}> DeepCharge</a>

                        <a style={{marginLeft : '1100px'}}><img src={ca} width="25" height="25" alt="flag"/></a>
                        <a style={{margin : '10px'}}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="#e0e6ed" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" className="feather feather-mail">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                            <polyline points="22,6 12,13 2,6"/>
                        </svg>
                        </a>
                        <a><img src={logo} width="30" height="30" className="d-inline-block align-top" alt="" style={{borderRadius : '5px', marginTop : '5px'}} alt="avatar"/></a>

                    </a>

                </nav>

                <nav className="navbar navbar-expand-sm" style={{background: '#1a1c2d'}}>
                    <a className="navbar-brand" href="#">
                        <a href="#" className="sidebarCollapse" data-placement="bottom">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="#e0e6ed" stroke-width="2" stroke-linecap="round"
                                 stroke-linejoin="round" className="feather feather-menu">
                                <line x1="3" y1="12" x2="21" y2="12"/>
                                <line x1="3" y1="6" x2="21" y2="6"/>
                                <line x1="3" y1="18" x2="21" y2="18"/>
                            </svg>
                        </a>

                        <a style={{color: '#e0e6ed', fontFamily: 'Nunito Sans', fontSize : '15px', fontWeight : '700', paddingLeft : '10px'}}>Dashboard /</a>
                        <a style={{color: '#e0e6ed', fontFamily: 'Nunito Sans', fontSize : '15px', fontWeight : '700'}}> Energy Tile</a>
                    </a>
                </nav>

                <div className="row">
                    <div className="col-2">
                        <nav className="sidebar-wrapper" style={{background: '#060818'}}>
                            <ul className="list-unstyled menu-categories" id="accordionExample" style={{paddingTop : '20px'}}>
                                <li className="menu" style={{marginLeft : '25px'}}>
                                    <div className="dropdown show">
                                        <a className="btn" style={{background : '#364756', borderRadius : '6px'}} onClick={() => this.setState({
                                            showDashboard : !this.state.showDashboard
                                        })}>
                                            <div className="">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                     viewBox="0 0 24 24" fill="none" stroke="#e0e6ed"
                                                     stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                     className="feather feather-home">
                                                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                                                    <polyline points="9 22 9 12 15 12 15 22"/>
                                                </svg>
                                                <span style={{color: '#e0e6ed', fontFamily: 'Nunito Sans', fontSize : '14px', fontWeight : '700', marginLeft : '20px', marginRight : '25px'}}>Dashboard</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15"
                                                     viewBox="0 0 24 24" fill="none" stroke="#e0e6ed"
                                                     stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                     className="feather feather-chevron-right">
                                                    <polyline points="9 18 15 12 9 6"></polyline>
                                                </svg>
                                            </div>

                                        </a>
                                        {
                                            this.state.showDashboard &&
                                            <ul style={{marginTop: "10px"}}>
                                                <li style={{margin: '10px',color: '#479788', fontFamily: 'Nunito Sans', fontSize : '13px', fontWeight : '600'}}>Energy Tiles</li>
                                                <li style={{margin: '10px',color: '#479788', fontFamily: 'Nunito Sans', fontSize : '13px', fontWeight : '600'}}>Work Pad</li>
                                            </ul>
                                        }
                                    </div>
                                </li>

                                <li className="menu" style={{marginLeft : '25px', marginTop : '10px'}}>
                                    <div className="dropdown show">
                                        <a className="btn" style={{borderRadius : '6px'}} onClick={() => this.setState({
                                            showApps : !this.state.showApps
                                        })}>
                                            <div className="">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                     viewBox="0 0 24 24" fill="none" stroke="#e0e6ed"
                                                     stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                     className="feather feather-cpu">
                                                    <rect x="4" y="4" width="16" height="16" rx="2" ry="2"/>
                                                    <rect x="9" y="9" width="6" height="6"/>
                                                    <line x1="9" y1="1" x2="9" y2="4"/>
                                                    <line x1="15" y1="1" x2="15" y2="4"/>
                                                    <line x1="9" y1="20" x2="9" y2="23"/>
                                                    <line x1="15" y1="20" x2="15" y2="23"/>
                                                    <line x1="20" y1="9" x2="23" y2="9"/>
                                                    <line x1="20" y1="14" x2="23" y2="14"/>
                                                    <line x1="1" y1="9" x2="4" y2="9"/>
                                                    <line x1="1" y1="14" x2="4" y2="14"/>
                                                </svg>
                                                <span style={{color: '#e0e6ed', fontFamily: 'Nunito Sans', fontSize : '14px', fontWeight : '700', marginLeft : '20px', marginRight : '63px'}}>Apps</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15"
                                                     viewBox="0 0 24 24" fill="none" stroke="#e0e6ed"
                                                     stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                     className="feather feather-chevron-right">
                                                    <polyline points="9 18 15 12 9 6"></polyline>
                                                </svg>
                                            </div>

                                        </a>
                                        { this.state.showApps &&
                                        <ul style={{marginTop: "10px"}}>
                                            <li style={{margin: '10px',color: '#479788', fontFamily: 'Nunito Sans', fontSize : '13px', fontWeight : '600'}}>Energy Tile App</li>
                                            <li style={{margin: '10px',color: '#479788', fontFamily: 'Nunito Sans', fontSize : '13px', fontWeight : '600'}}>Work Pad App</li>
                                        </ul>
                                        }
                                    </div>
                                </li>

                                <li className="menu" style={{marginLeft : '25px', marginTop : '10px'}}>
                                    <div className="dropdown show">
                                        <a className="btn" style={{ borderRadius : '6px'}} onClick={() => this.setState({
                                            showApps : !this.state.showApps
                                        })}>
                                            <div className="">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                     viewBox="0 0 24 24" fill="none" stroke="#e0e6ed"
                                                     stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                     className="feather feather-cpu">
                                                    <rect x="4" y="4" width="16" height="16" rx="2" ry="2"/>
                                                    <rect x="9" y="9" width="6" height="6"/>
                                                    <line x1="9" y1="1" x2="9" y2="4"/>
                                                    <line x1="15" y1="1" x2="15" y2="4"/>
                                                    <line x1="9" y1="20" x2="9" y2="23"/>
                                                    <line x1="15" y1="20" x2="15" y2="23"/>
                                                    <line x1="20" y1="9" x2="23" y2="9"/>
                                                    <line x1="20" y1="14" x2="23" y2="14"/>
                                                    <line x1="1" y1="9" x2="4" y2="9"/>
                                                    <line x1="1" y1="14" x2="4" y2="14"/>
                                                </svg>
                                                <span style={{color: '#e0e6ed', fontFamily: 'Nunito Sans', fontSize : '14px', fontWeight : '700', marginLeft : '20px', marginRight : '0px'}}>Admin Control</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15"
                                                     viewBox="0 0 24 24" fill="none" stroke="#e0e6ed"
                                                     stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                     className="feather feather-chevron-right">
                                                    <polyline points="9 18 15 12 9 6"></polyline>
                                                </svg>
                                            </div>

                                        </a>
                                        { this.state.showApps &&
                                        <ul style={{marginTop: "10px"}}>
                                            <li style={{margin: '10px',color: '#479788', fontFamily: 'Nunito Sans', fontSize : '13px', fontWeight : '600'}}>Energy Tile App</li>
                                            <li style={{margin: '10px',color: '#479788', fontFamily: 'Nunito Sans', fontSize : '13px', fontWeight : '600'}}>Work Pad App</li>
                                        </ul>
                                        }
                                    </div>
                                </li>

                            </ul>
                        </nav>
                    </div>

                    <div className="col-10">
                        <Router>
                            <Route path="/"
                                   render={() => <EnergyTiles/>}
                            />
                        </Router>
                    </div>

                </div>

            </div>
        );
    }
}


export default DashboardContainer
