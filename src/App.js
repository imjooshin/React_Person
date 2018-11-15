import React, { Component } from 'react';
import './App.css';
import Person from './Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Person: </h1>
        <Person name="Joo" age={32} weight={190} height={170} />
        <Person name="Nathan" age={22} weight={150} height={170} />
        <Person name="Jim" age={12} weight={100} height={140} />
      </div>
    );
  }
}

export default App;
