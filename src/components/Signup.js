import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class Signup extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            repassword: '',
            msg: '',
            success: false,
        }

        this.register = this.register.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    checkBadInfo() {
        if (this.state.firstname === '') {
            this.setState({ msg: 'Please enter your firstname' });
            return true;
        }
        if (this.state.lastname === '') {
            this.setState({ msg: 'Please enter your lastname' });
            return true;
        }
        if (this.state.email === '') {
            this.setState({ msg: 'Please enter your e-mail' });
            return true;
        }
        if (!this.state.email.includes('@') || !this.state.email.includes('.')) {
            this.setState({ msg: 'Please enter a valid e-mail' });
            return true;
        }
        if (this.state.password.length < 6 || this.state.password.length > 20) {
            this.setState({ msg: 'Password must be 6 - 20 characters' });
            return true;
        }
        if (this.state.password === '' || this.state.password !== this.state.repassword) {
            this.setState({ msg: 'Password and Confirm Password do not match!' });
            return true;
        }
        return false;
    }

    register() {
        if (this.checkBadInfo())
            return
        const { firstname } = this.state;
        const { lastname } = this.state;
        const { email } = this.state;
        const { password } = this.state;
        fetch('http://localhost/registration.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstname: firstname,
                lastname: lastname,
                email: email,
                password: password,
            })
        }).then((response) => response.json())
            .then((responseJson) => {
                if (responseJson !== 'successful') {
                    this.setState({ msg: 'This e-mail is already used' });
                    return
                }
            }).catch((error) => {
                console.error(error);
                return
            });
        this.state.success = true;
        this.forceUpdate();
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        if (this.state.success)
            return <Redirect to="/" />
        return (
            <div className="signup-form">
                <div className="topic">SIGN UP</div><br></br>
                <span style={{ color: 'red' }}>{this.state.msg}</span>
                <div style={{ marginLeft: "20px", textAlign: "left" }}>
                    <div style={{ overflow: "auto" }}>
                        <div style={{ float: "left", marginRight: "7.5em" }}>
                            <div className="signup-text">Firstname</div>
                            <input name="firstname" onChange={this.onChange} placeholder="Firstname" className="textfield" />
                        </div>
                        <div style={{ float: "left" }}>
                            <div className="signup-text">Lastname</div>
                            <input name="lastname" onChange={this.onChange} placeholder="Lastname" className="textfield" />
                        </div>
                    </div>
                    <div className="signup-text">E-mail</div>
                    <input name="email" onChange={this.onChange} placeholder="E-mail" className="textfield" />
                    <div className="signup-text">Password</div>
                    <input name="password" onChange={this.onChange} placeholder="Password" className="textfield" type="password" />
                    <div className="signup-text">Confirm Password</div>
                    <input name="repassword" onChange={this.onChange} placeholder="Confirm Password" className="textfield" type="password" />
                </div>
                <button className="button" onClick={this.register} style={{ width: "200px", marginTop: "3em" }}>Sign up</button>
            </div>
        );
    }
}

export default Signup