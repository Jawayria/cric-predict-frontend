import React from 'react';
import '../Stylesheets/App.css';
import '../Stylesheets/Group.css';
import {Button}  from 'react-bootstrap';
import {Redirect} from "react-router-dom";
import LeaveGroup from "./LeaveGroup";
import MembersList from "./MembersList";
import GroupLeagues from "./GroupLeagues";

export default class UpcomingLeaguesComponent extends React.Component
{
        constructor(props)
        {
            super(props);
            this.state = {
                group_name : "Group_name"
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
                            <h1> {this.state.group_name} </h1>
                            <div className="row">
                                <div className="col-sm-4">
                                    <LeaveGroup />
                                    <MembersList />
                                </div>
                                <div className="col-sm-8">
                                    <GroupLeagues />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
          }
        }
}




