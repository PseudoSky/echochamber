import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import { addUser } from "../redux/actions/index";

const mapDispatchToProps = dispatch => {
  return {
    addUser: article => dispatch(addUser(article))
  };
};

class SignUpForm extends Component {
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
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { name, email, password } = this.state;
    const id = uuidv1();
    this.props.addUser({ name, email, password, id });
    this.setState({
      name: "",
      email: "",
      password: ""
    });
  }

  render() {
    const { name, email, password } = this.state;
    return (
      <div id="SignUpForm">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="form">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={this.handleChange}
            />
            <div />
            <label htmlFor="form">Email</label>
            <input
              type="text"
              className="form-control"
              id="form"
              value={email}
              onChange={this.handleChange}
            />
            <div />
            <label htmlFor="password">Password</label>
            <input
              type="text"
              className="form-control"
              id="form"
              value={password}
              onChange={this.handleChange}
            />
          </div>

          <button type="submit" className="btn btn-success btn-lg">
            Sign Up
          </button>
        </form>
      </div>
    );
  }
}

const Form = connect(
  null,
  mapDispatchToProps
)(SignUpForm);

export default Form;
