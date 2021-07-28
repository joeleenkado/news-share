import React from "react";
import mapStoreToProps from "../../redux/mapStoreToProps";
import { connect } from "react-redux";
// import Senator from '../Senator/Senator.json'

class TypewriterPage extends React.Component {
  state = {
    newStory: {
      user_id: "",
      firstName: "",
      lastName: "",
      title: "",
      state: "",
      party: "",
      twitter: "",
      facebook: "",
      instagram: "",
      imageUrl: "",
      additionalInformation: "",
      headline: "",
      body: "",
    },
  };

  componentDidMount() {
    this.props.dispatch({ type: "FETCH_MEMBER" });
  }

  handleInputChange = (event, inputProperty) => {
    console.log("Handling input-change...");
    console.log("Setting state...");

    this.setState(
      {
        newStory: {
          ...this.state.newStory,
          [inputProperty]: event.target.value,
          user_id: this.props.store.user.id,
        },
      },
      function () {
        console.log("state has been set:", this.state);
      }
    );
  };

  clearInputs = () => {
    this.setState({
      newStory: {
        user_id: "",
        firstName: "",
        lastName: "",
        title: "",
        state: "",
        party: "",
        twitter: "",
        facebook: "",
        instagram: "",
        imageUrl: "",
        additionalInformation: "",
        headline: "",
        body: "",
      },
    });
  };

  addStory = () => {
    if (this.state.newStory.headline === "") {
      alert("A headline is required for your story.");
    } else {
      console.log(`Sending ${this.state.newStory.headline} to Database...`);
      //Clear message... should say Hello!
      //console.log(`Sending ${this.state.newArt} to DB.`);

      this.props.dispatch({ type: "ADD_STORY", payload: this.state.newStory });
    }
    this.clearInputs();
  };

  render() {
    const {
      firstName,
      lastName,
      title,
      state,
      party,
      twitter,
      facebook,
      instagram,
      imageUrl,
      additionalInformation,
      headline,
      body,
    } = this.state.newStory;

    return (
      <div className="card">
        {/* REDUX STATE: {JSON.stringify(this.props.store)} */}
        <h3 id="welcomeMessage">
          Once you have submitted your story, head over to the News Room to see
          view your story.
        </h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            this.addStory();
          }}
        >
          <label htmlFor="firstName">
            First Name
            <input
              id="firstName"
              value={firstName}
              placeholder=""
              onChange={(e) => this.handleInputChange(e, "firstName")}
            />
          </label>
          <br />

          <label htmlFor="lastName">
            Last Name
            <input
              id="lastName"
              value={lastName}
              placeholder=""
              onChange={(e) => this.handleInputChange(e, "lastName")}
            />
          </label>
          <br />

          <label htmlFor="title">
            Title
            <input
              id="title"
              value={title}
              placeholder=""
              onChange={(e) => this.handleInputChange(e, "title")}
            />
          </label>
          <br />

          <label htmlFor="state">
            State
            <input
              id="state"
              value={state}
              placeholder="ex: MN"
              maxLength="2"
              onChange={(e) => this.handleInputChange(e, "state")}
            />
          </label>

          <br />

          <label htmlFor="party">
            Party
            <input
              id="party"
              value={party}
              placeholder="ex: D"
              onChange={(e) => this.handleInputChange(e, "party")}
            />
          </label>
          <br />

          <label htmlFor="twitter">
            Twitter
            <input
              id="twitter"
              value={twitter}
              placeholder=""
              onChange={(e) => this.handleInputChange(e, "twitter")}
            />
          </label>

          <br />

          <label htmlFor="facebook">
            Facebook
            <input
              id="facebook"
              value={facebook}
              placeholder=""
              onChange={(e) => this.handleInputChange(e, "facebook")}
            />
          </label>
          <br />

          <label htmlFor="instagram">
            Instagram
            <input
              id="instagram"
              value={instagram}
              placeholder=""
              onChange={(e) => this.handleInputChange(e, "instagram")}
            />
          </label>

          <br />

          <label htmlFor="imageUrl">
            Image URL
            <input
              id="imageUrl"
              value={imageUrl}
              placeholder=""
              onChange={(e) => this.handleInputChange(e, "imageUrl")}
            />
          </label>
          <br />

          <label htmlFor="additionalInformation">
            Additional Information
            <textarea
              id="additionalInformation"
              value={additionalInformation}
              placeholder=""
              onChange={(e) =>
                this.handleInputChange(e, "additionalInformation")
              }
            />
          </label>
          <br />

          <label htmlFor="headline">
            Headline
            <input
              id="headline"
              name="headline"
              value={headline}
              placeholder=""
              rows="10"
              onChange={(e) => this.handleInputChange(e, "headline")}
            />
          </label>
          <br />

          <label htmlFor="body">
            Body
            <textarea
              id="body"
              value={body}
              rows="20"
              placeholder="Write your story here."
              onChange={(e) => this.handleInputChange(e, "body")}
            />
          </label>

          {/* {ANIMALS.map((animal) => {
                return(
              <option value={animal} key={animal}>
                {animal}
              </option>
            )})} */}

          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(TypewriterPage);
