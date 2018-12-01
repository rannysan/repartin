import React, { Component } from "react";
import View from "./View";
import { firebaseConnect } from "react-redux-firebase";
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

class Welcome extends Component {

  state = {
    openInputModal: false
  }

  constructor( props ) {
    super( props );

    this.handleJoinHouse = this.handleJoinHouse.bind( this )
    this.handleCancel    = this.handleCancel.bind( this )
  }

  openJoinHouse = ( value ) => ( event ) => {
    
    this.setState( {
      openInputModal: value
    } )
  }
  
  handleJoinHouse( id ) {
    alert( `send invite to house ${ id }` )
    this.props.setPending( true )
    this.setState( {
      openInputModal: false
    } )
  }

  handleCancel( event ) {
    this.props.setPending( false )
  }

  signOut  = (event) => {
    event.preventDefault();
    localStorage.removeItem('auth-credential');
    this.props.firebase.auth().signOut()
      .then(() => {
        this.props.history.push('/')
    });
  }

  render() {

    return (
      <View 
        { ...this.state }
        { ...this.props }
        createHouse={ this.createHouse }
        openJoinHouse={ this.openJoinHouse }
        handleJoinHouse={ this.handleJoinHouse }
        handleCancel={ this.handleCancel }
        signOut={ this.signOut }
      />
    );
  }
}

export default compose(
  firebaseConnect(),
  withRouter,
)(Welcome);
