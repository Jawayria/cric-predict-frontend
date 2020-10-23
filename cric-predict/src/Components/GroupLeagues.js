import React from 'react';
import '../Stylesheets/App.css';
import axios from 'axios';
import private_icon from './private.jpg';
import {Button, Modal, Form, Row, Col}  from 'react-bootstrap';

export default class UserGroupsComponent extends React.Component  {

  constructor(props){
    super(props);
    this.state = {
    leagues: [],
    filtered_leagues: [],
    group_id: this.props.group_id,
    };
  }

  filterLeagueList = async (event) => {
      this.setState({filtered_leagues:this.state.leagues.filter(league => league.name.toLowerCase().includes(event.target.value.toLowerCase()))});
  }

  async componentDidMount() {
    const response = await axios.get('http://localhost:8000/api/contest/group_leagues/'+this.state.group_id+"/",{
        headers: {
        'Authorization': "Bearer "+window.localStorage.getItem('access_token')
        }
    })
    const leagues_list = response.data
    console.log(leagues_list)

    this.setState({leagues: leagues_list, filtered_leagues:leagues_list})
  }


  render() {
  return (
        <div className="card">
            <div className="card-body">
                <h3 className="text-style"> Leagues</h3>
                    <Form.Group as={Row} controlId="formPlaintext" style={{marginTop: 20+'px', color:'white'}}>
                         <Form.Label column sm="2">
                            Search
                         </Form.Label>
                         <Col sm="8">
                             <Form.Control type="text" onChange={this.filterLeagueList} name="search" placeholder="Search Leagues" />
                         </Col>
                    </Form.Group>
                    <div className="row user-group">
                         {
                              this.state.filtered_leagues.map((league) => (
                              <div className="col-sm-12">
                                <a href="#">
                                <div className="card group-card">
                                  <div className="card-body">
                                  <div className="row">
                                    <div className="col-sm-9">
                                        <div className="row">
                                            <h5 className="card-title black-text">{league.name} </h5>
                                        </div>
                                    </div>
                                    <p className="card-text black-text">{league.start_date} to {league.end_date}</p>
                                  </div>
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
