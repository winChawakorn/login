import React from 'react';
import { Link } from 'react-router-dom';

class Signup extends React.Component {
    render() {
        return (
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
    }
}

export default Signup