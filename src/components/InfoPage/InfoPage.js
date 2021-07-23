import React from 'react';
import mapStoreToProps from "../../redux/mapStoreToProps";
import { connect } from "react-redux";


// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

// const InfoPage = () => (
//   <div>
//     <p>Info Page</p>
//   </div>
// );

// If you needed to add local state or other things,
// you can make it a class component like:


class InfoPage extends React.Component {

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
      }
    });
  
  
  }


  addStory = () => {
    if (this.state.newStory.headline === "") {
      alert("A headline is required for your story.");
    } else {
      console.log(`Sending ${this.state.newStory.headline} to Database...`);
      //Clear message... should say Hello!
      //console.log(`Sending ${this.state.newArt} to DB.`);

      this.props.dispatch({ type: "ADD_STORY", payload: this.state.newStory });
     
    }
    this.clearInputs()
  };








  render() {
    const {firstName, lastName, title, state, party, twitter, facebook, instagram, imageUrl, additionalInformation, headline, body} = this.state.newStory

    return (
      <div>

{/* REDUX STATE: {JSON.stringify(this.props.store)} */}

        <form
      onSubmit={e => {
          e.preventDefault();
          this.addStory();
      } }>
        <label htmlFor="firstName">
          First Name
          <input
            id="firstName"
            value={firstName}
            placeholder=""
            onChange={(e) => this.handleInputChange(e, "firstName")}
          />
        </label>
        

        <label htmlFor="lastName">
          Last Name
          <input
            id="lastName"
            value={lastName}
            placeholder=""
            onChange={(e) => this.handleInputChange(e, "lastName")}
          />
        </label>   

        <label htmlFor="title">
          Title
          <input
            id="title"
            value={title}
            placeholder=""
            onChange={(e) => this.handleInputChange(e, "title")}
          />
        </label>
        
        <label htmlFor="state">
          State
          <input
            id="state"
            value={state}
            placeholder=""
            onChange={(e) => this.handleInputChange(e, "state")}
          />
        </label>



        <label htmlFor="party">
          Party
          <input
            id="party"
            value={party}
            placeholder=""
            onChange={(e) => this.handleInputChange(e, "party")}
          />
        </label>


        <label htmlFor="twitter">
          Twitter
          <input
            id="twitter"
            value={twitter}
            placeholder=""
            onChange={(e) => this.handleInputChange(e, "twitter")}
          />
        </label>


        <label htmlFor="facebook">
          Facebook
          <input
            id="facebook"
            value={facebook}
            placeholder=""
            onChange={(e) => this.handleInputChange(e, "facebook")}
          />
        </label>

        <label htmlFor="instagram">
          Instagram 
          <input
            id="instagram"
            value={instagram}
            placeholder=""
            onChange={(e) => this.handleInputChange(e, "instagram")}
          />
        </label>



        <label htmlFor="imageUrl">
          Image URL
          <input
            id="imageUrl"
            value={imageUrl}
            placeholder=""
            onChange={(e) => this.handleInputChange(e, "imageUrl")}
          />
        </label> 

        <label htmlFor="additionalInformation">
          Additional Information
          <input
            id="additionalInformation"
            value={additionalInformation}
            placeholder=""
            onChange={(e) => this.handleInputChange(e, "additionalInformation")}
          />
        </label>

        <label htmlFor="headline">
          Headline
          <input
            id="headline"
            value={headline}
            placeholder=""
            onChange={(e) => this.handleInputChange(e, "headline")}
          />
        </label>

        <label htmlFor="body">
          Body
          <input
            id="body"
            value={body}
            placeholder=""
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
    )
  }
}

export default connect(mapStoreToProps)(InfoPage);
