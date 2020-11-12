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
        if (WebSocketInstance.state() === 1) {
          callback();
          return;
        } else {
          component.waitForSocketConnection(callback);
        }
    }, 100);
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
