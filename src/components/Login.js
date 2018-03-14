import React from 'react'
import { Link } from 'react-router-dom';

class Login extends React.Component {
    render() {
        return (
            <div className="login-form">
                <div className="topic">SIGN IN</div>
                <input placeholder="E-mail address" className="textfield" style={{ width: "300px", textAlign: "left" }} />
                <input placeholder="Password" className="textfield" type="password" style={{ width: "300px", textAlign: "left" }} />
                <Link to="/user"><button className="button">Login</button></Link><br></br>
                {/* <Link to="/recover">forget your password ?</Link> */}
                <div>
                    Don't have an account ?
                    <Link to="/signup">
                        <button className="button" style={{ width: "100px", padding: "4px", fontSize: "14px" }}>Sign up</button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Login;