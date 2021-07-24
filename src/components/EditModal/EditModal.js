import React, { Component } from 'react';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { connect } from 'react-redux';
import './EditModal.css';



class EditModal extends Component {
    state = {
      
      //if inputs are empty the booleans will flip to true, error & helperText on inputs
      showEdit: false,
      
    }
  
    //dispatches messageObj to saga for post route + sweetAlert success message
    
    //gets input values on pop-up modal and sets local state
    // handleModalChange = (inputValue, event) => {
    //   // this.props.dispatch({ type: 'GET_EMAIL', payload: this.state.messageObj.sent_to_user_id })
    //   this.setState({
       
    //   })
    // }//end handleModalChange
  
    render() {
      const showHideClassName = this.props.showEditProp ? ("modal display-block") : ("modal display-none")
      const { classes } = this.props
        const stories = this.props.store.story

      return (
        <div className={showHideClassName}>
          <h2>Modal</h2>

          {stories.length ? 
         JSON.stringify(stories[0]) : 
         JSON.stringify(this.props.store)
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
  