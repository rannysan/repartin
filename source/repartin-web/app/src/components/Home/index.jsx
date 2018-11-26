import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { firebaseConnect } from 'react-redux-firebase';
import { compose } from "redux";
import View from "./View";

class Home extends Component {

  state = {
    isMember: false, // é de uma rep?
    collapse: false
  }

  constructor( props ) {
    super(props);
    this.setMember   = this.setMember.bind( this );
    this.setCollapse = this.setCollapse.bind( this );
  }

  setMember( isMemeber ) {
    this.setState( {
      isMember: isMemeber
    } );
  }

  setCollapse( collapse ) {
    this.setState( {
      collapse: collapse
    } );
  }

  render() {
    
    return (
      <View
        { ...this.props } 
        { ...this.state }
        setMember={ this.setMember }
        setCollapse={ this.setCollapse }
      />
    );
  }
};

export default compose(
  withRouter,
  firebaseConnect()
)(Home);
