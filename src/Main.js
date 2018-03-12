import React from 'react';
import './Main.css';
import './components/Login.css';
import './components/Signup.css';
// import Signup from './components/Signup.js';
import Recover from './components/Recover.js';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

class Main extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={NavBar} />
          <Route exact path="/" component={Login} />
          <Route path="/Signup" component={Signup} />
          <Route path="/recover" component={Recover} />
        </div>
      </Router>
    );
  }
}

const NavBar= () => (
  <div className="nav">
    <Link to="/"><button>Sign in</button></Link>
  </div>
);

const Login = () => (
  <div style={{ textAlign: "center", color: "white", marginTop: "150px" }}>
    <div className="login-form">
      <div style={{ fontSize: "25px" }}>SIGN IN</div>
      <input placeholder="E-mail address" className="textfield" style={{ width: "300px", textAlign: "left" }} /><br></br>
      <input placeholder="Password" className="textfield" style={{ width: "300px", textAlign: "left" }} />
      <button>Login</button><br></br>
      <Link to="/recover">forget your password ?</Link>
    </div>
    Don't have an account ? <Link to="/signup"><button className="signup-btn" style={{ marginTop: "20px", marginLeft: "10px" }}>Sign up</button></Link>
  </div>
);

const Signup = () => (
  <div className="signup">
    <div className="signup-form">
      <div style={{ fontSize: "25px", marginTop: "0.5em", marginBottom: "0.5em" }}>SIGN UP</div>
      <div style={{ marginLeft: `20px`, textAlign: "left" }}>
        <div style={{ overflow: "auto" }}>
          <div style={{ float: "left" }}>
            <div className="signup-text">Firstname</div>
            <input placeholder="Firstname" className="textfield" />
          </div>
          <div style={{ float: "left" }}>
            <div className="signup-text">Lastname</div>
            <input placeholder="Lastname" className="textfield" />
          </div>
        </div>
        <div className="signup-text">E-mail</div>
        <input placeholder="E-mail" className="textfield" />
        <div className="signup-text">Password</div>
        <input placeholder="Password" className="textfield" />
        <div className="signup-text">Confirm Password</div>
        <input placeholder="Confirm Password" className="textfield" />
      </div>
      <Link to="/"><button className="signup-btn" style={{ marginTop: "2em" }}>Sign up</button></Link>
      <Link to="/"><button className="signup-btn" style={{ marginLeft: "3em", background: "cornflowerblue" }}>Cancel</button></Link>
    </div>
  </div>
);

export default Main;