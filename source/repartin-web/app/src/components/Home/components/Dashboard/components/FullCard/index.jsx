import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import View from "./View";

class FullCard extends Component {

  constructor( props ) {
    super( props );
    this.openProfile = this.openProfile.bind( this );
  }

  openProfile() {
    console.log( "aa" );
    this.props.history.push( "/perfil" );
  }

  render() {

    return (
      <View
      openProfile = {this.openProfile} />
    );
  }
}

export default compose(
  withRouter
)( FullCard );