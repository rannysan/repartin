import React, { Component } from "react";
import View from "./View";

class FullCard extends Component {

  openProfile( event ) {
    confirm( "open profile" ) ?  '' : '';
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

export default FullCard;