import React from 'react'
import { Link, Redirect } from 'react-router-dom';

var longerInput = { width: "300px", textAlign: "left" };

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            msg: '',
            success: false,
        }
        this.login = this.login.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    login() {
        const { email } = this.state;
        const { password } = this.state;
        fetch('http://' + window.location.hostname + '/login.php', {
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
                if (responseJson !== 'true') {
                    this.setState({ msg: 'Wrong E-mail or Password!' });
                } else {
                    this.setState({ success: true });
                }
            }).catch((error) => {
                console.error(error);
            });
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <div className="login-form">
                <div className="topic">SIGN IN</div>
                <span style={{ color: 'red' }}>{this.state.msg}</span><br></br>
                <input placeholder="E-mail address" name="email" className="textfield" onChange={this.onChange} style={longerInput} />
                <input placeholder="Password" name="password" className="textfield" type="password" onChange={this.onChange} style={longerInput} />
                <button className="button" onClick={this.login}>Login</button><br></br>
                {this.state.success ? <Redirect to="/user" /> : null}
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