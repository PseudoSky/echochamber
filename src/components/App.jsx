import React from "react";
import Form from "./SignUpForm";
import styles from "../styles/App.css";
import LoginForm from "../semantic-ui-react/List";

const App = () => (
  <div className={styles.Page}>
    <div className={styles.pageHeader}>
      <div className={styles.pageHeaderIcon} />
      <div className={styles.pageTitle}>GYFanbase</div>
    </div>
    <div id="signUpForm">
      <Form />
    </div>
  </div>
);

export default App;
