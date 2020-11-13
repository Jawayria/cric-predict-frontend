import React from 'react';
import '../Stylesheets/App.css';
import axios from 'axios';
import private_icon from './private.jpg';
import {Button, Modal, Form, Row, Col}  from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {setGroupLeagues} from '../Actions/ActionCreators'

class GroupLeaguesComponent extends React.Component  {

  constructor(props){
    super(props);
    this.state = {
    filtered_leagues: [],
    };
  }

  filterLeagueList = async (event) => {
      this.setState({filtered_leagues:this.props.leagues_list.filter(league => league.name.toLowerCase().includes(event.target.value.toLowerCase()))});
  }

  async componentDidMount() {
    await this.props.setGroupLeagues()
    this.setState({filtered_leagues:this.props.leagues_list})
  }


  render() {
  return (
        <div className="card">
            <div className="card-body">
                <h3 className="text-style"> Leagues</h3>
                    <Form.Group as={Row} controlId="formPlaintext" style={{marginTop: 20+'px', color:'white'}}>
                         <Form.Label column sm="2">
                            Search
                         </Form.Label>
                         <Col sm="8">
                             <Form.Control type="text" onChange={this.filterLeagueList} name="search" placeholder="Search Leagues" />
                         </Col>
                    </Form.Group>
                    <div className="row user-group">
                         {
                              this.state.filtered_leagues.map((league) => (
                              <div className="col-sm-12">
                              <Link to={{pathname:"./league_dashboard", league_obj: {league} }}>
                                <div className="card group-card">
                                  <div className="card-body">
                                  <div className="row">
                                    <div className="col-sm-9">
                                        <div className="row">
                                            <h5 className="card-title black-text">{league.name} </h5>
                                        </div>
                                    </div>
                                    <p className="card-text black-text">{league.start_date} to {league.end_date}</p>
                                  </div>
                                  </div>
                                </div>
                                </Link>
                              </div>))
                         }
                    </div>
            </div>
        </div>
  );
  }
 }

const mapStateToProps = state => {
    return {
        group_id: state.group.id,
        leagues_list: state.leagues
    };
}

const mapDispatchToProps = dispatch => {
    return {
      setGroupLeagues: () => dispatch(setGroupLeagues())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(GroupLeaguesComponent)
