import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import View from "./View";
import service from './../../../../../../services/service';
import { firebaseConnect } from 'react-redux-firebase'

class FullCard extends Component {

  state = {
    dialog: {
      open: false,
      members: [],
      isAdmin: false
    },
    house: {}
  };

  constructor(props) {
    super(props);
    this.openProfile = this.openProfile.bind(this);
  }

  openProfile = (e) => {
    if (e._dispatchInstances.length == 1 || e._dispatchInstances.length == undefined) {
      this.props.history.push("/perfil");
    }
  }

  houseMembers = async (event) => {
    const dialog = this.state.dialog;
    dialog.open = true;
    const { user } = await service.getById('user', this.props.firebase.auth().currentUser.uid);
    const { users } = await service.getById('house/members', user.houseID);
    const { house } = await service.getById('house', user.houseID);
    dialog.members = users;
    dialog.isAdmin = (house.adminID == user.uid) ? true : false;
    this.setState({ dialog, house });
  }

  closeDialog = () => {
    const dialog = this.state.dialog;
    dialog.open = false;
    this.setState({ dialog });
  }

  deleteMember = async (member) => {
    await service.update('user', member._id, {
      name: member.displayName,
      email: member.email,
      uid: member.uid,
      houseID: null,
      removed: false,
      accepted: member.accepted
    });
    let dialog = this.state.dialog;
    if (dialog.members.length > 1) {
      dialog.members = dialog.members.slice(dialog.members.indexOf(member), 1);
    } else {
      dialog.members = [];
    }

    this.setState({ dialog });
  }

  acceptMember = async (member) => {
    await service.update('user', member._id, {
      name: member.displayName,
      email: member.email,
      uid: member.uid,
      houseID: null,
      removed: false,
      accepted: true
    });
    let dialog = this.state.dialog;
    for (var i = 0; i < dialog.members.length; i++) {
      if (dialog.members[i].uid == member.uid) {
        dialog.members[i].accepted = true;
      }
    }
    this.setState({ dialog });

  }


  render() {

    return (
      <View
        openProfile={this.openProfile}
        houseMembers={this.houseMembers}
        dialog={this.state.dialog}
        closeDialog={this.closeDialog}
        acceptMember={this.acceptMember}
        deleteMember={this.deleteMember} />
    );
  }
}

export default compose(
  withRouter,
  firebaseConnect()
)(FullCard);