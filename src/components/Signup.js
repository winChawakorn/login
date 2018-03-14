import React from 'react';
import { Link } from 'react-router-dom';

class Signup extends React.Component {
    render() {
        return (
            <div className="signup-form">
                <div className="topic">SIGN UP</div>
                <div style={{ marginLeft: "20px", textAlign: "left" }}>
                    <div style={{ overflow: "auto" }}>
                        <div style={{ float: "left", marginRight: "7.5em" }}>
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
                    <input placeholder="Password" className="textfield" type="password" />
                    <div className="signup-text">Confirm Password</div>
                    <input placeholder="Confirm Password" className="textfield" type="password" />
                </div>
                <Link to="/"><button className="button" style={{ width: "200px", marginTop: "3em" }}>Sign up</button></Link>
                <Link to="/"><button className="button" style={{ width: "200px", marginLeft: "5em" }}>Cancel</button></Link>
            </div>
        );
    }
}

export default Signup