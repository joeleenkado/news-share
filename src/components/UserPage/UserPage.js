import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';
import EditModal from '../EditModal/EditModal'
import Modal from '../Modal/Modal'



import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css"

class UserPage extends Component {
  // this component doesn't do much to start, just renders some user info to the DOM
  state = {
    showStory: false,
    showEdit: false
  }
  
 
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_STORY' });
  }

  openStoryModal = (e, story) => {
console.log(`in OpenStoryModal function for story id = ${story.id}`);
  this.setState(
    { 
      ...this.state,
      showStory: true 
    }, function () {
    console.log(`showStory state has been set: ${this.state.showStory}`);

    this.props.dispatch({type: 'FETCH_DETAILS', payload: story.id});
});
  

//this.props.dispatch({type: 'FETCH_DETAILS', payload: story.id })


  }

  hideStoryModal = () => {
    this.setState({ showStory: false });
     this.props.dispatch({type: 'FETCH_STORY'})
};

hideEditModal = () => {
  this.setState({ showEdit: false });
   this.props.dispatch({type: 'FETCH_STORY'})
}


deleteConfirmation = (e, story) => {
  console.log('in deleteConfirmation function.');
  
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
  console.log('In deleteFunction');
  this.props.dispatch({type: 'DELETE_STORY', payload: story.id})
  
}



openEditModal = (e, story) => {
  console.log(`in OpenEditModal function for story id = ${story.id}`);
    this.setState(
      {
      ...this.state,
      showEdit: true 
    }, function () {
    console.log(`showEdit state has been set: ${this.state.showEdit}`);
    
      this.props.dispatch({type: 'FETCH_DETAILS', payload: story.id});
  });


}

  
  render() {
    const stories = this.props.store.story
    return (
      <div>

       {/* {stories.length ? 
         JSON.stringify(stories[2]) : 
         JSON.stringify(this.props.store)
        }
        */}
 
       
       
       
        {/* REDUX STATE2: {JSON.stringify(stories[0].first_name)} */}

        <h1 id="welcome">Welcome, {this.props.store.user.username}!</h1>
        <p>Your ID is: {this.props.store.user.id}</p>
        <LogOutButton className="log-in" />

        <Modal
                    
                    showStoryProp={this.state.showStory}
                    closeStoryProp={this.hideStoryModal}
                    >
                </Modal>
                <EditModal
                showEditProp={this.state.showEdit}
                closeEditProp={this.hideEditModal}
                >

                </EditModal>
<table border="1">

  <thead>
    <tr>
<td>headline</td>
<td>Author</td>
<td>politican first name</td>
<td>politican last name</td>
<td>Job Title</td>
<td>state</td>
<td>party</td>
<td>image URL</td>
<td>body</td>
<td>additional information</td>
<td>twitter</td>
<td>facebook</td>
<td>instagram</td>

      </tr>


</thead>
<tbody>

          {stories.map((story) => ( 
<tr key={story.id}>



  <td onClick={(e) => this.openStoryModal(e, story)}>{story.headline}</td>
  <td>your username ({story.user_id})</td>
  <td>{story.first_name}</td>
  <td>{story.last_name}</td>

  <td>{story.title}</td>


  <td>{story.state}</td>

  
  <td>{story.party}</td>
  <td>
    {story.image_url}
            
  </td>
  <td>{story.body}</td>
  <td>{story.additional_information}</td>

  <td>{story.twitter}</td>
  <td>{story.facebook}</td>
  <td>{story.instagram}</td>
  <td><button onClick={(e) => this.openEditModal(e, story)}>EDIT</button></td>
  <td><button onClick={(e) => this.deleteConfirmation(e, story)}>DELETE</button></td>

</tr>
          ))}  

  </tbody>

</table>
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(UserPage);
