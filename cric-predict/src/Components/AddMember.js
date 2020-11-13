import React from 'react';
import '../Stylesheets/App.css';
import axios from 'axios';
import {Button, Modal, Form, Row, Col}  from 'react-bootstrap';
import {BASE_URL} from '../base_url.js';

export default class AddMemberComponent extends React.Component  {

        constructor(props){
            super(props);
            this.state = {
                group_id: this.props.group_id,
                group_members: this.props.group_members,
                showHide : false,
                username: '',
                user_id: 0,
                unfiltered_users:[],
                filtered_users:[],
                all_users: [],
            }
        }

        async componentDidMount() {
            const response = await axios.get(BASE_URL+'user/list/',{
            headers: {
                'Authorization': "Bearer "+window.localStorage.getItem('access_token')
            }
            })
            let users_list = response.data
            users_list=users_list.filter(user => !this.state.group_members.includes(user.id))
            this.setState({unfiltered_users: users_list, filtered_users:users_list, all_users: users_list})
        }

        handleModalShowHide() {
            this.setState({
                unfiltered_users: [...this.state.all_users],
                filtered_users: [...this.state.all_users],
                showHide: !this.state.showHide })
        }

        selectUser(user_obj) {
            this.setState({username:user_obj.username, user_id:user_obj.id});
        }

        filterUserList = async (event) => {
            this.setState({filtered_users:this.state.unfiltered_users.filter(user => user.username.toLowerCase().includes(event.target.value.toLowerCase()))});
        }
        handleSubmit = async (event) => {
            event.preventDefault();
            this.state.group_members.push(this.state.user_id);
                await axios.patch(BASE_URL+'group/'+this.state.group_id+'/', {"users": this.state.group_members },{
                headers: {
                    'Authorization': "Bearer "+window.localStorage.getItem('access_token')
                }
                })
                .then ( res => {
                    alert("Member Added Successfully");
                }
                ).catch(error => {
                    alert(error);
                });

            this.setState ( {
                showHide: !this.state.showHide
            })

        }

      render() {
          return (
                <div>
                        <Button className="create-button text-style" onClick={() => this.handleModalShowHide()}>
                            Add Member
                        </Button>

                        <Modal show={this.state.showHide}>

                            <Form  onSubmit={this.handleSubmit}>
                                <Modal.Header closeButton onClick={() => this.handleModalShowHide()}>
                                <Modal.Title>Add Member</Modal.Title>
                                </Modal.Header>

                                <Modal.Body>
                                    <Form.Group as={Row} controlId="formPlaintext" style={{marginTop: 20+'px'}}>
                                        <Form.Label column sm="4">
                                            Find Member
                                        </Form.Label>
                                        <Col sm="8">
                                            <Form.Control type="text" onChange={this.filterUserList}name="members" placeholder="Add Members" />
                                        </Col>
                                    </Form.Group>
                                    <ul className="list-group join-group">
                                    {
                                        this.state.filtered_users.map((user) =>
                                        (
                                            <li className="list-group-item">{user.username} <Button className="join-button" type="submit" onClick={() => this.selectUser(user)}>+</Button></li>
                                        ))
                                    }
                                    </ul>
                                </Modal.Body>

                            </Form>
                        </Modal>
                </div>

             );

     }
 }
