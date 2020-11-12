import React from 'react';
import '../Stylesheets/App.css';
import axios from 'axios';
import {Button, Modal, Form, Row, Col}  from 'react-bootstrap';

export default class AddLeagueComponent extends React.Component  {

        constructor(props){
            super(props);
            this.state = {
                group_id: this.props.group_id,
                showHide : false,
                league_name: 'Search',
                league_selected: null,
                unfiltered_leagues:[],
                filtered_leagues:[],
                all_leagues: [],
            }
        }

        async componentDidMount() {
            const all_leagues_response = await axios.get('http://localhost:8000/api/contest/league/get/')
            let all_leagues_list = all_leagues_response.data
            const group_leagues_response = await axios.get('http://localhost:8000/api/contest/group_leagues/'+this.state.group_id+"/",{
                    headers: {
                    'Authorization': "Bearer "+ localStorage.getItem('access_token')
                    }
            })
            const group_leagues_list = group_leagues_response.data
            all_leagues_list=all_leagues_list.filter(league => !group_leagues_list.includes(league.id))
            this.setState({unfiltered_leagues: all_leagues_list, filtered_leagues:all_leagues_list, all_leagues: all_leagues_list})
        }

        handleModalShowHide() {
            this.setState({
                unfiltered_leagues: [...this.state.all_leagues],
                filtered_leagues: [...this.state.all_leagues],
                showHide: !this.state.showHide })
        }

        filterLeagueList = async (event) => {
            this.setState({filtered_leagues:this.state.unfiltered_leagues.filter(league => league.name.toLowerCase().includes(event.target.value.toLowerCase()))});
        }

        selectLeague(league_obj) {
            this.setState({league_name:league_obj.name, league_selected:league_obj});
        }

        handleSubmit = async (event) => {
            event.preventDefault();
            this.state.league_selected.groups.push(this.state.group_id);
                await axios.patch('http://localhost:8000/api/contest/league/'+this.state.league_selected.id+'/', {"groups": this.state.league_selected.groups },{
                headers: {
                    'Authorization': "Bearer "+window.localStorage.getItem('access_token')
                }
                })
                .then ( res => {
                    alert("League Added Successfully");
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
                            Add League
                        </Button>

                         <Modal show={this.state.showHide}>

                            <Form  onSubmit={this.handleSubmit}>
                                <Modal.Header closeButton onClick={() => this.handleModalShowHide()}>
                                <Modal.Title>Add League</Modal.Title>
                                </Modal.Header>

                                <Modal.Body>
                                    <Form.Group as={Row} controlId="formPlaintext" style={{marginTop: 20+'px'}}>
                                        <Form.Label column sm="4">
                                            Find League
                                        </Form.Label>
                                        <Col sm="8">
                                            <Form.Control type="text" onChange={this.filterLeagueList} name="members" placeholder="Add League" />
                                        </Col>
                                    </Form.Group>
                                    <ul className="list-group join-group">
                                    {
                                        this.state.filtered_leagues.map((league) =>
                                        (
                                            <li className="list-group-item">{league.name} <Button className="join-button" type="submit" onClick={() => this.selectLeague(league)}>+</Button></li>
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
