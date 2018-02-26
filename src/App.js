import React, { Component } from 'react';
import './App.css';
import NavigationBar from './NavigationBar';
import Game from './Game';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar />
        <header className="App-header">
          <h1 className="App-title">HOT or COLD</h1>
        </header>
        <Game />
      </div>
    );
  }
}

export default App;
