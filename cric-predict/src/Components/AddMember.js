import React from 'react';
import '../Stylesheets/App.css';
import axios from 'axios';
import {Button}  from 'react-bootstrap';

export default class AddMemberComponent extends React.Component  {

        constructor(props){
            super(props);
            this.state = {
                group_id: 1
            }
        }

      render() {
          return (
                <div>
                        <Button className="create-button text-style">
                            Add Member
                        </Button>
                </div>

             );

     }
 }
