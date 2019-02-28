
import React from "react";

// import "./styles.css";

class Login extends React.Component {
    state = {
    inputText: ""
    };

    handleChanges = e => this.setState({ inputText: e.target.value });

    signIn = e => {
    e.preventDefault();
    localStorage.setItem("username", this.state.inputText);
    window.location.reload();
    };

    render() {
    return (
        <div className="App">
        <input
            type="text"
            value={this.state.inputText}
            onChange={this.handleChanges}
        />
        <button onClick={this.signIn}>Sign in</button>
        </div>
    );
    }
}
export default Login;