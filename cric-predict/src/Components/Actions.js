import React from 'react';
import '../Stylesheets/App.css';
import '../Stylesheets/Group.css';
import {Button}  from 'react-bootstrap';
import {Redirect} from "react-router-dom";
import AddLeague from "./AddLeague";
import AddMember from "./AddMember";
import LeaveGroup from "./LeaveGroup";
import jwt from "jsonwebtoken";

export default class ActionsComponent extends React.Component
{
        constructor(props)
        {
            super(props);
            console.log(props);
            this.state = {
                group : this.props.group
            }
        }

        render (){
            if(localStorage.getItem('user_id') == this.state.group.admin)
            {
                return (
                <div className="row">
                    <AddLeague group_id={this.state.group.id} />
                    <AddMember group_id={this.state.group.id} group_members={this.state.group.users} />
                </div>
                )
            }
            else {
                return (
                        <LeaveGroup group_id={this.state.group.id} group_members={this.state.group.users}/>
                );
            }
        }

}
