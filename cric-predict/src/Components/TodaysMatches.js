import React from 'react';
import '../Stylesheets/App.css';
import axios from 'axios';
import {Button, Modal, Form, Row, Col, Container}  from 'react-bootstrap';
import {connect} from 'react-redux';
import {BASE_URL} from '../base_url.js';

class TodaysMatchesComponent extends React.Component  {

  constructor(props){
    super(props);
    this.state = {
        league_id: this.props.league_id,
        matches: ['match1', 'match2'],
        prediction: [],
    }
  }

  async componentDidMount() {
    const response = await axios.get(BASE_URL+'contest/todays_matches/'+this.state.league_id+"/"
                     +this.props.group_id+"/"+localStorage.getItem('user_id')+"/",{
        headers: {
        'Authorization': "Bearer "+ localStorage.getItem('access_token')
        }
    })
    const matches_list = response.data
    matches_list.map(match => {
    match.date = new Date(match.time).toLocaleDateString()
    match.time = new Date(match.time).toLocaleTimeString()
    match.temp_prediction = match.team1
    })

    this.setState({matches: matches_list})
  }

  handleSubmit = async(event, match) => {
            event.preventDefault();
    const datetime = new Date();
    await axios.post(BASE_URL+'contest/prediction/',
        {"match":match.id,"prediction":match.temp_prediction,"time":datetime.toISOString(),"user":localStorage.getItem("user_id"),"group":this.props.group_id}, {
        headers: {
        'Authorization': "Bearer "+ localStorage.getItem('access_token')
        }
    })
    .then( res => {
        alert("Prediction Submitted Successfully");
        }
    ).catch(error => {
            alert(error);
        });

  }

    handleChange = (event, match) => {
            match.temp_prediction=event.target.value
    }


  render() {
  return (
  <div className="card" >
      <div className="card-body">
         <h3 className="text-style"> Todays Matches </h3>
            <ul className="list-group join-group">
            {
                this.state.matches.map((match => (
                    <div className="card group-card">
                     <div className="card-body">
                     <Container>
                        <h5 className="card-title black-text justify-content-md-center">{match.team1} vs {match.team2}</h5>
                        <p className="justify-content-md-center"><b> Time: </b>{match.time} </p>
                        {
                            match.prediction == "" ?
                                <Form className="justify-content-md-center" onSubmit={(e)=>this.handleSubmit(e,match)}>


                                    <Form.Group as={Row} controlId="forSelectText"  style={{marginTop: 20+'px'}}>
                                        <Form.Label><b>Your Prediction</b></Form.Label>
                                        <Col md={{  offset: 1 }}>
                                        <Form.Control as="select"  onChange={(e)=>this.handleChange(e,match)} name="prediction" placeholder="Prediction">
                                              <option value={match.team1}>{match.team1}</option>
                                              <option value={match.team2}>{match.team2}</option>
                                        </Form.Control>
                                        </Col>
                                    </Form.Group>

                                    <Button variant="primary" type="submit"  className="submit-button" style={{width: 90+'%'}}>
                                        Submit Prediction
                                    </Button>
                                </Form>
                            :
                            <p className="justify-content-md-center"><b> Your Prediction: </b>{match.prediction} </p>
                        }
                      </Container>
                    </div>
                    </div>
                    )))
               }
            </ul>
      </div>
  </div>
     );
  }
 }


const mapStateToProps = state => {
    return {
        group_id: state.group.id
    };
}

export default connect(mapStateToProps)(TodaysMatchesComponent)
