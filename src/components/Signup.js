import React from 'react';

const s = {padding: `1.5%`, marginTop: `-1%`};

class Signup extends React.Component {
    render() {
        return (
            <div className="signup">
                <div className="signup-form">
                    <div className="topic">SIGN UP</div>
                    <div className="name">
                        <div style={{width: `50%`}}>
                            <div className="signup-text" style={{marginLeft: `1%`}}>Firstname</div>
                            <input placeholder="Firstname" className="textfield" style={{padding: `3%`, width: `70%`}} />
                        </div>
                        <div style={{width: `50%`}}>
                            <div className="signup-text" style={{marginLeft: `1%`}}>Lastname</div>
                            <input placeholder="Lastname" className="textfield" style={{padding: `3%`, width: `75%`}} />
                        </div>
                    </div>
                    <div className="signup-text" style={{marginTop: `-1.9%`}}>E-mail</div>
                    <input placeholder="E-mail" className="textfield" style={s}/>
                    <div className="signup-text">Password</div>
                    <input placeholder="Password" className="textfield" style={s}/>
                    <div className="signup-text">Confirm Password</div>
                    <input placeholder="Confirm Password" className="textfield" style={s}/><br></br>
                    <button className="signup-btn" style={{padding: `3%`, marginTop: `3%`, color: "white"}}>Sign up</button>
                    <button className="signup-btn" style={{padding: `3%`, marginTop: `3%`, marginLeft: `10%`, background: "lightblue", color: "white"}}>Cancel</button>
                </div>
            </div>
        );
    }
}

export default Signup