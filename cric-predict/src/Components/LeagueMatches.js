import React from 'react';
import '../Stylesheets/App.css';
import axios from 'axios';
import private_icon from './private.jpg';
import {Button, Modal, Form, Row, Col}  from 'react-bootstrap';

export default class UserGroupsComponent extends React.Component  {

  constructor(props){
    super(props);
    this.state = {
        league_id: this.props.league_id,
        matches: ['match1', 'match2', 'match3', 'match4', 'match5', 'match6','match7']
    };
  }

  async componentDidMount() {
    const ws = new WebSocket("ws://localhost:8000/matches-data/")
    ws.onopen = () => {
        ws.send(this.state.league_id.toString())
    }
    ws.onmessage = e => {
        const matches_list = JSON.parse(e.data)
        matches_list.map(match => {
            match.date = new Date(match.time).toLocaleDateString()
            match.time = new Date(match.time).toLocaleTimeString()
        })

        this.setState({matches: matches_list})
    }
  }


  render() {
  return (
        <div className="card">
            <div className="card-body">
                <h3 className="text-style">Matches</h3>
                    <div className="row user-group">
                         {
                              this.state.matches.map((match) => (
                              <div className="col-sm-12">
                                <a href="#">
                                <div className="card group-card">
                                  <div className="card-body">
                                  <div className="row">
                                    <div className="col-sm-9">
                                        <h5 className="card-title black-text">{match.team1} vs {match.team2}</h5>
                                    </div>
                                    <p><b>Winner: </b>{match.winner}</p>
                                  </div>
                                    <p>{match.date} {match.time}</p>
                                  </div>
                                </div>
                                </a>
                              </div>))
                         }
                    </div>
            </div>
        </div>
  );
  }
 }
