import React, { Component } from "react";
import View from "./View";
import { firebaseConnect } from "react-redux-firebase";

class Welcome extends Component {

  constructor( props ) {
    super( props );
    this.createHouse = this.createHouse.bind( this );
    this.joinHouse   = this.joinHouse.bind( this );
    this.signOut     = this.signOut.bind( this );
  }

  createHouse( event ) {
    confirm( "create house" ) ? this.props.setMember( true ) : '';
  }

  joinHouse( event ) {
    confirm( "enter house id" ) ? this.props.setMember( true ) : '';
  }

  signOut( event ) {
    this.props.firebase.auth().signOut();
  }

  render() {

    return (
      <View 
        { ...this.props }
        createHouse={ this.createHouse }
        joinHouse={ this.joinHouse }
        signOut={ this.signOut }
      />
    );
  }
}

export default firebaseConnect()( Welcome );
