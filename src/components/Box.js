import React from 'react';

class Box extends React.Component {
    render() {
        return (
            <div>
                <div className="signin">SIGN IN</div>
                <input placeholder="Username"/><br></br>
                <input placeholder="Password"/>
                <button>Login</button>
                <a href="./components/Forget.js">forget your password?</a>
            </div>
        );
    }
}

export default Box