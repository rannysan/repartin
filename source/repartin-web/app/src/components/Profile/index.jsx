import React, { Component } from "react";
import { firebaseConnect } from "react-redux-firebase";
import { withRouter } from "react-router-dom";
import View from "./View";
import { compose } from "redux";
import service from './../../services/service';

class Profile extends Component {

  state = {
    loading: true,
    user: {
      name: "",
      email: "",
      isAdmin: false,
      photoURL: "http://wildworkoutsandwellness.com/wp-content/uploads/2013/07/Placeholder-Portrait.jpg"
    },
    house: {
      id: "",
      name: "",
      address: "",
      image: ""
    }
  }

  constructor(props) {
    super(props);
  }

  componentWillMount = async () => {
    const userFirebase = this.props.firebase.auth().currentUser;
    const resp = await service.getById('house/admin', userFirebase.uid);
    const { user } = await service.getById('user', userFirebase.uid);
    const { house } = await service.getById('house', user.houseID);

    let isAdmin = false;
    if (resp && resp.house) {
      isAdmin = true;
    }

    this.setState({
      loading: false,
      user: {
        name: userFirebase.displayName,
        email: userFirebase.email,
        photoURL: userFirebase.photoURL + '?height=500',
        isAdmin: isAdmin
      },
      house: {
        id: house._id,
        name: house.name,
        address: `${house.address} - ${house.state}, ${house.city}`,
        image: house.image
      }
    });
  }

  signOut = () => {
    localStorage.removeItem("auth-credential");
    this.props.firebase.auth().signOut()
      .then(() => {
        this.props.history.push('/')
      });
  }

  exitHouse = async () => {

    const userFirebase = this.props.firebase.auth().currentUser;
    const { user } = await service.getById('user', userFirebase.uid);
    await service.update('user', user._id, {
      name: user.displayName,
      email: user.email,
      uid: user.uid,
      houseID: null,
      removed: false,
      accepted: false
    });
    this.props.history.push('/');
  }

  render() {

    return (
      <View
        {...this.state}
        {...this.props}
        signOut={this.signOut}
        exitHouse={this.exitHouse}
      />
    );
  }
}

export default compose(
  firebaseConnect(),
  withRouter
)(Profile);