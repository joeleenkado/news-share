import React, { Component } from "react";
import { connect } from "react-redux";
import LogOutButton from "../LogOutButton/LogOutButton";
import mapStoreToProps from "../../redux/mapStoreToProps";
import EditModal from "../EditModal/EditModal";
// import StoryModal from "../StoryModal/StoryModal";
import "./NewsPage.css";
import Newspaper from '../Newspaper/Newspaper'
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

class NewsPage extends Component {
  // this component doesn't do much to start, just renders some user info to the DOM
  state = {
    showStory: false,
    showEdit: false,
  };

  componentDidMount() {
    this.props.dispatch({ type: "FETCH_STORY" });
  }


  hideEditModal = () => {
    this.setState({ showEdit: false });
    this.props.dispatch({ type: "FETCH_STORY" });
  };

 
  render() {
    const stories = this.props.store.story;
    return (
      <div>
        {/* {stories.length ? 
         JSON.stringify(stories[2]) : 
         JSON.stringify(this.props.store)
        }
        */}

        {/* REDUX STATE2: {JSON.stringify(stories[0].first_name)} */}

        {/* <p>Your ID is: {this.props.store.user.id}</p>
        <LogOutButton className="log-in" /> */}

        {/* <StoryModal
          showStoryProp={this.state.showStory}
          closeStoryProp={this.hideStoryModal}
        ></StoryModal> */}
        

        <div className="cardContainer">
          {stories.length ? (
            <h3 id="welcomeMessage">Click on a Headline to read your story</h3>
          ) : (
            <h3 id="welcomeMessage">
              You have not yet written any stories. Step one is to head over to
              the Library.
            </h3>
          )}
          {stories.map((story) => (
             <div className="card" key={story.id}>
               <Newspaper storyProp={story}/>
             </div>
          ))}
        </div>

      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(NewsPage);
