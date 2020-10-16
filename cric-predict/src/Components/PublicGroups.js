import React from 'react';
import '../Stylesheets/App.css';
import axios from 'axios';
import {Button, Modal}  from 'react-bootstrap';


export default class PublicGroupsComponent extends React.Component  {

  constructor(props){
    super(props);
    this.state = {groups: ['group1', 'group2', 'group3', 'group4', 'group5', 'group6', 'group7', 'group8', 'group9', 'group10']};
  }

  async componentDidMount() {
    const user_id = window.localStorage.getItem('user_id');
    const response = await axios.get('http://localhost:8000/api/group/other_groups/'+user_id+"/" ,{
    headers: {
    'Authorization': "Bearer "+window.localStorage.getItem('access_token')
    }
    });
    const groups_list = response.data
    console.log(groups_list)

    groups_list.map((group) => (
        group.user_count=group.users.length
    ))
    this.setState({groups: groups_list});
}

    joinGroup = async (users,group_id) => {
        const user_id = window.localStorage.getItem('user_id');
        users.push(Number(user_id));
        console.log(users);
        await axios.patch('http://localhost:8000/api/group/'+group_id+'/', {"users": users},{
        headers: {
            'Authorization': "Bearer "+window.localStorage.getItem('access_token')
        }
        })
        .then(res => {
            alert("Group Joined Successfully");
        }).catch(error => {
            alert(error);
        });
        this.setState ( {
            name: '',
            privacy: '',
            showHide: !this.state.showHide
        })
    };
  render() {
  return (
  <div className="card" >
      <div className="card-body">
         <h3 className="text-style"> Join Group</h3>
            <ul className="list-group join-group">
            {
                this.state.groups.map((group) => (
                <li className="list-group-item"> <b>{group.name}</b> ({group.user_count} members) <Button className="join-button" onClick={() => this.joinGroup(group.users, group.id)}>+</Button></li>
                ))
            }
            </ul>
      </div>
  </div>
     );
  }
 }
