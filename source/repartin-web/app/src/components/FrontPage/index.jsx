import React, { Component } from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { firebaseConnect } from "react-redux-firebase";
import View from "./View";

class FrontPage extends Component {

  render() {
    
    return (
      <View { ...this.props } />
    );
  }
}

FrontPage.propTypes = {
  firebase: PropTypes.shape( {
    login: PropTypes.func.isRequired
  } ),
  auth: PropTypes.object
};

export default compose(
  firebaseConnect(),
  connect( ( { firebase: { auth } } ) => ( { auth } ) )
)( FrontPage );