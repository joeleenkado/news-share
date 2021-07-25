import React, { Component } from 'react';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { connect } from 'react-redux';
import './EditModal.css';
import { confirmAlert } from "react-confirm-alert";
import Loading from '../Loading/Loading';



class EditModal extends Component {
    state = {
        story: {
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
          id: ''

        },
        
      };


      handleInputChange = (e, inputProperty) => {
        console.log("Handling input-change...");
        console.log("Setting state...");
    
        this.setState(
          {
            story: {
              ...this.state.story,
              [inputProperty]: e.target.value,
              user_id: this.props.store.user.id,
              id: this.props.store.story[0].id
            },
          },
          function () {
            console.log("state has been set:", this.state);
          }
        );
      };


      clearInputs = () => {

        this.setState({
          
            story: {
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
              id: this.props.store.story[0].id
          }
        });
      
      
      }

updateConfirmation = (e, story) => {
    console.log(`in updateConfirmation function for story: ${story.id}`);
  
    confirmAlert({
      title: "Please Confirm",
      message: `Would you like to save edits made to ${this.state.story.headline}?`,
      buttons: [
        {
          label: "Yes",
          onClick: () => this.updateStory(e, story),
        },
        {
          label: "No",
          onClick: () => alert("Update Canceled"),
        },
      ],
    });
  
}

      updateStory = () => {
        if (this.state.story.headline === "") {
          alert("A headline is required for your story.");
        } else {
          console.log(`Sending updated ${this.state.story.headline} to Database...`);
          //Clear message... should say Hello!
          //console.log(`Sending ${this.state.newArt} to DB.`);
    
          this.props.dispatch({ type: "UPDATE_STORY", payload: this.state.story });
         
        }
        this.clearInputs()
        this.props.closeEditProp()
      };
    
    
  
    //dispatches messageObj to saga for post route + sweetAlert success message
    
    //gets input values on pop-up modal and sets local state
    // handleModalChange = (inputValue, event) => {
    //   // this.props.dispatch({ type: 'GET_EMAIL', payload: this.state.messageObj.sent_to_user_id })
    //   this.setState({
       
    //   })
    // }//end handleModalChange
  
    render() {
      const showHideClassName = this.props.showEditProp ? ("modal display-block") : ("modal display-none")
    //   const { classes } = this.props
      const {firstName, lastName, title, state, party, twitter, facebook, instagram, imageUrl, additionalInformation, headline, body} = this.state.story

        const story = this.props.store.story



      return (
        <div className={showHideClassName}>
          <h2>Modal</h2>

          {story.length ? 
         JSON.stringify(story[0]) : 
         JSON.stringify(this.props.store)
        }
       
//i need to put a ternairy here to run the form only is there is a story .length
      {story.length ?
      
      
       <form
      onSubmit={e => {
          e.preventDefault();
          this.updateConfirmation(e, story);
      } }>
        <label htmlFor="firstName">
          First Name
          <input
            id="firstName"
            value={firstName}
            placeholder={story[0].first_name}
            onChange={(e) => this.handleInputChange(e, "firstName", story)}
          />
        </label>
        

        <label htmlFor="lastName">
          Last Name
          <input
            id="lastName"
            value={lastName}
            placeholder={story[0].last_name}
            onChange={(e) => this.handleInputChange(e, "lastName")}
          />
        </label>   

        <label htmlFor="title">
          Title
          <input
            id="title"
            value={title}
            placeholder={story[0].title}
            onChange={(e) => this.handleInputChange(e, "title")}
          />
        </label>
        
        <label htmlFor="state">
          State
          <input
            id="state"
            value={state}
            placeholder={story[0].state}
            onChange={(e) => this.handleInputChange(e, "state")}
          />
        </label>



        <label htmlFor="party">
          Party
          <input
            id="party"
            value={party}
            placeholder={story[0].party}
            onChange={(e) => this.handleInputChange(e, "party")}
          />
        </label>


        <label htmlFor="twitter">
          Twitter
          <input
            id="twitter"
            value={twitter}
            placeholder={story[0].twitter}
            onChange={(e) => this.handleInputChange(e, "twitter")}
          />
        </label>


        <label htmlFor="facebook">
          Facebook
          <input
            id="facebook"
            value={facebook}
            placeholder={story[0].facebook}
            onChange={(e) => this.handleInputChange(e, "facebook")}
          />
        </label>

        <label htmlFor="instagram">
          Instagram 
          <input
            id="instagram"
            value={instagram}
            placeholder={story[0].instagram}
            onChange={(e) => this.handleInputChange(e, "instagram")}
          />
        </label>



        <label htmlFor="imageUrl">
          Image URL
          <input
            id="imageUrl"
            value={imageUrl}
            placeholder={story[0].image_url}
            onChange={(e) => this.handleInputChange(e, "imageUrl")}
          />
        </label> 

        <label htmlFor="additionalInformation">
          Additional Information
          <input
            id="additionalInformation"
            value={additionalInformation}
            placeholder={story[0].additional_information}
            onChange={(e) => this.handleInputChange(e, "additionalInformation")}
          />
        </label>

        <label htmlFor="headline">
          Headline
          <input
            id="headline"
            value={headline}
            placeholder={story[0].headline}
            onChange={(e) => this.handleInputChange(e, "headline")}
          />
        </label>

        <label htmlFor="body">
          Body
          <input
            id="body"
            value={body}
            placeholder={story[0].body}
            onChange={(e) => this.handleInputChange(e, "body")}
          />
        </label>

       
        

        <button>Update</button>
      </form> :
      <Loading/>

}
{/* REDUX STATE: {JSON.stringify(stories)} */}

          <button
                  type="button"
                  onClick={this.props.closeEditProp}
                //   className={classes.button}
                >
                  CLOSE
             </button>
        </div>
      );
    }
  };
  
  export default connect(mapStoreToProps)(EditModal);
  