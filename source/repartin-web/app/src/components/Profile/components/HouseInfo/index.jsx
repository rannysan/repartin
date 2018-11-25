import React, { Component } from "react";
import View from "./View";

class HouseInfo extends Component {

  constructor( props ) {
    super( props );
    this.editHouse = this.editHouse.bind( this );
  }

  editHouse() {
    alert( "edit house info" );
  }

  render() {

    return(
      <View 
        { ...this.props }
        { ...this.state }
        editHouse={ this.editHouse }
      />
    );
  }
}

export default HouseInfo;