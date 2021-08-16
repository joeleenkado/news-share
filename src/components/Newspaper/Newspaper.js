import mapStoreToProps from "../../redux/mapStoreToProps";
import React from "react";
import { connect } from "react-redux";
import StoryModal from "../StoryModal/StoryModal";
import { confirmAlert } from "react-confirm-alert";
import EditModal from "../EditModal/EditModal";

class Newspaper extends React.Component {

state = {
  showStory: false,
  showEdit: false
}

showStoryModal = (e, story) => {
        console.log(`in OpenStoryModal function for story id = ${story.id}`);
        this.setState(
          {
            ...this.state,
            showStory: true,
            
          },
          function () {
            console.log(`showStory state has been set: ${this.state.showStory}`);
    
            this.props.dispatch({ type: "FETCH_DETAILS", payload: story.id });
          }
        );
    
        //this.props.dispatch({type: 'FETCH_DETAILS', payload: story.id })
      };
      hideStoryModal = () => {
        this.setState({ showStory: false });
        this.props.dispatch({ type: "FETCH_STORY" });
      };


      deleteConfirmation = (e, story) => {
        console.log("in deleteConfirmation function.");
    
        confirmAlert({
          title: "Please Confirm",
          message: `Would you like to delete ${story.headline}?`,
          buttons: [
            {
              label: "Yes",
              onClick: () => this.delete(e, story),
            },
            {
              label: "No",
              onClick: () => alert("Deletion Canceled"),
            },
          ],
        });
      };
    
      delete = (e, story) => {
        console.log("In deleteFunction");
        this.props.dispatch({ type: "DELETE_STORY", payload: story.id });
      };
    
      showEditModal = (e, story) => {
        console.log(`in OpenEditModal function for story id = ${story.id}`);
        this.setState(
          {
            ...this.state,
            showEdit: true,
          },
          function () {
            console.log(`showEdit state has been set: ${this.state.showEdit}`);
    
            this.props.dispatch({ type: "FETCH_DETAILS", payload: story.id });
          }
        );
      };

      hideEditModal = () => {
        this.setState({ showEdit: false });
        this.props.dispatch({ type: "FETCH_STORY" });
      };
    


render() {
  const {storyProp} = this.props;
    return(
    // <div className="card" key={storyProp.id}>
    <>
   
   <StoryModal
          showStoryProp={this.state.showStory}
          closeStoryProp={this.hideStoryModal}
        ></StoryModal>
        <EditModal
          showEditProp={this.state.showEdit}
          closeEditProp={this.hideEditModal}
        ></EditModal>
    <div>
      
     
      <div id="headline" onClick={(e) => this.showStoryModal(e, storyProp)}>
        {storyProp.headline}
      </div>
      {/* your username ({storyProp.user_id})
//<br/> */}
      {storyProp.first_name}
      <br />

      {storyProp.last_name}
      <br />

      {storyProp.title}
      <br />

      {storyProp.state}
      <br />

      {storyProp.party}
      <br />

      {storyProp.image_url}

      <br />

      {storyProp.body}
      <br />

      {storyProp.additional_information}
      <br />

      {storyProp.twitter}
      <br />

      {storyProp.facebook}
      <br />

      {storyProp.instagram}
      <br />
      <button onClick={(e) => this.showEditModal(e, storyProp)}>
        EDIT
      </button>
      <br />
      <br />

      <button
        className="deleteButton"
        onClick={(e) => this.deleteConfirmation(e, storyProp)}
      >
        DELETE
      </button>
 </div>
</>
    )//END return
}//END render
}//END Newspaper

export default connect(mapStoreToProps)(Newspaper);
