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

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
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

  //   handleSubmit(event) {
  //     event.preventDefault();
  //     const { name, email, password } = this.state;
  //     this.setState({
  //       name: "",
  //       email: "",
  //       password: ""
  //     });
  //   }

  //   <div className={styles.inputLine}>
  //   <div className={styles.label}>Password</div>
  //   <div className={styles.input}>
  //     <input
  //       className={styles.inputBox}
  //       type="text"
  //       id="form"
  //       value={password}
  //       onChange={() => {
  //         this.handlePasswordChange(event);
  //       }}
  //     />
  //   </div>
  // </div>

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
              <button className={appStyles.button} type="submit">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
