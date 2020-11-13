import React from 'react';
import '../Stylesheets/App.css';
import { Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import {Redirect} from "react-router-dom";
import {BASE_URL} from '../base_url.js';


class SignupComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {username: '', password: '', password2: '', loggedin:false};
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value, [event.target.password]: event.target.value, [event.target.password2]:event.target.value});
        console.log(event.target.value);
    };

    handleSubmit = (event) => {
        event.preventDefault();
        axios.post(BASE_URL+'user/signup/', {"username": this.state.username, "password": this.state.password, "password2": this.state.password2})
        .then(res => {
          window.localStorage.setItem('access_token', res.data['access']);

        this.setState ( {
            username: '',
            password: '',
            password2: '',
            loggedin: true
        });
        }).catch ( e => {
            alert("Invalid Input");
        });
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

                 <Form.Group as={Row} controlId="formPlaintextPassword">
                    <Form.Label column sm="4">
                        Confirm Password
                    </Form.Label>
                    <Col sm="8">
                        <Form.Control type="password" value={this.state.password2} onChange={this.handleChange} name="password2" placeholder="Confirm Password" />
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

export default SignupComponent;
