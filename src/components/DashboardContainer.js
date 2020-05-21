import React from "react";
import EnergyTiles from "./EnergyTiles";
import ca from '../images/ca.png'
import logo from '../images/90x90.jpg'
import '../css/structure.css'
import SideBar from "./SideBar";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";


class DashboardContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showSide : false,
        };
    }

    render() {
        return (
            <div>

                <div className="header-container fixed-top">
                    <header className="header navbar navbar-expand-sm">

                        <ul className="navbar-item theme-brand flex-row  text-center">
                            <li className="nav-item theme-logo">
                                <a href="#">
                                    <img src={logo} className="navbar-logo" alt="logo"></img>
                                </a>
                            </li>
                            <li className="nav-item theme-text">
                                <a href="#" className="nav-link" > Deep Charge </a>
                            </li>
                        </ul>

                        <ul className="navbar-item flex-row ml-md-auto">

                            <li className="nav-item dropdown language-dropdown">
                                <a href="#" className="nav-link dropdown-toggle"
                                   id="language-dropdown" data-toggle="dropdown" aria-haspopup="true"
                                   aria-expanded="false">
                                    <img src={ca} className="flag-width" alt="flag"></img>
                                </a>
                            </li>

                            <li className="nav-item dropdown message-dropdown">
                                <a href="#" className="nav-link dropdown-toggle" id="messageDropdown"
                                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                         stroke-linejoin="round" className="feather feather-mail">
                                        <path
                                            d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                        <polyline points="22,6 12,13 2,6"></polyline>
                                    </svg>
                                </a>
                            </li>

                            <li className="nav-item dropdown user-profile-dropdown">
                                <a href="#" className="nav-link dropdown-toggle user"
                                   id="userProfileDropdown" data-toggle="dropdown" aria-haspopup="true"
                                   aria-expanded="true">
                                    <img src={logo} alt="avatar"></img>
                                </a>

                            </li>

                        </ul>
                    </header>
                </div>
                <div className="sub-header-container">
                    <header className="header navbar navbar-expand-sm">
                        <a href="#" className="sidebarCollapse" data-placement="bottom">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                 stroke-linejoin="round" className="feather feather-menu">
                                <line x1="3" y1="12" x2="21" y2="12"></line>
                                <line x1="3" y1="6" x2="21" y2="6"></line>
                                <line x1="3" y1="18" x2="21" y2="18"></line>
                            </svg>
                        </a>

                        <ul className="navbar-nav flex-row">
                            <li>
                                <div className="page-header">

                                    <nav className="breadcrumb-one" aria-label="breadcrumb">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><a href="#">Dashboard</a>
                                            </li>
                                            <li className="breadcrumb-item active" aria-current="page">
                                                <span>Energy Tile</span></li>
                                        </ol>
                                    </nav>

                                </div>
                            </li>
                        </ul>

                    </header>
                </div>

                {/* Section below is Top Nav bar same as above two sections:
                    The problem with below code that it is not static
                    It scrolls with the entire content                          */}

                {/*<nav className="navbar navbar-expand-sm" style={{background: '#060818'}}>*/}
                {/*    <a className="navbar-brand" href="#">*/}
                {/*        <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="" style={{borderRadius : '5px', justifyContent :'space-between'}}/>*/}
                {/*        <a style={{color: 'white', fontFamily: 'Nunito Sans', fontSize : '24px', fontWeight : '700', paddingLeft : '10px'}}>DeepCharge</a>*/}
                {/*        <a style={{marginLeft : '1100px'}}><img src={ca} width="25" height="25" alt="flag"/></a>*/}
                {/*        <a style={{margin : '10px'}}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"*/}
                {/*                                          fill="none" stroke="#e0e6ed" stroke-width="2" stroke-linecap="round"*/}
                {/*                                          stroke-linejoin="round" className="feather feather-mail">*/}
                {/*            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>*/}
                {/*            <polyline points="22,6 12,13 2,6"/>*/}
                {/*        </svg>*/}
                {/*        </a>*/}
                {/*        <a><img src={logo} width="30" height="30" className="d-inline-block align-top" alt="" style={{borderRadius : '5px', marginTop : '5px'}} alt="avatar"/></a>*/}
                {/*    </a>*/}
                {/*</nav>*/}

                {/*<nav className="navbar navbar-expand-sm" style={{background: '#1a1c2d'}}>*/}
                {/*    <a className="navbar-brand" href="#">*/}
                {/*        <a className="sidebarCollapse" data-placement="bottom">*/}
                {/*            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"*/}
                {/*                 fill="none" stroke="#e0e6ed" stroke-width="2" stroke-linecap="round"*/}
                {/*                 stroke-linejoin="round" className="feather feather-menu">*/}
                {/*                <line x1="3" y1="12" x2="21" y2="12"/>*/}
                {/*                <line x1="3" y1="6" x2="21" y2="6"/>*/}
                {/*                <line x1="3" y1="18" x2="21" y2="18"/>*/}
                {/*            </svg>*/}
                {/*        </a>*/}

                {/*        <a style={{color: '#e0e6ed', fontFamily: 'Nunito Sans', fontSize : '14px', fontWeight : '650', paddingLeft : '10px'}}>Dashboard /</a>*/}
                {/*        <a style={{color: '#e0e6ed', fontFamily: 'Nunito Sans', fontSize : '14px', fontWeight : '650'}}> Energy Tile</a>*/}
                {/*    </a>*/}
                {/*</nav>*/}

                <div className="row" style={{paddingTop : '100px'}}>
                    <div className="col-2">
                        <SideBar/>
                    </div>

                    <div className="col-10" >
                        <Router>
                            <Route path="/"
                                   render={() => <EnergyTiles/>}
                            />
                        </Router>
                    </div>

                </div>

                {/* Section below is side bar and main content
                    This can be improved by someone who knows Proper HTML and Possibly React
                    The reference is Demo3 (ltr) of the Cork UI dashboard*/}

                {/*<div className="main-container" id="container">*/}
                {/*    <div className="overlay"></div>*/}
                {/*    <div className="search-overlay"></div>*/}
                {/*    <SideBar/>*/}
                {/*    <EnergyTiles/>*/}
                {/*</div>*/}

            </div>
        );
    }
}


export default DashboardContainer
