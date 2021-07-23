import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';
import Modal from '../Modal/Modal'
class UserPage extends Component {
  // this component doesn't do much to start, just renders some user info to the DOM
  state = {
    show: false
  }
  
 
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_STORY' });
  }

  openModal = (e, story) => {
console.log(`in OpenModal function for story id = ${story.id}`);
  this.setState({ show: true });

this.props.dispatch({type: 'FETCH_DETAILS', payload: story.id })


  }

  hideModal = () => {
    this.setState({ show: false });
};

deleteFunction = (e, story) => {
  console.log('In deleteFunction');
  this.props.dispatch({type: 'DELETE_STORY', payload: story.id})
  
}
  
  render() {
    const stories = this.props.store.story
    return (
      <div>
        
       {stories.length ? 
         JSON.stringify(this.props.store.story[2]) : 
         JSON.stringify(this.props.store)
        }
       
 
       
       
       
        {/* REDUX STATE2: {JSON.stringify(stories[0].first_name)} */}

        <h1 id="welcome">Welcome, {this.props.store.user.username}!</h1>
        <p>Your ID is: {this.props.store.user.id}</p>
        <LogOutButton className="log-in" />


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
<Modal
                    
                    show={this.state.show}
                    closeModalProp={this.hideModal}
                    >
                </Modal>
          {stories.map((story) => ( 
<tr key={story.id}>



  <td onClick={(e) => this.openModal(e, story)}>{story.headline}</td>
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
  <td><button>EDIT</button></td>
  <td><button onClick={(e) => this.deleteFunction(e, story)}>DELETE</button></td>

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
