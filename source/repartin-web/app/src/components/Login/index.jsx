import React, { Component } from "react";
import View from "./View";
import service from "../../services/service";
import { firebaseConnect  } from 'react-redux-firebase'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';


class Login extends Component {

   componentDidMount = () => {
    this.props.firebase.auth().onAuthStateChanged(async auth => {

      if (auth) {
        const response = await service.getById('user',auth.uid);

        if (response !== undefined) {
          const user = response.user;
          if (!user.removed) {
            await service.update('user', user._id, {
              name: auth.displayName,
              email: auth.email,
              uid: auth.uid,
              houseID: null,
              removed: false
            });
          }
        } else {
          await service.create('user', { 
            name: auth.displayName,
            email: auth.email,
            uid: auth.uid,
            houseID: null,
            removed: false
          });
        }
      }

    });
  };
  
  render() {
    
    return (
      <View { ...this.props }/>
    );
  }
}



export default compose(
  firebaseConnect(),
  withRouter,
)(Login);