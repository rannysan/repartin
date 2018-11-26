import React, { Component } from "react";
import View from "./View";
import { firebaseConnect } from "react-redux-firebase";

class Dashboard extends Component {

  constructor( props ) {
    super( props );
    this.signOut = this.signOut.bind( this );
  }

  signOut() {
    localStorage.removeItem('auth-credential');
    this.props.firebase.auth().signOut()
      .then(() => {
        this.props.history.push('/')
    });
  }

  render() {

    return (
      <View
        signOut={ this.signOut }
      />
    );
  }
}

export default firebaseConnect()( Dashboard );