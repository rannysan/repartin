import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import View from "./View";

class BottomNavigation extends Component {

  state = {
    value: 0,
    visible: true
  }

  constructor( props ) {
    super( props );
    this.handleChange     = this.handleChange.bind( this );
    this.handlePageChange = this.handlePageChange.bind( this );
  }

  componentWillMount() {
    this.props.setCollapse( true );
    this.handlePageChange( this.props.location );
    this.unlisten = this.props.history.listen( this.handlePageChange );
  }

  componentWillUnmount() {
    this.unlisten();
  }

  handlePageChange( location ) {
    const indexOf = [ "/", "/financas", "/tarefas" ].indexOf( location.pathname );
    const state   = {
      visible: indexOf != -1
    }

    if( state.visible ) {
      state.value = indexOf;
    }
    
    this.setState( state );
    this.props.setCollapse( state.visible );
  }

  handleChange( event, value ) {
   
    switch( value ) {
      case 0:
        this.props.history.push( "/" );
        break;
      case 1:
        this.props.history.push( "/financas" );
        break;
      case 2:
        this.props.history.push( "/tarefas" );
        break;
      default:
      case 0:
        this.props.history.push( "/" );
    }
  }

  render() {
    
    return (
      <View
        { ...this.props }
        { ...this.state }
        handleChange={ this.handleChange }
      />
    )
  }
}

export default compose(
  withRouter
)( BottomNavigation );