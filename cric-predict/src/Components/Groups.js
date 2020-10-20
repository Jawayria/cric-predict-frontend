import React from 'react';
import '../Stylesheets/App.css';
import '../Stylesheets/Group.css';
import {Button}  from 'react-bootstrap';
import PublicGroups from './PublicGroups';
import UserGroups from './UserGroups';
import CreateGroup from './CreateGroup';
import {Redirect} from "react-router-dom";


function GroupComponent() {
      if(!window.localStorage.getItem('access_token')) {
        return (<Redirect to="/login" />);
        }
      else {
  return (
    <div className='image-background'>
       <div className="container group-container" >
            <div className="background">
                <h1> Groups </h1>
                <div className="row">
                    <div className="col-sm-4">
                         <CreateGroup />
	                     <PublicGroups />
                    </div>
                    <div className="col-sm-8">
                          <UserGroups />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
  }
}

export default GroupComponent;