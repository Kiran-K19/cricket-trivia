import React, { Component } from 'react';
import './App.css';
import Questions from './Components/Questions'
import BarChart from './Components/Charts'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Cricket Trivia
        </header>
        <div className="two-sections">
        <div className="questions-section">
          <Questions />
        </div>
        <div className="graph-section">
          <BarChart />
        </div>
        </div>
      </div>
    );
  }
}

export default App;
