import React, { Component, Fragment } from "react";
import View from "./View";
import { firebaseConnect  } from 'react-redux-firebase'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom';

class Login extends Component {
  
  render() {
    
    return (
      <View 
        { ...this.props }
        { ...this.state }
      />
    );
  }
}



export default compose(
  firebaseConnect(),
  withRouter,
)(Login);