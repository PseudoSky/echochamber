import React, { Component } from "react";
import styles from "../../styles/Login.css";
import appStyles from "../../styles/App.css";
import axios from "axios";
const crypto = require("crypto");
import hashPassword from "../../helperFunctions/index";

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
    this.handleSubmitOnEnter = this.handleSubmitOnEnter.bind(this);
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

  handleSubmitOnEnter(event) {
    if (event.key === "Enter") {
      this.postSignUp();
    }
  }

  postSignUp() {
    if (
      this.state.firstName.length > 0 &&
      this.state.lastName.length > 0 &&
      this.state.email.length > 0 &&
      this.state.password.length > 0
    ) {
      crypto.pbkdf2(
        this.state.password,
        "salt",
        100000,
        64,
        "sha512",
        (err, derivedKey) => {
          if (err) throw err;
          var pw = derivedKey.toString("hex");
          var body = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: pw
          };

          axios({ method: "post", url: "/api/user", data: body })
            .then(data => {
              console.log(data.data, "data");
              this.props.userVerified();
            })
            .catch(err => {
              console.log("there was an error getting data...", err);
            });
        }
      );
    } else {
      window.alert("missing inputs");
    }
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
                  onKeyUp={() => {
                    this.handleSubmitOnEnter(event);
                  }}
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
                  onKeyUp={() => {
                    this.handleSubmitOnEnter(event);
                  }}
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
                  onKeyUp={() => {
                    this.handleSubmitOnEnter(event);
                  }}
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
                  onKeyUp={() => {
                    this.handleSubmitOnEnter(event);
                  }}
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
            <div
              className={styles.alreadyMember}
              onClick={this.props.loginButton}
            >
              <a href="#">Already a member? Login here...</a>
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
