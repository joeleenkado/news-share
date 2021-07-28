import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import Senator from "../Senator/Senator.json";
import "./LibraryPage.css";
// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class Library extends Component {
  state = {
    heading: "Class Component",
  };

  render() {
    return (
      <div className="cardContainer">
        <h3 id="welcomeMessage">
          Welcome {this.props.store.user.username}! Here is the Library where
          you can research Politicians. Once you are ready, head over to the
          Typewriter to submit your story.
        </h3>

        {Senator.results[0].members.map((senator) => (
          <div className="card" key={senator.id}>
            <div id="headline" onClick={(e) => this.openStoryModal(e, senator)}>
              {/* {story.headline}  */}
            </div>
            {/* your username ({story.user_id}) */}
            {/* <br/> */}
            {senator.first_name} {senator.last_name}
            <br />
            Gender: {senator.gender}
            <br />
            {senator.title}
            <br />
            State: {senator.state}
            <br />
            Party: {senator.party}
            <br />
            <a href={senator.url}>{senator.url}</a>
            {/* {story.image_url} */}
            <br />
            Contact: {senator.phone}
            {/* {senator.contact_form} */}
            {/* {story.body} */}
            <br />
            {/* {story.additional_information} */}
            {/* <br/> */}
            twitter: {senator.twitter_account}
            <br />
            facebook: {senator.facebook_account}
            <br />
            youtube: {senator.youtube_account}
            <br />
            Last Updated: {senator.last_updated}
            {/* <button onClick={(e) => this.openEditModal(e, story)}>EDIT</button> */}
            {/* <br/> */}
            {/* <button onClick={(e) => this.deleteConfirmation(e, story)}>DELETE</button> */}
          </div>
        ))}
      </div>
    );
  }
}

export default connect(mapStoreToProps)(Library);
