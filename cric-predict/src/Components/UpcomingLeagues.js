import React from 'react';
import '../Stylesheets/App.css';
import axios from 'axios';
import WebSocketInstance from '../Services/LeaguesWebSocketService.js' ;

export default class UpcomingLeaguesComponent extends React.Component  {

  constructor(props){
    super(props);
    this.state = {leagues: []};
    this.waitForSocketConnection(()=>{
        WebSocketInstance.addCallback(this.update_leagues.bind(this))
        WebSocketInstance.sendRequest()
        });
  }

   waitForSocketConnection(callback) {
    const component = this;
    setTimeout(
      function () {
        // Check if websocket state is OPEN
        if (WebSocketInstance.state() === 1) {
          console.log("Connection is made")
          callback();
          return;
        } else {
          console.log("wait for connection...")
          component.waitForSocketConnection(callback);
        }
    }, 100); // wait 100 milisecond for the connection...
  }


  update_leagues(leagues_list) {
    this.setState({leagues: leagues_list})
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
