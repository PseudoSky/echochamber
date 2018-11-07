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
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      instagramAccounts: [],
      loggedIn: false,
      alreadyHasCredentials: false,
      linkedSocialMedia: false
    };
    this.loginButton = this.loginButton.bind(this);
    this.signUpButton = this.signUpButton.bind(this);
    this.userVerified = this.userVerified.bind(this);
    this.logoutButton = this.logoutButton.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleAccountChange = this.handleAccountChange.bind(this);
  }

  loginButton() {
    this.setState(
      { alreadyHasCredentials: true, email: this.state.email },
      () => {
        console.log(this.state);
      }
    );
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

  handleFirstNameChange(event) {
    event.preventDefault();
    this.setState({ firstName: event.target.value }, () => {
      console.log(this.state);
    });
  }

  handleLastNameChange(event) {
    event.preventDefault();
    this.setState({ lastName: event.target.value }, () => {
      console.log(this.state);
    });
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value }, () => {
      console.log(this.state);
    });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value }, () => {
      console.log(this.state);
    });
  }

  handleAccountChange(accountObject) {
    this.setState(accountObject, () => {
      console.log(this.state);
    });
  }

  render() {
    var view;
    //if user is logged in but has not connected social media yet
    if (
      this.state.loggedIn === true &&
      this.state.linkedSocialMedia === false
    ) {
      view = (
        <LinkSocialMedia
          email={this.state.email}
          instagramAccounts={this.state.instagramAccounts}
          firstName={this.state.firstName}
          handleAccountChange={this.handleAccountChange}
        />
      );
      //if user is logged in and has already connected their social media
    } else if (
      this.state.linkedSocialMedia === true &&
      this.state.loggedIn === true
    ) {
      view = <Dashboard />;
      //if user has credentials already, but still needs to login
    } else if (this.state.alreadyHasCredentials === true) {
      view = (
        <LoginForm
          handlePasswordChange={this.handlePasswordChange}
          handleEmailChange={this.handleEmailChange}
          userVerified={this.userVerified}
          password={this.state.password}
          email={this.state.email}
        />
      );
    } else {
      //if user does not have credentials, going to site defaults to sign up view
      view = (
        <SignUpForm
          handleFirstNameChange={this.handleFirstNameChange}
          handleLastNameChange={this.handleLastNameChange}
          handlePasswordChange={this.handlePasswordChange}
          handleEmailChange={this.handleEmailChange}
          loginButton={this.loginButton}
          userVerified={this.userVerified}
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          email={this.state.email}
          password={this.state.password}
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
