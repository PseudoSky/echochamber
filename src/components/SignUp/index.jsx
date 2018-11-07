import React, { Component } from "react";
import styles from "../../styles/Login.css";
import appStyles from "../../styles/App.css";
import axios from "axios";
const crypto = require("crypto");
import hashPassword from "../../helperFunctions/index";
const uuidv1 = require("uuid/v1");
import EditModal from "../EditModal";
import { Button, Header, Image, Modal } from "semantic-ui-react";

// const Rando = () => (
//   <Modal trigger={<Button>Show Modal</Button>}>
//     <EditModal />
//     <Modal.Header>Select a Photo</Modal.Header>
//     <Modal.Content image>
//       <Image
//         wrapped
//         size="medium"
//         src="https://react.semantic-ui.com/images/avatar/large/rachel.png"
//       />
//       <Modal.Description>
//         <Header>Default Profile Image</Header>
//         <p>
//           We've found the following gravatar image associated with your e-mail
//           address.
//         </p>
//         <p>Is it okay to use this photo?</p>
//       </Modal.Description>
//     </Modal.Content>
//   </Modal>
// );

// import { connect } from "react-redux";
// import { addUser } from "../../redux/actions/index";

// const mapDispatchToProps = dispatch => {
//   return {
//     addUser: article => dispatch(addUser(article))
//   };
// };

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.postSignUp = this.postSignUp.bind(this);
    this.handleSubmitOnEnter = this.handleSubmitOnEnter.bind(this);
  }

  handleSubmitOnEnter(event) {
    if (event.key === "Enter") {
      this.postSignUp();
    }
  }

  //attempt to add new user info to database
  postSignUp() {
    //sets requirements for inputs
    if (
      this.props.firstName.length > 0 &&
      this.props.lastName.length > 0 &&
      this.props.email.length > 4 &&
      this.props.password.length > 6 &&
      this.props.email.includes("@", ".")
    ) {
      //hashes password and sends request upon successfull hashing
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
            uuid: uuidv1(),
            firstName: this.props.firstName,
            lastName: this.props.lastName,
            email: this.props.email,
            password: pw
          };

          axios({ method: "post", url: "/api/user", data: body })
            //upon success, set loggedIn to true on App
            .then(data => {
              console.log(data.data, "data");
              this.props.userVerified();
            })
            //upon error, 401 code means email is already registered
            .catch(err => {
              console.log(err, "the error");
              window.alert(
                "There is already an account registered under the email you provided. Please login instead!"
              );
            });
        }
      );
      //if input requirements are not met
    } else {
      //if email does not contain expected characters
      if (this.props.email.includes("@", ".") === false) {
        window.alert("email is entered incorrectly");
        //if password is not long enough
      } else if (this.props.password.length < 7) {
        window.alert("password must be at least 6 characters");
        //if inputs are blank
      } else {
        window.alert("missing inputs");
      }
    }
  }

  render() {
    const { firstName, lastName, email, password } = this.props;
    return (
      <div className={styles.centerForm}>
        <div id="SignUpForm" className={styles.form}>
          <div className={styles.centerContent}>
            <div className={styles.inputLine}>
              {/* first name label and input */}
              {/* <Rando /> */}
              <div className={styles.label}>First Name</div>
              <div className={styles.input}>
                <input
                  className={styles.inputBox}
                  type="text"
                  id="firstName"
                  value={firstName}
                  onKeyUp={event => {
                    this.handleSubmitOnEnter(event);
                  }}
                  onChange={event => {
                    this.props.handleFirstNameChange(event);
                  }}
                />
              </div>
            </div>
            <div className={styles.inputLine}>
              {/* last name label and input */}
              <div className={styles.label}>Last Name</div>
              <div className={styles.input}>
                <input
                  className={styles.inputBox}
                  type="text"
                  id="lastName"
                  value={lastName}
                  onKeyUp={event => {
                    this.handleSubmitOnEnter(event);
                  }}
                  onChange={event => {
                    this.props.handleLastNameChange(event);
                  }}
                />
              </div>
            </div>
            <div className={styles.inputLine}>
              {/* email label and input */}
              <div className={styles.label}>Email</div>
              <div className={styles.input}>
                <input
                  className={styles.inputBox}
                  type="text"
                  id="form"
                  value={email}
                  onKeyUp={event => {
                    this.handleSubmitOnEnter(event);
                  }}
                  onChange={event => {
                    this.props.handleEmailChange(event);
                  }}
                />
              </div>
            </div>
            <div className={styles.inputLine}>
              {/* password label and input */}
              <div className={styles.label}>Password</div>
              <div className={styles.input}>
                <input
                  className={styles.inputBox}
                  type="text"
                  id="form"
                  value={password}
                  onKeyUp={event => {
                    this.handleSubmitOnEnter(event);
                  }}
                  onChange={event => {
                    this.props.handlePasswordChange(event);
                  }}
                />
              </div>
            </div>
            <div className={styles.buttonIndent}>
              <button
                onClick={this.postSignUp}
                className={appStyles.button}
                type="submit"
              >
                Sign Up
              </button>
            </div>
            <div
              className={styles.alreadyMember}
              onClick={this.props.loginButton}
            >
              <a href="#">Already a member? Login here...</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// const Form = connect(
//   null,
//   mapDispatchToProps
// )(SignUpForm);

export default SignUpForm;
