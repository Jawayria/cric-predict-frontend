import React from 'react';
import '../Stylesheets/App.css'

function Leagues() {

  const matches = ['League 1', 'League 2', 'League 3', 'League 4'];

  const list = []

  matches.forEach((match) => {
    list.push(
      <div class="col-sm-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{match}</h5>
            <p class="card-text">Start Date: 30/9/2020</p>
            <p class="card-text">End Date: 5/11/2020</p>
          </div>
        </div>
      </div>
  )
  })

  return (
  <div class="league-cards">
  <h1> Upcoming Leagues </h1>
  <div class="row">
      {list}
  </div>
  </div>
  );
}

export default Leagues;
