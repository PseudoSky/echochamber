import React, { Component } from "react";

import appStyles from "../../styles/App.css";

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      userVerified: false
    };
  }

  render() {
    return <div>Welcome to your dashboard!</div>;
  }
}

export default Dashboard;
