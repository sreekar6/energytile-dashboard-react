import React from "react";
import yellow from '../images/yellow.jpg'
import green from '../images/green.png'
import blue from '../images/blue.jpg'

class Slave4Card extends React.Component{

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
        setInterval(this.fetchUpdate,3000)
    }

    render() {
        return (
            <div style={{margin: '10px'}}>
                {
                    (this.state.status === 'sensing') &&
                    <div className="card shadow bg-success rounded">
                        <img className="card-img" src={green}/>
                        <div className="card-img-overlay ">
                            <h5 className="card-title" style={{color: '#ccc'}}>Slave 4</h5>
                            {/*<p className="card-text" style={{color: '#ccc'}}>Status : {this.state.status}</p>*/}
                            {/*<p className="card-text" style={{color: '#ccc'}}>IP : {this.state.ip}</p>*/}
                            <p className="card-text" style={{color: '#ccc'}}>Capacitance : {this.state.cap}</p>
                            <p className="card-text" style={{color: '#ccc',fontFamily: 'Nunito Sans'}}><small>Last update : {new Date(this.state.timestamp).getHours()}:{new Date(this.state.timestamp).getMinutes()}:{new Date(this.state.timestamp).getSeconds()}</small>
                            </p>
                        </div>
                    </div>
                }
                {
                    (this.state.status === 'off') &&
                    <div className="card shadow bg-dark rounded">
                        <img className="card-img" src={blue}/>
                        <div className="card-img-overlay">
                            <h5 className="card-title" style={{color: '#ccc'}}>Slave 4</h5>
                            {/*<p className="card-text" style={{color: '#ccc'}}>Status : {this.state.status}</p>*/}
                            {/*<p className="card-text" style={{color: '#ccc'}}>IP : {this.state.ip}</p>*/}
                            <p className="card-text" style={{color: '#ccc'}}>Capacitance : {this.state.cap}</p>
                            <p className="card-text" style={{color: '#ccc'}}><small>Last update : OFF</small>
                            </p>
                        </div>
                    </div>
                }
                {
                    (this.state.status === 'charging') &&
                    <div className="card shadow bg-danger rounded">
                        <img className="card-img" src={yellow}/>
                        <div className="card-img-overlay">
                            <h5 className="card-title" >Slave 4</h5>
                            {/*<p className="card-text" >Status : {this.state.status}</p>*/}
                            {/*<p className="card-text" >IP : {this.state.ip}</p>*/}
                            <p className="card-text" >Capacitance : {this.state.cap}</p>
                            <p className="card-text" style={{color: '#ccc',fontFamily: 'Nunito Sans'}}><small>Last update : {new Date(this.state.timestamp).getHours()}:{new Date(this.state.timestamp).getMinutes()}:{new Date(this.state.timestamp).getSeconds()}</small>
                            </p>
                        </div>
                    </div>
                }

            </div>
        );
    }
    fetchUpdate = () => {

        fetch('https://energytile-dashboard.herokuapp.com/api/liveip')
            .then(response => response.json())
            .then( response => {
                this.setState({ip : response[4].ipv6});
                if(response[4].live === 1) {
                    fetch('https://energytile-dashboard.herokuapp.com/api/slave4')
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

export default Slave4Card
