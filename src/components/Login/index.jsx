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

  render() {
    const { email, password } = this.state;
    return (
      <div className={styles.centerForm}>
        <div id="SignUpForm" className={styles.form}>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
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
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginForm;
