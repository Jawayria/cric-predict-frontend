import React from 'react';
import '../Stylesheets/App.css';
import '../Stylesheets/Group.css';
import {Button}  from 'react-bootstrap';
import PublicGroups from './PublicGroups';
import UserGroups from './UserGroups';
import CreateGroup from './CreateGroup';
import {Redirect} from "react-router-dom";
import jwt from 'jsonwebtoken'


function GroupComponent() {
           if(localStorage.getItem('access_token'))
           {
                const token = localStorage.getItem('access_token');
                var decodedToken=jwt.decode(token, {complete: true});
                var dateNow = new Date();

                if(decodedToken.payload.exp < dateNow.getTime()/1000){
                    return (<Redirect to="/login" />);
                }
           }
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

export default GroupComponent;