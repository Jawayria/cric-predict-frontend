import React from 'react';
import '../Stylesheets/App.css';
import { Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import {Redirect} from "react-router-dom";
import {BASE_URL} from '../base_url.js';


class LoginComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {username: '', password: '', loggedin: false};
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value, [event.target.password]: event.target.value});
        console.log(event.target.value);
    };

    handleSubmit = async (event) => {
        event.preventDefault();
        await axios.post(BASE_URL+'user/login/', {"username": this.state.username, "password": this.state.password})
        .then(res => {
          window.localStorage.setItem('access_token', res.data['access']);
          window.localStorage.setItem('refresh_token', res.data['refresh']);
          window.localStorage.setItem('user_id', res.data['user_id']);

        this.setState ( {
            username: '',
            password: '',
            loggedin: true
        })
        }).catch( e => {
            alert("Username or Password is Incorrect");
        }
        );
    };


    render(){
      if(this.state.loggedin) {
        return (<Redirect to="/Groups" />);
        }
      else {
      return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group as={Row} controlId="formPlaintext" style={{marginTop: 20+'px'}}>
                    <Form.Label column sm="4">
                        Username
                    </Form.Label>
                    <Col sm="8">
                        <Form.Control type="text" value={this.state.username} onChange={this.handleChange} name="username" placeholder="Username" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formPlaintextPassword">
                    <Form.Label column sm="4">
                        Password
                    </Form.Label>
                    <Col sm="8">
                        <Form.Control type="password" value={this.state.password} onChange={this.handleChange} name="password" placeholder="Password" />
                    </Col>
                </Form.Group>

                <Button variant="primary" type="submit"  className="submit-button">
                    Submit
                </Button>
            </Form>

      );
      }
    }
}

export default LoginComponent;
