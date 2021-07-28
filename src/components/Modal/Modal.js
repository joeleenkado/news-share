import React, { Component } from "react";
import mapStoreToProps from "../../redux/mapStoreToProps";
import { connect } from "react-redux";
import "./Modal.css";

class Modal extends Component {
  state = {
    //if inputs are empty the booleans will flip to true, error & helperText on inputs
    showStory: false,
  };

  //dispatches messageObj to saga for post route + sweetAlert success message

  //gets input values on pop-up modal and sets local state
  // handleModalChange = (inputValue, event) => {
  //   // this.props.dispatch({ type: 'GET_EMAIL', payload: this.state.messageObj.sent_to_user_id })
  //   this.setState({

  //   })
  // }//end handleModalChange

  render() {
    const showHideClassName = this.props.showStoryProp
      ? "modal display-block"
      : "modal display-none";
    const { classes } = this.props;
    const stories = this.props.store.story;

    return (
      <div
        className={`${showHideClassName} center`}
        // id="center"
      >
        {stories.length
          ? JSON.stringify(stories[0].body)
          : JSON.stringify(this.props.store)}

        {/* REDUX STATE: {JSON.stringify(stories)} */}

        <button
          type="button"
          onClick={this.props.closeStoryProp}
          //   className={classes.button}
        >
          CLOSE
        </button>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(Modal);
