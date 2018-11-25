import React, { Component } from "react";
import { firebaseConnect } from "react-redux-firebase";
import { withRouter } from "react-router-dom";
import View from "./View";
import { compose } from "redux";

class Profile extends Component {

  // testing
  state = {
    user: {
      name: "Jesus Cristo",
      email: "jesus@crist.com",
      isAdmin: true, //boa sorte
      avatar: "http://2.bp.blogspot.com/-dyzMaWaud6k/U0vtJ_abIgI/AAAAAAAAA-o/362iWi6-mKQ/s1600/137412279020.jpg"
    },
    house: {
      name: "Jerusarep",
      address: "TKhelet Mordehai 7-3 Jerusalem, Israel",
      image: "https://static1.i4u.com/sites/default/files/imagecache/main_image_large/images/2015/09/weed-smoking.jpg"
    }
  }

  constructor( props ) {
    super( props );
    this.signOut = this.signOut.bind( this );
  }

  signOut() {
    this.props.firebase.auth().signOut();
    this.props.history.push( "/" );
  }

  exitHouse() {
    alert( "exit user from house" );
  }

  render() {

    return (
      <View 
        { ...this.state }
        { ...this.props }
        signOut={ this.signOut }
        exitHouse={ this.exitHouse }
      />
    );
  }
}

export default compose(
  firebaseConnect(),
  withRouter
)( Profile );