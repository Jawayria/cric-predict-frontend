import React from 'react';
import '../Stylesheets/App.css';
import '../Stylesheets/Group.css';
import {Button}  from 'react-bootstrap';
import {Redirect} from "react-router-dom";
import AddLeague from "./AddLeague";
import AddMember from "./AddMember";
import LeaveGroup from "./LeaveGroup";
import jwt from "jsonwebtoken";
import {connect} from 'react-redux';

class ActionsComponent extends React.Component
{
        constructor(props)
        {
            super(props);
        }

        render (){
            if(localStorage.getItem('user_id') == this.props.group.admin)
            {
                return (
                <div className="row">
                    <AddLeague group_id={this.props.group.id} />
                    <AddMember group_id={this.props.group.id} group_members={this.props.group.users} />
                </div>
                )
            }
            else {
                return (
                        <LeaveGroup group_id={this.props.group.id} group_members={this.props.group.users}/>
                );
            }
        }

}

const mapStateToProps = state => {
    return {
        group: state.group
    };
}

export default connect(mapStateToProps)(ActionsComponent)

