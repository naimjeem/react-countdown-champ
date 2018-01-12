import React, { Component } from 'react';
// Component
import Clock from './Clock';
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
        <Clock deadline={this.state.deadline} />
        <input placeholder="January 18, 2019" onChange={ event => {this.setState({ newDeadline: event.target.value })} } />
        <button onClick={ () => this.changeDeadline() }>Submit</button>
      </div>
    )
  }
}

export default App;
