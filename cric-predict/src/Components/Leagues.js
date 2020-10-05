import React from 'react';
import '../Stylesheets/App.css'

export default class League extends React.Component  {

  constructor(props){
    super(props);
    this.state = {leagues: []};
  }

  componentDidMount() {
    const apiUrl = 'http://127.0.0.1:8000/api/contest/league/';
    fetch(apiUrl, {mode: 'no-cors'})
      .then((response) => response.json())
      .then((data) => console.log('This is your data', data));
      /*
    try {
        const res = await fetch('http://127.0.0.1:8000/api/contest/league', {mode: 'no-cors'});
        console.log(res);
        this.setState({leagues: await res.json()})
    } catch (e) {
        console.error(e);
    }*/
  }

//  const matches = ['League 1', 'League 2', 'League 3', 'League 4'];

  //const list = []



  render(){
  const list = [];
  console.log(this.state.leagues);
  this.state.leagues.forEach((league) => {
    list.push(
      <div className="col-sm-6">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{league}</h5>
            <p className="card-text">Start Date: 30/9/2020</p>
            <p className="card-text">End Date: 5/11/2020</p>
          </div>
        </div>
      </div>
  )
  })
  return (
  <div className="league-cards">
  <h1> Upcoming Leagues </h1>
  <div className="row">
      {list}
  </div>
  </div>
  );
}
}