import React from "react";
import charging_m from '../images/slave_harabhara.50.png'
import sensing_m from '../images/slave_neela.47.png'
import off_m from '../images/slave_safed.48.png'
import {API_URL} from "../constants/url";


class Slave3Card extends React.Component{

    constructor(props) {
        super(props);
    }
    state = {
        status : 'off',
        ip : '',
        cap: '',
        timestamp:''
    }

    componentDidMount() {
        this.fetchUpdate();
        setInterval(this.fetchUpdate,200)
    }

    render() {
        return (

            <div style={{margin: '0px'}}>
                {
                    (this.state.status === 'sensing') &&
                    <div className="flip-card shadow bg-transparent">
                        {/*// https://www.w3schools.com/howto/howto_css_flip_card.asp*/}
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src={sensing_m} alt="Avatar" style={{width:219 , height:150}}></img>
                            </div>
                            <div className="flip-card-back">
                                <h5 style={{paddingTop:"10px", paddingBottom:"0px"}}>Slave 3: {this.state.status}</h5>
                                <p style={{paddingTop:"0px", flexWrap:"wrap" }}><small>{this.state.ip}</small></p>
                                <p style={{color: '#ccc',fontFamily: 'Nunito Sans'}}><small>Last update : {new Date(this.state.timestamp).getHours()}:{new Date(this.state.timestamp).getMinutes()}:{new Date(this.state.timestamp).getSeconds()}</small></p>
                                <p style={{textAlign: "right"}}><small>C: {this.state.cap}</small></p>
                            </div>
                        </div>
                    </div>

                    // <div className="card shadow bg-transparent rounded">
                    //     <img className="card-img" src={sensing_m}/>
                    //     <div className="card-body ">
                    //         {/*<h5 className="card-title" style={{color: '#ccc',fontFamily: 'Nunito Sans'}}>Master</h5>*/}
                    //         {/*<p className="card-text" style={{color: '#ccc',fontFamily: 'Nunito Sans'}}>Status : {this.state.status}</p>*/}
                    //         {/*<p className="card-text" style={{color: '#ccc',fontFamily: 'Nunito Sans'}}>IP : {this.state.ip}</p>*/}
                    //         {/*<p className="card-text" style={{color: '#ccc',fontFamily: 'Nunito Sans'}}>Capacitance : {this.state.cap}</p>*/}
                    //         {/*<p className="card-text" style={{color: '#ccc',fontFamily: 'Nunito Sans'}}><small>Last update : {new Date(this.state.timestamp).getHours()}:{new Date(this.state.timestamp).getMinutes()}:{new Date(this.state.timestamp).getSeconds()}</small>*/}
                    //         {/*</p>*/}
                    //     </div>
                    // </div>
                }
                {
                    // (this.state.status === 'off') &&
                    // <div className=" shadow bg-transparent rounded">
                    //     <div className="shadow bg-dark rounded">
                    //     <img className="" src={blue}/>
                    //     {/*<div className="card card-body " style={{width:300, height:150}}>*/}
                    //     </div>
                    // </div>

                    // (this.state.status === 'off') &&
                    // <div className=" shadow bg-transparent rounded">
                    //     <img className="card-img" src={off_m}/>
                    //     <div className="card-img-overlay">
                    //         {/*<h5 className="card-title" style={{color: '#ccc'}}>Slave 2</h5>*/}
                    //         {/*/!*<p className="card-text" style={{color: '#ccc'}}>Status : {this.state.status}</p>*!/*/}
                    //         {/*/!*<p className="card-text" style={{color: '#ccc'}}>IP : {this.state.ip}</p>*!/*/}
                    //         {/*<p className="card-text" style={{color: '#ccc'}}>Capacitance : {this.state.cap}</p>*/}
                    //         {/*<p className="card-text" style={{color: '#ccc'}}><small>Last update : OFF</small>*/}
                    //         {/*</p>*/}
                    //     </div>
                    // </div>

                    (this.state.status === 'off') &&
                    <div className="flip-card shadow bg-transparent">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src={off_m} alt="Avatar" style={{width:219 , height:150}}></img>
                            </div>
                            <div className="flip-card-back">
                                <h5 style={{paddingTop:"10px", paddingBottom:"0px"}}>Slave 3: {this.state.status}</h5>
                                <p style={{paddingTop:"0px", flexWrap:"wrap" }}><small>{this.state.ip}</small></p>
                                <p style={{color: '#ccc',fontFamily: 'Nunito Sans'}}><small>Last update : {new Date(this.state.timestamp).getHours()}:{new Date(this.state.timestamp).getMinutes()}:{new Date(this.state.timestamp).getSeconds()}</small></p>
                                <p style={{textAlign: "right"}}><small>C: {this.state.cap}</small></p>
                            </div>
                        </div>
                    </div>

                }
                {
                    (this.state.status === 'charging') &&
                    <div className="flip-card shadow bg-transparent">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src={charging_m} alt="Avatar" style={{width:219 , height:150}}></img>
                            </div>
                            <div className="flip-card-back">
                                <h5 style={{paddingTop:"10px", paddingBottom:"0px"}}>Slave 3: {this.state.status}</h5>
                                <p style={{paddingTop:"0px", flexWrap:"wrap" }}><small>{this.state.ip}</small></p>
                                <p style={{color: '#ccc',fontFamily: 'Nunito Sans'}}><small>Last update : {new Date(this.state.timestamp).getHours()}:{new Date(this.state.timestamp).getMinutes()}:{new Date(this.state.timestamp).getSeconds()}</small></p>
                                <p style={{textAlign: "right"}}><small>C: {this.state.cap}</small></p>
                            </div>
                        </div>
                    </div>

                    // <div className="card shadow bg-transparent rounded">
                    // {/*<div className="card shadow bg-danger rounded">*/}
                    //     <img className="card-img" src={charging_m}/>
                    //     <div className="card-img-overlay">
                    //         {/*<h5 className="card-title">Master</h5>*/}
                    //         {/*<p className="card-text">Status : {this.state.status}</p>*/}
                    //         {/*<p className="card-text">IP : {this.state.ip}</p>*/}
                    //         {/*<p className="card-text">Capacitance : {this.state.cap}</p>*/}
                    //         {/*<p className="card-text" style={{color: '#ccc',fontFamily: 'Nunito Sans'}}><small>Last update : {new Date(this.state.timestamp).getHours()}:{new Date(this.state.timestamp).getMinutes()}:{new Date(this.state.timestamp).getSeconds()}</small>*/}
                    //         {/*</p>*/}
                    //     </div>
                    // </div>
                }

            </div>
        );
    }

    fetchUpdate = () => {

        fetch(`${API_URL}/api/liveip`)
            .then(response => response.json())
            .then( response => {
                this.setState({ip : response[3].ipv6});
                if(response[3].live === 1){
                    fetch(`${API_URL}/api/slave3`)
                        .then(response => response.json())
                        .then(response => {
                            this.setState({status : response[response.length - 1].status});
                            this.setState({cap : response[response.length - 1].cap});
                            this.setState({timestamp : response[response.length - 1].tstamp})
                        });
                }
            })
    }
}

export default Slave3Card
