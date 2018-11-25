import React, { Component } from "react";
import View from "./View";

class CardExpenses extends Component {

  openExpenses( event ) {
    confirm( "open expenses" ) ?  '' : '';
  }
  
  render() {

    return (
      <View 
      openExpenses = {this.openExpenses} />
    );
  }
}

export default CardExpenses;