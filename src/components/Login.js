import React from 'react'
import { BrowserRouter as Link } from 'react-router-dom';

const Login = () => (
    <div style={{ textAlign: "center", color: "white", marginTop: "150px" }}>
        <div className="login-form">
            <div style={{ fontSize: "25px" }}>SIGN IN</div>
            <input placeholder="E-mail address" className="textfield" style={{ width: "300px", textAlign: "left" }} /><br></br>
            <input placeholder="Password" className="textfield" style={{ width: "300px", textAlign: "left" }} />
            <button>Login</button><br></br>
            {/* <Link to="/recover">forget your password ?</Link> */}
        </div>
        Don't have an account ? <Link to="/signup"><button className="signup-btn" style={{ marginTop: "20px", marginLeft: "10px" }}>Sign up</button></Link>
    </div>
);

export default Login;