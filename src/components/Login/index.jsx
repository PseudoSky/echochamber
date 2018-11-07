import React, { Component } from "react";
import styles from "../../styles/Login.css";
import appStyles from "../../styles/App.css";
import axios from "axios";
const crypto = require("crypto");
import hashPassword from "../../helperFunctions/index";

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      userVerified: false
    };

    this.verifyUserData = this.verifyUserData.bind(this);
    this.handleSubmitOnEnter = this.handleSubmitOnEnter.bind(this);
  }

  handleSubmitOnEnter(event) {
    if (event.key === "Enter") {
      this.verifyUserData();
    }
  }

  verifyUserData() {
    console.log(this.props, "props");
    console.log(this.props.password, "password");
    if (this.props.email.length > 0 && this.props.password.length > 0) {
      crypto.pbkdf2(
        this.props.password,
        "salt",
        100000,
        64,
        "sha512",
        (err, derivedKey) => {
          if (err) throw err;
          var pw = derivedKey.toString("hex");
          var body = {
            email: this.props.email,
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
    const { email, password } = this.props;
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
                  value={this.props.email}
                  onKeyUp={() => {
                    this.handleSubmitOnEnter(event);
                  }}
                  onChange={() => {
                    this.props.handleEmailChange(event);
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
                  value={this.props.password}
                  onKeyUp={() => {
                    this.handleSubmitOnEnter(event);
                  }}
                  onChange={() => {
                    this.props.handlePasswordChange(event);
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
