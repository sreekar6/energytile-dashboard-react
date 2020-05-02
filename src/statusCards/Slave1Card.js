import React from "react";


class Slave1Card extends React.Component{

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
                        <img className="card-img" src="https://picsum.photos/300/200"/>
                        <div className="card-img-overlay ">
                            <h5 className="card-title">Slave 1</h5>
                            <p className="card-text">Status : {this.state.status}</p>
                            <p className="card-text">IP : {this.state.ip}</p>
                            <p className="card-text">Capacitance : {this.state.cap}</p>
                            <p className="card-text"><small className="text-muted">Last update : {this.state.timestamp}</small>
                            </p>
                        </div>
                    </div>
                }
                {
                    (this.state.status === 'off') &&
                    <div className="card shadow bg-dark rounded">
                        <img className="card-img" src="https://picsum.photos/300/200"/>
                        <div className="card-img-overlay">
                            <h5 className="card-title">Slave 1</h5>
                            <p className="card-text">Status : {this.state.status}</p>
                            <p className="card-text">IP : {this.state.ip}</p>
                            <p className="card-text">Capacitance : {this.state.cap}</p>
                            <p className="card-text"><small className="text-muted">Last update : {this.state.timestamp}</small>
                            </p>
                        </div>
                    </div>
                }
                {
                    (this.state.status === 'charging') &&
                    <div className="card shadow bg-danger rounded">
                        <img className="card-img" src="https://picsum.photos/300/200"/>
                        <div className="card-img-overlay">
                            <h5 className="card-title">Slave 1</h5>
                            <p className="card-text">Status : {this.state.status}</p>
                            <p className="card-text">IP : {this.state.ip}</p>
                            <p className="card-text">Capacitance : {this.state.cap}</p>
                            <p className="card-text"><small className="text-muted">Last update : {this.state.timestamp}</small>
                            </p>
                        </div>
                    </div>
                }

            </div>
        );
    }
    fetchUpdate = () => {
        fetch('https://energytile-dashboard.herokuapp.com/api/slave1')
            .then(response => response.json())
            .then(response => {
                this.setState({status : response[response.length - 1].status});
                this.setState({cap : response[response.length - 1].cap});
                this.setState({timestamp : response[response.length - 1].tstamp})
            });
        fetch('https://energytile-dashboard.herokuapp.com/api/liveip')
            .then(response => response.json())
            .then( response => {
                this.setState({ip : response[1].ipv6})
            })
    }
}

export default Slave1Card
