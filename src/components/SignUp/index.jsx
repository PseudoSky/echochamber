import React, { Component } from "react";
import styles from "../../styles/Login.css";
import appStyles from "../../styles/App.css";
import axios from "axios";
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
    this.postSignUp = this.postSignUp.bind(this);
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

  postSignUp() {
    if (
      this.state.firstName.length > 0 &&
      this.state.lastName.length > 0 &&
      this.state.email.length > 0 &&
      this.state.password.length > 0
    ) {
      var body = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password
      };

      axios({ method: "post", url: "/api/user", data: body })
        .then(data => {
          console.log(data.data, "data");
        })
        .catch(err => {
          console.log("there was an error getting data...", err);
        });
    } else {
      window.alert("missing inputs");
    }
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
          <div className={styles.centerContent}>
            <div className={styles.inputLine}>
              <div className={styles.label}>First Name</div>
              <div className={styles.input}>
                <input
                  className={styles.inputBox}
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={() => {
                    this.handleFirstNameChange(event);
                  }}
                />
              </div>
            </div>

            <div className={styles.inputLine}>
              <div className={styles.label}>Last Name</div>
              <div className={styles.input}>
                <input
                  className={styles.inputBox}
                  type="text"
                  id="lastName"
                  value={lastName}
                  onChange={() => {
                    this.handleLastNameChange(event);
                  }}
                />
              </div>
            </div>
            <div className={styles.inputLine}>
              <div className={styles.label}>Email</div>
              <div className={styles.input}>
                <input
                  className={styles.inputBox}
                  type="text"
                  id="form"
                  value={email}
                  onChange={() => {
                    this.handleEmailChange(event);
                  }}
                />
              </div>
            </div>

            <div className={styles.inputLine}>
              <div className={styles.label}>Password</div>
              <div className={styles.input}>
                <input
                  className={styles.inputBox}
                  type="text"
                  id="form"
                  value={password}
                  onChange={() => {
                    this.handlePasswordChange(event);
                  }}
                />
              </div>
            </div>
            <div className={styles.buttonIndent}>
              <button
                onClick={this.postSignUp}
                className={appStyles.button}
                type="submit"
              >
                Sign Up
              </button>
            </div>
          </div>
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
