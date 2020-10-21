import React from 'react';
import '../Stylesheets/App.css';
import '../Stylesheets/Group.css';
import {Button}  from 'react-bootstrap';
import {Redirect} from "react-router-dom";
import LeaveGroup from "./LeaveGroup";
import MembersList from "./MembersList";
import GroupLeagues from "./GroupLeagues";

export default class GroupDashboardComponent extends React.Component
{
        constructor(props)
        {
            super(props);
            console.log(props);
            this.state = {
                group : this.props.location.state.group_obj
            }
        }

        render (){
          if(!window.localStorage.getItem('access_token')) {
            return (<Redirect to="/login" />);
            }
          else {
            return (
                <div className='image-background'>
                   <div className="container group-container" >
                        <div className="background">
                            <h1> {this.state.group.name} </h1>
                            <div className="row">
                                <div className="col-sm-4">
                                    <LeaveGroup group_id={this.state.group.id}/>
                                    <MembersList group_members={this.state.group.users}/>
                                </div>
                                <div className="col-sm-8">
                                    <GroupLeagues group_id={this.state.group.id}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
          }
        }
}




