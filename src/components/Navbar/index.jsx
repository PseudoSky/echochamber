import React from "react";
import styles from "../../styles/Navbar.css";
import appStyles from "../../styles/App.css";

const Navbar = props => {
  var button;
  if (props.state.loggedIn === true) {
    button = (
      <button onClick={props.logoutButton} className={appStyles.button}>
        Logout
      </button>
    );
  } else if (props.state.alreadyHasCredentials === true) {
    button = (
      <button onClick={props.signUpButton} className={appStyles.button}>
        Sign Up
      </button>
    );
  } else {
    button = (
      <button onClick={props.loginButton} className={appStyles.button}>
        Login
      </button>
    );
  }
  return (
    <div className={styles.nav}>
      <div className={styles.pageHeader}>
        <div className={styles.pageTitle}>GYFanbase</div>
        <div className={styles.buttons} />
        {button}
      </div>
    </div>
  );
};

export default Navbar;
