import React, { Component } from "react";
import View from "./View";

class FullCard extends Component {

  openProfile( event ) {
    confirm( "open profile" ) ?  '' : '';
  }

  render() {

    return (
      <View
      openProfile = {this.openProfile} />
    );
  }
}

export default FullCard;