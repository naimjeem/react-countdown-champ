import React, { Component } from 'react';
// Stylesheet
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: 'January 18, 2018',
      newDeadline: ''
    }
  }

  changeDeadline() {
    this.setState({ deadline: this.state.newDeadline })
  }

  render() {
    return (
      <div className="app">
        <div className="app-title">Countdown to {this.state.deadline}</div>
        <div>
          <div className="clock-days">10 days</div>
          <div className="clock-hrs">30 hours</div>
          <div className="clock-mins">40 minutes</div>
          <div className="clock-sec">20 seconds</div>
        </div>
        <input placeholder="New date" onChange={ event => {this.setState({ newDeadline: event.target.value })} } />
        <button onClick={ () => this.changeDeadline() }>Submit</button>
      </div>
    )
  }
}

export default App;
