import React from 'react';
import '../Stylesheets/App.css';
import '../Stylesheets/Group.css';
import {Button}  from 'react-bootstrap';
import {Redirect} from "react-router-dom";
import Actions from "./Actions";
import MembersList from "./MembersList";
import GroupLeagues from "./GroupLeagues";
import jwt from "jsonwebtoken";
import {connect} from "react-redux";

class GroupDashboardComponent extends React.Component
{
        constructor(props)
        {
            super(props);
        }

        render (){
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
                            <h1> {this.props.group.name} </h1>
                            <div className="row">
                                <div className="col-sm-4">
                                    <Actions/>
                                    <MembersList/>
                                </div>
                                <div className="col-sm-8">
                                    <GroupLeagues/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
          }

}

const mapStateToProps = state => {
    return {
        group: state.group
    };
}

export default connect(mapStateToProps)(GroupDashboardComponent)
