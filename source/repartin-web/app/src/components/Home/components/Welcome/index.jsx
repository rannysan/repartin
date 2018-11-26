import React, { Component } from "react";
import View from "./View";
import { firebaseConnect } from "react-redux-firebase";
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

class Welcome extends Component {

  constructor( props ) {
    super( props );
  }

  createHouse = ( event ) => {
    confirm( "create house" ) ? this.props.setMember( true ) : '';
  }

  joinHouse = ( event ) => {
    confirm( "enter house id" ) ? this.props.setMember( true ) : '';
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
        { ...this.props }
        createHouse={ this.createHouse }
        joinHouse={ this.joinHouse }
        signOut={ this.signOut }
      />
    );
  }
}

export default compose(
  firebaseConnect(),
  withRouter,
)(Welcome);
