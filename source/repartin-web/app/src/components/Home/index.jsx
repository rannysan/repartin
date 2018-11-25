import React, { Component } from "react";
import View from "./View";
import { firebaseConnect  } from 'react-redux-firebase'

class Home extends Component {

  constructor( props ) {
    super( props );
  }

  signOut  = (event) => {
    event.preventDefault();
    this.props.firebase.auth().signOut();
  }

  render() {
    
    return (
      <View { ...this.props } signOut={ this.signOut }/>
    );
  }
};

export default firebaseConnect()(Home);