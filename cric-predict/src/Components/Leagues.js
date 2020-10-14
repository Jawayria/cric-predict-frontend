import React from 'react';
import '../Stylesheets/App.css';
import axios from 'axios';

export default class LeagueComponent extends React.Component  {

  constructor(props){
    super(props);
    this.state = {leagues: []};
  }

  async componentDidMount() {
    const response = await axios.get('http://localhost:8000/api/contest/league/get/')
    const leagues_list = response.data
    this.setState({leagues: leagues_list})
}

  render() {
  return (
  <div className="league-cards">
  <h1> Upcoming Leagues </h1>
  <div className="row">
     {
          this.state.leagues.map((league) => (
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{league.name}</h5>
                <p class="card-text"><b>Start Date: </b>{league.start_date}</p>
                <p class="card-text"><b>End Date: </b>{league.end_date}</p>
              </div>
            </div>
          </div>))
     }
      </div>
  </div>);
  }
 }
