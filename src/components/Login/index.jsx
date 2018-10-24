import React, { Component } from "react";
import styles from "../../styles/Login.css";
import appStyles from "../../styles/App.css";
import axios from "axios";
const crypto = require("crypto");
import hashPassword from "../../helperFunctions/index";
// import LoaderWheel from "../../semantic-ui-react/LoaderWheel";
// import { connect } from "react-redux";
// import { addUser } from "../../redux/actions/index";

// const mapDispatchToProps = dispatch => {
//   return {
//     addUser: article => dispatch(addUser(article))
//   };

// };

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      userVerified: false
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.verifyUserData = this.verifyUserData.bind(this);
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

  verifyUserData() {
    if (this.state.email.length > 0 && this.state.password.length > 0) {
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
            email: this.state.email,
            password: pw
          };
          axios({ method: "put", url: "/api/user", data: body })
            .then(data => {
              console.log(data.data);
              if (data.data === false) {
                window.alert("credentials do not exist");
              } else {
                this.props.userVerified();
              }
            })
            .catch(err => {
              console.log("user not verified", err);
            });
        }
      );
    } else {
      window.alert("missing inputs");
    }
  }

  render() {
    const { email, password } = this.state;
    return (
      <div className={styles.centerForm}>
        <div id="SignUpForm" className={styles.form}>
          <div className={styles.centerContent}>
            <div className={styles.inputLine}>
              <div className={styles.label}>Email</div>
              <div className={styles.input}>
                <input
                  className={styles.inputBox}
                  type="text"
                  id="email"
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
                  id="password"
                  value={password}
                  onChange={() => {
                    this.handlePasswordChange(event);
                  }}
                />
              </div>
            </div>

            <div className={styles.buttonIndent}>
              <button
                onClick={this.verifyUserData}
                className={appStyles.button}
                type="submit"
              >
                Login
              </button>
            </div>
            <div class="ui active centered inline loader">
              {/* <LoaderWheel /> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
