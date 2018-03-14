import React from 'react';
import './Main.css';
import './components/Login.css';
import './components/Signup.css';
import Login from './components/Login.js';
import Signup from './components/Signup.js';
import User from './components/User.js';
import Recover from './components/Recover.js';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

class Main extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={NavBar} />
          <Route exact path="/" component={Login} />
          <Route path="/user" component={User} />
          <Route path="/signup" component={Signup} />
          <Route path="/recover" component={Recover} />
        </div>
      </Router>
    );
  }
}

const NavBar = () => (
  <div className="nav">
    <Link to="/"><button>Sign in</button></Link>
  </div>
);

export default Main;