import React from 'react';
import '../Stylesheets/App.css';
import axios from 'axios';
import {Button, Modal, Form, Row, Col}  from 'react-bootstrap';


export default class PublicGroupsComponent extends React.Component  {

  constructor(props){
    super(props);
    this.state = {
    groups: [],
    filtered_groups:[],
    };
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
    this.setState({groups: groups_list, filtered_groups:groups_list});
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

            this.setState({groups: this.state.groups.filter(group => group.id!=group_id),
            filtered_groups: this.state.filtered_groups.filter(group => group.id!=group_id)})
    };


    filterGroupList = async (event) => {
            this.setState({filtered_groups:this.state.groups.filter(group => group.name.toLowerCase().includes(event.target.value.toLowerCase()))});
        }

  render() {
  return (
  <div className="card" >
      <div className="card-body">
         <h3 className="text-style"> Join Group</h3>
             <Form.Group as={Row} controlId="formPlaintext" style={{marginTop: 20+'px'}}>
                  <Form.Label column sm="4">
                       Members
                  </Form.Label>
                  <Col sm="8">
                        <Form.Control type="text" onChange={this.filterGroupList} name="filter" placeholder="Filter Groups" />
                  </Col>
             </Form.Group>
            <ul className="list-group join-group">
            {
                this.state.filtered_groups.map((group) => (
                <li className="list-group-item"> <b>{group.name}</b> ({group.user_count} members) <Button className="join-button" onClick={() => this.joinGroup(group.users, group.id)}>+</Button></li>
                ))
            }
            </ul>
      </div>
  </div>
     );
  }
 }
