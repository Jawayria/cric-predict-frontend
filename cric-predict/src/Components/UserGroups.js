import React from 'react';
import '../Stylesheets/App.css';
import axios from 'axios';
import {Button}  from 'react-bootstrap';
import private_icon from './private.jpg';

export default class UserGroupsComponent extends React.Component  {

  constructor(props){
    super(props);
    this.state = {groups: ['Groups1','Group2','Group3','Group4', 'Group5', 'Group6']};
  }
/*
  async componentDidMount() {
    const response = await axios.get('http://localhost:8000/api/contest/league/get/')
    const leagues_list = response.data
    this.setState({leagues: leagues_list})
}
*/
  render() {
  return (
        <div className="card">
            <div className="card-body">
                <h3 className="text-style"> Your Groups</h3>
                    <div className="row user-group">
                         {
                              this.state.groups.map((group) => (
                              <div className="col-sm-12">
                                <a href="#">
                                <div className="card group-card">
                                  <div className="card-body">
                                  <div className="row">
                                    <div className="col-sm-9">
                                        <div className="row">
                                            <h5 className="card-title black-text">{group}</h5>
                                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-file-lock2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" d="M4 0h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H4z"/>
                                                    <path fill-rule="evenodd" d="M8 5a1 1 0 0 0-1 1v1h2V6a1 1 0 0 0-1-1zm2 2.076V6a2 2 0 1 0-4 0v1.076c-.54.166-1 .597-1 1.224v2.4c0 .816.781 1.3 1.5 1.3h3c.719 0 1.5-.484 1.5-1.3V8.3c0-.627-.46-1.058-1-1.224z"/>
                                                </svg>
                                        </div>
                                    </div>
                                    <p className="card-text black-text">5 members</p>
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
