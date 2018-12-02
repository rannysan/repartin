import React, { Component } from "react";
import { firebaseConnect } from "react-redux-firebase";
import { withRouter } from "react-router-dom";
import View from "./View";
import { compose } from "redux";
import service from './../../services/service';

class Profile extends Component {

  // testing
  state = {
    user: {
      name: "Jesus Cristo",
      email: "jesus@crist.com",
      isAdmin: true, //boa sorte
      photoURL: "http://2.bp.blogspot.com/-dyzMaWaud6k/U0vtJ_abIgI/AAAAAAAAA-o/362iWi6-mKQ/s1600/137412279020.jpg"
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

  componentWillMount = async () => {
    const userFirebase = this.props.firebase.auth().currentUser;
    const { house } = await service.getById('house/admin', userFirebase.uid);
    let isAdmin = false;
    if (house) {
      isAdmin = true;
    }
    console.log(house);
    this.setState( {
      user: {
        name: userFirebase.displayName,
        email: userFirebase.email,
        photoURL: userFirebase.photoURL+'?height=500',
        isAdmin: isAdmin // boa sorte
      },
      house: {
        name: house.name,
        address: `${house.address} - ${house.state}, ${house.city}`,
        image: house.image
      }
    } );
  }

  signOut() {
    localStorage.removeItem( "auth-credential" );
    this.props.firebase.auth().signOut()
      .then(() => {
        this.props.history.push('/')
    });
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