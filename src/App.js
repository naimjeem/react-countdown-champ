import React, { Component } from 'react';
// Stylesheet
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-title">Countdown to January 20, 2018</div>
        <div>
          <div className="clock-days">10 days</div>
          <div className="clock-hrs">30 hours</div>
          <div className="clock-mins">40 minutes</div>
          <div className="clock-sec">20 seconds</div>
        </div>
        <input placeholder="New date" type="text" name="" id=""/>
        <button>Submit</button>
      </div>
    )
  }
}

export default App;
