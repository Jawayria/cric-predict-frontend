import React from 'react';
import '../Stylesheets/App.css';
import axios from 'axios';

export default class UpcomingLeaguesComponent extends React.Component  {

  constructor(props){
    super(props);
    this.state = {leagues: []};
  }

  async componentDidMount() {const ws = new WebSocket("ws://localhost:8000/leagues-data/")
    ws.onopen = () => {
        ws.send("hi")
    }
    ws.onmessage = e => {
        this.setState({leagues: JSON.parse(e.data)})
    }
}

  render() {
  return (
  <div className="league-cards">
  <h1> Upcoming Leagues </h1>
  <div className="row">
     {
          this.state.leagues.map((league) => (
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{league.name}</h5>
                <p className="card-text"><b>Start Date: </b>{league.start_date}</p>
                <p className="card-text"><b>End Date: </b>{league.end_date}</p>
              </div>
            </div>
          </div>))
     }
      </div>
  </div>);
  }
 }
