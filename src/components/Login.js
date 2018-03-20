import React from 'react'
import { Link } from 'react-router-dom';

var longerInput = { width: "300px", textAlign: "left" };

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
        this.login = this.login.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    login() {
        if (this.checkDiffPassword()) {
            this.setState({ msg: 'Password and Confirm Password do not match!' });
            return
        }
        const { firstname } = this.state;
        const { lastname } = this.state;
        const { email } = this.state;
        const { password } = this.state;
        fetch('http://localhost/login.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password,
            })
        }).then((response) => response.json())
            .then((responseJson) => {
                // Showing response message coming from server after inserting records.
                console.log(responseJson);
            }).catch((error) => {
                console.error(error);
            });
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
        console.log(this.state);
    }

    render() {
        return (
            <div className="login-form">
                <div className="topic">SIGN IN</div>
                <input placeholder="E-mail address" name="email" className="textfield" onChange={this.onChange} style={longerInput} />
                <input placeholder="Password" name="password" className="textfield" type="password" onChange={this.onChange} style={longerInput} />
                <Link to="/user"><button className="button" onClick={this.login}>Login</button></Link><br></br>
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