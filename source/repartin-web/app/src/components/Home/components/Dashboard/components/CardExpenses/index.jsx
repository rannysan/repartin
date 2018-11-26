import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import View from "./View";
import { compose } from "redux";

class CardExpenses extends Component {

  constructor( props ) {
    super( props );
    this.openExpenses = this.openExpenses.bind( this );
  }

  openExpenses( event ) {
    this.props.history.push( "/financas" );
  }
  
  render() {

    return (
      <View 
      openExpenses = {this.openExpenses} />
    );
  }
}

export default compose(
  withRouter
)( CardExpenses );