import React, { Component } from "react";
import styles from "../../styles/Login.css";
import appStyles from "../../styles/App.css";
import axios from "axios";
const crypto = require("crypto");
import hashPassword from "../../helperFunctions/index";
const uuidv1 = require("uuid/v1");

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

  //attempt to add new user info to database
  postSignUp() {
    //sets requirements for inputs
    if (
      this.state.firstName.length > 0 &&
      this.state.lastName.length > 0 &&
      this.state.email.length > 4 &&
      this.state.password.length > 6 &&
      this.state.email.includes("@", ".")
    ) {
      //hashes password and sends request upon successfull hashing
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
            uuid: uuidv1(),
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: pw
          };

          axios({ method: "post", url: "/api/user", data: body })
            //upon success, set loggedIn to true on App
            .then(data => {
              console.log(data.data, "data");
              this.props.userVerified();
            })
            //upon error, 401 code means email is already registered
            .catch(err => {
              console.log(err, "the error");
              window.alert(
                "There is already an account registered under the email you provided. Please login instead!"
              );
            });
        }
      );
      //if input requirements are not met
    } else {
      //if email does not contain expected characters
      if (this.state.email.includes("@", ".") === false) {
        window.alert("email is entered incorrectly");
        //if password is not long enough
      } else if (this.state.password.length < 7) {
        window.alert("password must be at least 6 characters");
        //if inputs are blank
      } else {
        window.alert("missing inputs");
      }
    }
  }

  render() {
    const { firstName, lastName, email, password } = this.state;
    return (
      <div className={styles.centerForm}>
        <div id="SignUpForm" className={styles.form}>
          <div className={styles.centerContent}>
            <div className={styles.inputLine}>
              {/* first name label and input */}
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
              {/* last name label and input */}
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
              {/* email label and input */}
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
              {/* password label and input */}
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
