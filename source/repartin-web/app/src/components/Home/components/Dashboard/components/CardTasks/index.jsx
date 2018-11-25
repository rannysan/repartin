import React, { Component } from "react";
import View from "./View";

class CardTasks extends Component {

  openTasks( event ) {
    confirm( "open tasks" ) ?  '' : '';
  }

  render() {

    return (
      <View
      openTasks = {this.openTasks} />
    );
  }
}

export default CardTasks;