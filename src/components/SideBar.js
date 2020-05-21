import React from "react";

class SideBar extends React.Component{
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
            <nav className="sidebar-wrapper sidebar-theme"  style={{background: '#060818'}}>
                <nav id="sidebar">
                    <div className="shadow-bottom"></div>
                    <ul className="list-unstyled menu-categories" id="accordionExample" style={{paddingTop : '20px'}}>
                        <li className="menu" >
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

                        <li className="menu" style={{ marginTop : '10px'}}>
                            <div className="dropdown show">
                                <a className="btn" style={{borderRadius : '6px'}} onClick={() => this.setState({
                                    showEnergyTile : !this.state.showEnergyTile
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
                                { this.state.showEnergyTile &&
                                <ul style={{marginTop: "10px"}}>
                                    <li style={{margin: '10px',color: '#479788', fontFamily: 'Nunito Sans', fontSize : '13px', fontWeight : '600'}}>Energy Tile App</li>
                                    <li style={{margin: '10px',color: '#479788', fontFamily: 'Nunito Sans', fontSize : '13px', fontWeight : '600'}}>Work Pad App</li>
                                </ul>
                                }
                            </div>
                        </li>

                        <li className="menu" style={{ marginTop : '10px'}}>
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
                                    <li style={{margin: '10px',color: '#479788', fontFamily: 'Nunito Sans', fontSize : '13px', fontWeight : '600'}}>Energy Tile</li>
                                    <li style={{margin: '10px',color: '#479788', fontFamily: 'Nunito Sans', fontSize : '13px', fontWeight : '600'}}>Work Pad</li>
                                </ul>
                                }
                            </div>
                        </li>
                        {/*<li className="menu">*/}
                        {/*    <a href="#dashboard" data-active="true" data-toggle="collapse" aria-expanded="false"*/}
                        {/*       className="dropdown-toggle">*/}
                        {/*        <div className="">*/}
                        {/*            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"*/}
                        {/*                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"*/}
                        {/*                 stroke-linejoin="round" className="feather feather-home">*/}
                        {/*                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>*/}
                        {/*                <polyline points="9 22 9 12 15 12 15 22"></polyline>*/}
                        {/*            </svg>*/}
                        {/*            <span>Dashboard</span>*/}
                        {/*        </div>*/}
                        {/*        <div>*/}
                        {/*            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"*/}
                        {/*                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"*/}
                        {/*                 stroke-linejoin="round" className="feather feather-chevron-right">*/}
                        {/*                <polyline points="9 18 15 12 9 6"></polyline>*/}
                        {/*            </svg>*/}
                        {/*        </div>*/}
                        {/*    </a>*/}
                        {/*    <ul className="collapse submenu list-unstyled show" id="dashboard"*/}
                        {/*        data-parent="#accordionExample">*/}
                        {/*        <li className="active">*/}
                        {/*            <a href="index.html"> Sales </a>*/}
                        {/*        </li>*/}
                        {/*        <li>*/}
                        {/*            <a href="index2.html"> Analytics </a>*/}
                        {/*        </li>*/}
                        {/*    </ul>*/}
                        {/*</li>*/}

                    </ul>
                    <div className="shadow-bottom"></div>
                </nav>

            </nav>
        );
    }

}

export default SideBar