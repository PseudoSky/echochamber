import React, { Component } from "react";
import SignUpForm from "../SignUp/index.jsx";
import LoginForm from "../Login/index.jsx";
import Navbar from "../Navbar/index";
import Dashboard from "../Dashboard/index";

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
    this.userVerified = this.userVerified.bind(this);
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

  userVerified() {
    this.setState({ loggedIn: true }, () => {
      console.log(this.state);
    });
  }

  render() {
    var view;
    if (this.state.alreadyHasCredentials === true && this.state.loggedIn === true) {
      view = <Dashboard />;
    } else if (this.state.alreadyHasCredentials === true) {
      view = <LoginForm userVerified={this.userVerified} />;
    } else {
      view = <SignUpForm loginButton={this.loginButton} />;
    }
    return (
      <div>
        <Navbar
          loginButton={this.loginButton}
          signUpButton={this.signUpButton}
          state={this.state}
        />
        {view}
      </div>
    );
  }
}

export default App;
