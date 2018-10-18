import React from "react";
import styles from "../../styles/Navbar.css";
import appStyles from "../../styles/App.css";

const Navbar = () => (
  <div className={styles.nav}>
    <div className={styles.pageHeader}>
      <div className={styles.pageTitle}>GYFanbase</div>
      <div className={styles.buttons}>
        <button className={appStyles.button}>Login</button>
      </div>
    </div>
  </div>
);

export default Navbar;
