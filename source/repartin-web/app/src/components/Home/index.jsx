import React, { Component } from "react";
import View from "./View";
import { firebaseConnect  } from 'react-redux-firebase'

class Home extends Component {

  state = {
    isMember: true // é de uma rep?
  }

  constructor( props ) {
    super(props);
    this.setMember = this.setMember.bind( this );
  }

  signOut  = (event) => {
    event.preventDefault();
    localStorage.removeItem('auth-credential');
    this.props.firebase.auth().signOut()
      .then(() => {
        this.props.history.push('/')
      });

  }

  setMember( isMemeber ) {
    this.setState( {
      isMember: isMemeber
    } );
  }

  render() {
    
    return (
      <View 
        { ...this.props } 
        { ...this.state }
        setMember={ this.setMember }
      />
    );
  }
};

export default firebaseConnect()(Home);
