import React from 'react';
import '../Stylesheets/App.css';
import axios from 'axios';
import {Button}  from 'react-bootstrap';

export default class LeaveGroupsComponent extends React.Component  {

        constructor(props){
            super(props);
            this.state = {
                group_id: this.props.group_id,
                group_members: this.props.group_members
            }
        }

        leaveGroup = async() => {
            const user_id = window.localStorage.getItem('user_id');
            const users = this.state.group_members.filter(id => id != user_id)
            await axios.patch('http://localhost:8000/api/group/'+this.state.group_id+'/', {"users": users},{
            headers: {
                'Authorization': "Bearer "+window.localStorage.getItem('access_token')
            }
            })
            .then(async (res) => {
                alert("You left the group");
                if (users.length == 0 )
                {
                        await axios.delete('http://localhost:8000/api/group/'+this.state.group_id+'/', {
                        headers: {
                            'Authorization': "Bearer "+window.localStorage.getItem('access_token')
                        }
                        })

                }
                window.location = "http://localhost:3000/groups/"
            }).catch(error => {
                alert(error);
            });

        }
      render() {
          return (
                <div>
                        <Button className="create-button text-style" onClick={()=>this.leaveGroup()}>
                            Leave Group
                        </Button>
                </div>

             );

     }
 }
