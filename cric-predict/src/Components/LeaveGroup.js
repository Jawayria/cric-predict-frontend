import React from 'react';
import '../Stylesheets/App.css';
import axios from 'axios';
import {Button}  from 'react-bootstrap';

export default class LeaveGroupsComponent extends React.Component  {

        constructor(props){
            super(props);
            this.state = {
                group_id: 1
            }
        }

        leaveGroup = async(event) => {

        }
      render() {
          return (
                <div>
                        <Button className="create-button text-style" onClick={this.leaveGroup()}>
                            Leave Group
                        </Button>
                </div>

             );

     }
 }
