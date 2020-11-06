import React from 'react';
import '../Stylesheets/App.css';
import axios from 'axios';
import {Button, Modal, Form, Row, Col}  from 'react-bootstrap';

export default class PredictionsComponent extends React.Component  {

        constructor(props){
            super(props);
            this.state = {
                league_id: 1
            }
        }

      render() {
          return (
                        <Button className="create-button text-style col-sm-5" onClick={() => this.handleModalShowHide()}>
                            Predictions Record
                        </Button>
             );
     }
 }
