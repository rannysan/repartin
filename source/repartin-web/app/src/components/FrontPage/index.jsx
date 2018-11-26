import React, { Component } from "react";
import { Typography } from "@material-ui/core";
import { firebaseConnect } from "react-redux-firebase";
import service from "../../services/service";
import Loading from "../Loading";
import View from "./View";

class FrontPage extends Component {

  state = {
    loading: true
  }

  componentWillMount = () => {
    this.setState({loading: true});
    
    this.props.firebase.auth().onAuthStateChanged(async auth => {
      if (auth) {
        
        const response = await service.getById('user',auth.uid);
        this.setState({loading: false})

        if (response !== undefined) {
          const user = response.user;
          
          if (!user.removed) {
            await service.update('user', user._id, {
              name: auth.displayName,
              email: auth.email,
              uid: auth.uid,
              houseID: user.houseID,,
              removed: false
            });
          }
        } else {
          await service.create( 'user', { 
            name: auth.displayName,
            email: auth.email,
            uid: auth.uid,
            houseID: null,
            removed: false
          } );
        }
      } else {
        
        const credential = service.getCredential();
        
        if (credential) {
          let cred;
          if (credential.providerId === 'facebook.com') {
            cred = this.props.firebase.auth.FacebookAuthProvider.credential(credential);
          }
          if (credential.providerId === 'google.com') {
            cred =  this.props.firebase.auth.GoogleAuthProvider.credential(credential);
          }
        if (cred) {
            this.props.firebase.auth().signInAndRetrieveDataWithCredential(cred)
            .then(() => {
              this.setState({loading: false})
              console.log('Logado via storage');
            }).catch(function(error) {
              this.setState({loading: false})
              console.log(`Erro ao logar via storage ${JSON.stringify(error)}`)
            });
          }
        } else {
          this.setState({loading: false})
        }
      }
    });
  };

  render() {
    const credential = service.getCredential();

    return this.state.loading 
      ? <Loading/>
      : <View { ...this.props } { ...this.state } credential={ credential }/>;
  }
}

export default firebaseConnect()( FrontPage );