import React, { Component } from "react";
import styles from "../../styles/Login.css";
import appStyles from "../../styles/App.css";
// import { connect } from "react-redux";
// import { addUser } from "../../redux/actions/index";

// const mapDispatchToProps = dispatch => {
//   return {
//     addUser: article => dispatch(addUser(article))
//   };
// };

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    };

    // this.handleChange = this.handleChange.bind(this);
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
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
    event.preventDefault();
    this.setState({ email: event.target.value }, () => {
      console.log(this.state);
    });
  }
  handlePasswordChange(event) {
    event.preventDefault();
    this.setState({ password: event.target.value }, () => {
      console.log(this.state);
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      name: "",
      email: "",
      password: ""
    });
  }

  render() {
    const { firstName, lastName, email, password } = this.state;
    return (
      <div className={styles.centerForm}>
        <div id="SignUpForm" className={styles.form}>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={() => {
                  this.handleFirstNameChange(event);
                }}
              />
            </div>
            <div>
              <label>Last Name</label>
              <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={() => {
                  this.handleLastNameChange(event);
                }}
              />
              <div />
              <label>Email</label>
              <input
                type="text"
                id="form"
                value={email}
                onChange={() => {
                  this.handleEmailChange(event);
                }}
              />
              <div />
              <label>Password</label>
              <input
                type="text"
                id="form"
                value={password}
                onChange={() => {
                  this.handlePasswordChange(event);
                }}
              />
            </div>

            <button className={appStyles.button} type="submit">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    );
  }
}

// const Form = connect(
//   null,
//   mapDispatchToProps
// )(SignUpForm);

export default SignUpForm;
