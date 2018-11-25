import React, { Component } from "react";
import View from "./View";
import service from "../../services/userService";

export default class extends Component {

   componentDidMount = () => {
    this.props.firebaseAuth().onAuthStateChanged(async auth => {
      if (auth) {
        const user = await service.getUserById(auth.uid);
        if (user) {
          await service.updateUser(auth);
          //redirect
        } else {
          await service.createUser(auth);
          //redirect
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