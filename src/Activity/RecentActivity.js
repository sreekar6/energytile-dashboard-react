import React from "react";
import Timeline from "react-time-line";
import PerfectScrollbar from "perfect-scrollbar";

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
            <div style={{margin: '10px'}}>
                <Timeline items={this.state.events}/>
            </div>
        );

    }

    fetchActivity = () => {
        fetch('https://energytile-dashboard.herokuapp.com/api/recentactivity')
            .then(response => response.json())
            .then(response => {
                console.log(response);
                response = response.slice((response.length - 10), response.length);
                console.log('After Slicing-->',response);
                let activity = [];
                response.forEach(event =>
                    activity.push({ts: event.tstamp, text : event.activity})
                )
                this.setState({
                    events : activity.reverse()
                })
            })
    }
}

export default RecentActivity
