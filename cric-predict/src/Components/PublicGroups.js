import React from 'react';
import '../Stylesheets/App.css';
import axios from 'axios';
import {Button}  from 'react-bootstrap';


export default class PublicGroupsComponent extends React.Component  {

  constructor(props){
    super(props);
    this.state = {groups: ['group1', 'group2', 'group3', 'group4', 'group5', 'group6', 'group7', 'group8', 'group9', 'group10']};
  }
/*
  async componentDidMount() {
    const response = await axios.get('http://localhost:8000/api/contest/league/get/')
    const groups_list = response.data
    this.setState({groups: groups_list})
}
*/
  render() {
  return (
  <div className="card" >
      <div className="card-body">
         <h3 className="text-style"> Join Group</h3>
            <ul className="list-group join-group">
            {
                this.state.groups.map((group) => (
                <li className="list-group-item"> <b>{group}</b> (5 members) <Button className="join-button">+</Button></li>
                ))
            }
            </ul>
      </div>
  </div>
     );
  }
 }
