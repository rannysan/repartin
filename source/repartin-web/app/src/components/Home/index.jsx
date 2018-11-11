import React, { Component } from "react";
import View from "./View";

export default class extends Component {

  constructor( props ) {
    super( props );
    this.signOut = this.signOut.bind( this );
  }

  signOut( event ) {
    event.preventDefault();
    this.props.firebaseAuth().signOut();
  }

  render() {
    
    return (
      <View { ...this.props } signOut={ this.signOut }/>
    );
  }
};