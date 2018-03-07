import React from 'react';

class Login extends React.Component {
    render() {
        return (
            <div className="login">
                <div className="login-form">
                    <div className="topic">SIGN IN</div>
                    <input placeholder="E-mail address" className="textfield"/><br></br>
                    <input placeholder="Password" className="textfield"/>
                    <button>Login</button>
                    <a href="./components/Forget.js">forget your password ?</a>
                </div>
                Don't have an account ? <button className="signup-btn">Sign up</button>
            </div>
        );
    }
}

export default Login