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
    this.props.history.push( "/perfil" );
  }

  houseMembers( event ) {
    confirm( "see house members" ) ?  '' : '';
  }

  render() {

    return (
      <View
      openProfile = {this.openProfile}
      houseMembers = {this.houseMembers} />
    );
  }
}

export default compose(
  withRouter
)( FullCard );