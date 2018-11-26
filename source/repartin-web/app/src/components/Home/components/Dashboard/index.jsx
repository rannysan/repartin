import React, { Component } from "react";
import View from "./View";
import { firebaseConnect } from "react-redux-firebase";

class Dashboard extends Component {

  constructor( props ) {
    super( props );
    this.signOut = this.signOut.bind( this );
  }

  render() {

    return (
      <View
        { ...this.props }
        { ...this.state }
      />
    );
  }
}

export default firebaseConnect()( Dashboard );