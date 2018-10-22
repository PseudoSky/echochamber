import React, { Component } from "react";
import SignUpForm from "../SignUp/index.jsx";
import LoginForm from "../Login/index.jsx";
import Navbar from "../Navbar/index";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
      loggedIn: false,
      alreadyHasCredentials: false
    };
    this.loginButton = this.loginButton.bind(this);
    this.signUpButton = this.signUpButton.bind(this);
  }

  loginButton() {
    this.setState({ alreadyHasCredentials: true }, () => {
      console.log(this.state);
    });
  }

  signUpButton() {
    this.setState({ alreadyHasCredentials: false }, () => {
      console.log(this.state);
    });
  }

  render() {
    var loginScreen;
    if (this.state.alreadyHasCredentials === true) {
      loginScreen = <LoginForm />;
    } else {
      loginScreen = <SignUpForm />;
    }
    return (
      <div>
        <Navbar
          loginButton={this.loginButton}
          signUpButton={this.signUpButton}
          state={this.state}
        />
        {loginScreen}
      </div>
    );
  }
}

export default App;
