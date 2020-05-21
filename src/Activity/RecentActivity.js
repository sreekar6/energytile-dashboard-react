import React from "react";

import '../css/modules-widgets.css'
import {API_URL} from "../constants/url";


class RecentActivity extends React.Component {

    state = {
        events : [
            // {text: 'Logged in'},
            // {text: 'Clicked Home Page'},
            // {text: 'Edited Profile'},
            // {text: 'Registred'},
            // {text: 'Clicked Cart'},
            // {text: 'Clicked Checkout'},
        ],
    }

    componentDidMount() {
        this.fetchActivity();
        setInterval(this.fetchActivity,1000)
    }

    render() {
        console.log(this.state.events);
        
        return (
            // <div style={{margin: '10px'}}>
            //     <Timeline items={this.state.events}/>
            // </div>
            <div class="widget widget-activity-four">

                <div class="widget-heading">
                    <h5 class="">Recent Activities</h5>
                </div>

                <div class="widget-content">
                    <div class="mt-container mx-auto">

                        <div className="timeline-line" >
                            {
                                this.state.events && this.state.events.map( event =>
                                    
                                    <>
                                        {
                                            (event.onOFF === 'on') &&
                                            <div className="item-timeline timeline-success">
                                                <div className="t-dot t-dot-success" data-original-title="" title="">
                                                </div>
                                                <div className="t-text">
                                                    <p>{event.activity}</p>
                                                    <span className="badge badge-success" style={{paddingLeft : '9px', paddingRight : '9px'}}>ON</span>
                                                    <p className="t-time" >{new Date(event.tstamp).getHours()}:{new Date(event.tstamp).getMinutes()}:{new Date(event.tstamp).getSeconds()}</p>

                                                </div>
                                            </div>

                                        }

                                        {
                                            (event.onOFF === 'off') &&
                                            <div className="item-timeline timeline-danger">
                                                <div className="t-dot t-dot-danger" data-original-title="" title="">
                                                </div>
                                                <div className="t-text">
                                                    <p>{event.activity}</p>
                                                    <span className="badge badge-danger" style={{paddingLeft : '7px', paddingRight : '7px'}}>OFF</span>
                                                    <p className="t-time" >{new Date(event.tstamp).getHours()}:{new Date(event.tstamp).getMinutes()}:{new Date(event.tstamp).getSeconds()}</p>
                                                </div>
                                            </div>
                                        }
                                    </>
                                )
                            }
                        </div>

                    </div>
                </div>
            </div>

        );

    }

    // fetchActivity = () => {
    //     fetch('https://energytile-dashboard.herokuapp.com/api/recentactivity')
    //         .then(response => response.json())
    //         .then(response => {
    //             console.log(response);
    //             response = response.slice((response.length - 10), response.length);
    //             console.log('After Slicing-->',response);
    //             let activity = [];
    //             response.forEach(event =>
    //                 activity.push({ts: event.tstamp, text : event.activity})
    //             )
    //             this.setState({
    //                 events : activity.reverse()
    //             })
    //         })
    // }

    fetchActivity = () => {
        fetch(`${API_URL}/api/recentactivity`)
            .then(response => response.json())
            .then( response => {
                // response = response.slice((response.length - 15), response.length);
                console.log('After Slicing-->',response);
                this.setState({
                    events : response.reverse()
                })
                console.log('State : ', this.state.events)
            })
    }


}

export default RecentActivity
