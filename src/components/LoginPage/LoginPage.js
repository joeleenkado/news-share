import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import LoginForm from "../LoginForm/LoginForm";

class LoginPage extends Component {
  render() {
    return (
      <div>
        <LoginForm />

        <center>
          <button
            style={{ padding: "10" }}
            type="button"
            className="btn btn_asLink"
            onClick={() => {
              this.props.history.push("/registration");
            }}
          >
            [CLICK HERE TO REGISTER AS A NEW USER]
          </button>
        </center>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(LoginPage);
