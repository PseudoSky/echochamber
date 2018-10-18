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
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ name: event.value });
    console.log(event.value);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { name, email, password } = this.state;
    this.setState({
      name: "",
      email: "",
      password: ""
    });
  }

  render() {
    const { name, email, password } = this.state;
    return (
      <div className={styles.centerForm}>
        <div id="SignUpForm" className={styles.form}>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={this.handleChange}
              />
              <div />
              <label>Email</label>
              <input
                type="text"
                id="form"
                value={email}
                onChange={this.handleChange}
              />
              <div />
              <label>Password</label>
              <input
                type="text"
                id="form"
                value={password}
                onChange={this.handleChange}
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

export default LoginForm;
