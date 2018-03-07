import React, { Component } from 'react';
import './App.css';
import './CSS/Login.css';
import './CSS/Signup.css';
import Login from './components/Login.js';
import Signup from './components/Signup.js';

class App extends Component {
  render() {
    return (
      <div className="container">

        <Signup />
      </div>
    );
  }
}

export default App;