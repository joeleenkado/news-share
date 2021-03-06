import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import LogOutButton from "../LogOutButton/LogOutButton";
import "./Nav.css";
import mapStoreToProps from "../../redux/mapStoreToProps";

const Nav = (props) => {
  let loginLinkData = {
    path: "/login",
    text: "Login / Register",
  };

  // if (props.store.user.id != null) {
  //   loginLinkData.path = '/user';
  //   loginLinkData.text = 'Hom';
  // }

  return (
    <div className="nav">
      <Link to="/home">
        <div id="navLogoContainer">
          <img
            id="blackBirdLogo"
            src="/images/logo.jpg"
            alt="blackBirdLogo"
          ></img>
        </div>
      </Link>

      <h2 className="nav-title">BlackBirds.io</h2>

      <div className="nav-right">
        {props.store.user.id != null ? (
          <LogOutButton className="nav-link" />
        ) : (
          <Link className="nav-link" to={loginLinkData.path}>
            {" "}
            {loginLinkData.text}
          </Link>
        )}

        {/* <Link className="nav-link" to={loginLinkData.path}> */}
        {/* Show this link if they are logged in or not,
          but call this link 'Home' if they are logged in,
          and call this link 'Login / Register' if they are not */}
        {/* {loginLinkData.text} */}
        {/* </Link>*/}
        {/* Show the link to the info page and the logout button if the user is logged in */}

        {props.store.user.id && (
          <>
            <Link className="nav-link" to="/typewriter">
              Typewriter
            </Link>

            {/* <LogOutButton className="nav-link" /> */}
            <Link className="nav-link" to="/news">
              News Room
            </Link>
          </>
        )}
        {/* Always show this link since the about page is not protected */}
        <Link className="nav-link" to="/library">
          Library
        </Link>
      </div>
    </div>
  );
};

export default connect(mapStoreToProps)(Nav);
