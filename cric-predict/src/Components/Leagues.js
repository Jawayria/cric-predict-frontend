import React from 'react';
import '../Stylesheets/App.css'

function Leagues() {

  const matches = ['League 1', 'League 2', 'League 3', 'League 4'];

  const list = []

  matches.forEach((match) => {
    list.push(
      <div className="col-sm-6">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{match}</h5>
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

export default Leagues;
