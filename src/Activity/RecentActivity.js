import React from "react";


import '../css/custom-timeline.css'


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
            <div className="timeline-line" style={{padding : '10px'}}>
                {
                    this.state.events && this.state.events.map( event =>
                        <div className="item-timeline timeline-warning">
                            {
                                (event.onOFF === 'on') &&
                                <div className="t-dot t-dot-success" data-original-title="" title="">
                                </div>

                            }
                            {
                                (event.onOFF === 'off') &&
                                <div className="t-dot t-dot-danger" data-original-title="" title="">
                                </div>
                            }
                            {
                                <div className="t-text row">
                                    <p className="">{event.activity}
                                        {
                                            (event.onOFF === 'on') &&
                                            <span className="badge badge-success" style={{paddingRight: '5px', paddingLeft: '5px'}}>ON</span>

                                        }
                                        {
                                            (event.onOFF === 'off') &&
                                            <span className="badge badge-danger" style={{}}>OFF</span>
                                        }

                                    </p>
                                    {/*<p className="t-time">{new Date(event.tstamp).getHours()}:{new Date(event.tstamp).getMinutes()}:{new Date(event.tstamp).getSeconds()}</p>*/}
                                </div>
                            }
                        </div>

                    )
                }
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
        fetch('https://energytile-dashboard.herokuapp.com/api/recentactivity')
            .then(response => response.json())
            .then( response => {
                response = response.slice((response.length - 10), response.length);
                console.log('After Slicing-->',response);
                this.setState({
                    events : response.reverse()
                })
                console.log('State : ', this.state.events)
            })
    }


}

export default RecentActivity
