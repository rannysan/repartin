import React, { Component } from "react";
import View from "./View";
import service from "../../services/service";

export default class extends Component {

   componentDidMount = () => {
    this.props.firebaseAuth().onAuthStateChanged(async auth => {
      if (auth) {
        const user = await service.getById('user',auth.uid);
        if (user) {
          if (!user.removed) {
            await service.update('user', {
              name: auth.displayName,
              email: auth.email,
              uid: auth.uid,
              houseID: null,
              removed: false
            });
            //redirect
          }

        } else {
          await service.create('user', { 
            name: auth.displayName,
            email: auth.email,
            uid: auth.uid,
            houseID: null,
            removed: false
          });
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