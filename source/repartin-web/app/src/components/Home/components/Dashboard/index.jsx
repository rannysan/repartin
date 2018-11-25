import React, { Component } from "react";
import View from "./View";
import { firebaseConnect } from "react-redux-firebase";

class Dashboard extends Component {

  constructor( props ) {
    super( props );
    this.signOut = this.signOut.bind( this );
  }

  signOut() {
    this.props.firebase.auth().signOut();
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