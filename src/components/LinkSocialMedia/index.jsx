import React, { Component } from "react";
import styles from "../../styles/Login.css";
import appStyles from "../../styles/App.css";
var axios = require("axios");

class LinkSocialMedia extends Component {
  constructor(props) {
    super(props);

    this.state = {
      account_username: "",
      account_password: "",
      platform: "instagram"
    };
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmitOnEnter = this.handleSubmitOnEnter.bind(this);
    this.addNewUserAccount = this.addNewUserAccount.bind(this);
  }

  handleUsernameChange(event) {
    this.setState({ account_username: event.target.value }, () => {
      console.log(this.state);
    });
  }

  handlePasswordChange(event) {
    this.setState({ account_password: event.target.value }, () => {
      console.log(this.state);
    });
  }

  handlePlatformChange(event) {
    this.setState({ platform: event.target.value }, () => {
      console.log(this.state);
    });
  }

  handleSubmitOnEnter(event) {
    if (event.key === "Enter") {
      this.addNewUserAccount();
    }
  }

  addNewUserAccount() {
    console.log(this.props, "props");
    var addAccountToState = this.props.instagramAccounts.map(a => {
      return { ...a };
    });
    addAccountToState.push({
      email: this.props.email,
      platform: this.state.platform,
      username: this.state.account_username,
      password: this.state.account_password
    });
    console.log("addAccountToState", addAccountToState);
    this.props.handleAccountChange(addAccountToState);
  }

  render() {
    const { instagram_username, instagram_password, platform } = this.state;
    return (
      <div className={styles.centerForm}>
        <div id="SignUpForm" className={styles.form}>
          <div className={styles.centerContent}>
            <div className={styles.addSocialHeader}>Add your social media </div>
            <div className={styles.inputLine}>
              <div className={styles.label}>Platform</div>
              <div className={styles.dropdown}>
                <button className={styles.dropbtn}>
                  Instagram <i src="../../styles/images/dropdown_arrow.jpg" />
                </button>
                <div className={styles.dropdown_content}>
                  {/* <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a> */}
                </div>
              </div>
            </div>
            <div className={styles.inputLine}>
              <div className={styles.label}>Username</div>
              <div className={styles.input}>
                <input
                  className={styles.inputBox}
                  type="text"
                  id="instagram_username"
                  value={instagram_username}
                  onKeyUp={() => {
                    this.handleSubmitOnEnter(event);
                  }}
                  onChange={() => {
                    this.handleUsernameChange(event);
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
                  id="instagram_password"
                  value={instagram_password}
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
                onClick={this.addNewUserAccount}
                className={appStyles.wideButton}
                type="submit"
              >
                Add Account
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

export default LinkSocialMedia;
