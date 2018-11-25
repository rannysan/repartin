import React, { Component } from "react";
import View from "./View";
import { firebaseConnect  } from 'react-redux-firebase'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

class Home extends Component {

  constructor( props ) {
    super(props);
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
      <View { ...this.props } signOut={ this.signOut }/>
    );
  }
};


export default compose(
    firebaseConnect(),
    withRouter,
  )(Home);
