import React, { Component } from "react";
import View from "./View";
import service from "../../../../../../services/service";
import { firebaseConnect  } from 'react-redux-firebase';
import { compose } from 'redux'
import { withRouter } from 'react-router-dom';

class CreateHouse extends Component {

  componentWillMount = async () => {
    let user = await service.getById('user', this.props.firebase.auth().currentUser.uid)
    if (user.houseID !== undefined) {
      this.props.history.push('/');
    }
  }

  render() {

    return (
      <View />
    );
  }
}


export default compose(
  withRouter,
  firebaseConnect()
)(CreateHouse);

