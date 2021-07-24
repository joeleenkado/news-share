import React, { Component } from 'react';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { connect } from 'react-redux';
import './EditModal.css';
import { confirmAlert } from "react-confirm-alert";




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
        },
      };


      handleInputChange = (event, inputProperty) => {
        console.log("Handling input-change...");
        console.log("Setting state...");
    
        this.setState(
          {
            Story: {
              ...this.state.Story,
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
          }
        });
      
      
      }

updateConfirmation = (e, story) => {
    console.log('in updateConfirmation function.');
  
    confirmAlert({
      title: "Please Confirm",
      message: `Would you like to save edits made to ${story.headline}?`,
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
    
          this.props.dispatch({ type: "UPDATE_STORY", payload: this.state.newStory });
         
        }
        this.clearInputs()
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

        const stories = this.props.store.story



      return (
        <div className={showHideClassName}>
          <h2>Modal</h2>

          {stories.length ? 
         JSON.stringify(stories[0]) : 
         JSON.stringify(this.props.store)
        }
       

       <form
      onSubmit={e => {
          e.preventDefault();
          this.updateConfirmation();
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

       
        

        <button>Update</button>
      </form>


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
  