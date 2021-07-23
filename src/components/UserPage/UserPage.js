import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';

class UserPage extends Component {
  // this component doesn't do much to start, just renders some user info to the DOM
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_STORY' });
  }

  render() {
    const stories = this.props.store.story
    return (
      <div>
        REDUX STATE: {JSON.stringify(stories)}

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
          {stories.map((story) => ( 
<tr>
  <td>{story.headline}</td>
  <td>your username ({story.user_id})</td>
  <td>{story.first_name}</td>
  <td>{story.last_name}</td>

  <td>{story.title}</td>


  <td>{story.state}</td>

  
  <td>{story.party}</td>
  <td>{story.image_url}</td>
  <td>{story.body}</td>
  <td>{story.additional_information}</td>

  <td>{story.twitter}</td>
  <td>{story.facebook}</td>
  <td>{story.instagram}</td>
  
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
