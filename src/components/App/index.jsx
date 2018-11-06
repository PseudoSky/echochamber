import React, { Component } from "react";
import SignUpForm from "../SignUp/index.jsx";
import LoginForm from "../Login/index.jsx";
import Navbar from "../Navbar/index";
import Dashboard from "../Dashboard/index";
import LinkSocialMedia from "../LinkSocialMedia/index";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
      loggedIn: false,
      alreadyHasCredentials: false,
      linkedSocialMedia: false
    };
    this.loginButton = this.loginButton.bind(this);
    this.signUpButton = this.signUpButton.bind(this);
    this.userVerified = this.userVerified.bind(this);
    this.logoutButton = this.logoutButton.bind(this);
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

  logoutButton() {
    this.setState({ loggedIn: false }, () => {
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
    //if user is logged in but has not connected social meida yet
    if (
      this.state.loggedIn === true &&
      this.state.linkedSocialMedia === false
    ) {
      view = <LinkSocialMedia />;
      //if user is logged in and has already connected their social media
    } else if (
      this.state.linkedSocialMedia === true &&
      this.state.loggedIn === true
    ) {
      view = <Dashboard />;
      //if user has credentials already, but still needs to login
    } else if (this.state.alreadyHasCredentials === true) {
      view = <LoginForm userVerified={this.userVerified} />;
    } else {
      //if user does not have credentials, going to site defaults to sign up view
      view = (
        <SignUpForm
          loginButton={this.loginButton}
          userVerified={this.userVerified}
        />
      );
    }
    return (
      <div>
        <Navbar
          loginButton={this.loginButton}
          signUpButton={this.signUpButton}
          logoutButton={this.logoutButton}
          state={this.state}
        />
        {view}
      </div>
    );
  }
}

export default App;
