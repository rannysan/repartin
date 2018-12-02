import React, { Component } from "react";
import View from "./View";
import { firebaseConnect } from "react-redux-firebase";
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import service from './../../../../services/service';

class Welcome extends Component {

  state = {
    openInputModal: false,
    dialog: {
      open: false,
      title: '',
      message: ''
    },
    loading: false
  }

  constructor(props) {
    super(props);
  }

  openJoinHouse = (value) => (event) => {

    this.setState({
      openInputModal: value
    })
  }

  handleJoinHouse = async (id) => {

    this.setState({ loading: true });

    let resp = await service.getById('house', id);

    if (resp && resp.house) {
      const house = resp.house;
      const idUser = this.props.firebase.auth().currentUser.uid;
      const { user } = await service.getById('user', idUser);
      let update = await service.update('user', user._id, {
        name: user.name,
        email: user.email,
        uid: user.uid,
        houseID: id,
        removed: false,
        accepted: false
      });
      if (update == undefined)
        this.loadDialog('Ops! Ocorreu um erro ao processar a solicitação', 'Por favor, tente novamente mais tarde!');
      else
        this.props.setPending(true)
    } else {
      this.loadDialog('Ops! Código não encontrado', 'Por favor, confirme o código da república e tente novamente!');

    }
    this.setState({
      openInputModal: false,
      loading: false
    });


  }

  loadDialog = (title, message) => {
    const dialog = this.state.dialog;
    dialog.open = true;
    dialog.message = message;
    dialog.title = title;
    this.setState({ dialog });
  }

  closeDialog = () => {
    const dialog = this.state.dialog;
    dialog.open = false;
    this.setState({ dialog });
  }

  handleCancel = (event) => {
    this.props.setPending(false)
  }

  signOut = (event) => {
    event.preventDefault();
    localStorage.removeItem('auth-credential');
    this.props.firebase.auth().signOut()
      .then(() => {
        this.props.history.push('/')
      });
  }

  render() {

    return (
      <View
        {...this.state}
        {...this.props}
        createHouse={this.createHouse}
        openJoinHouse={this.openJoinHouse}
        handleJoinHouse={this.handleJoinHouse}
        handleCancel={this.handleCancel}
        signOut={this.signOut}
        closeDialog={this.closeDialog}
      />
    );
  }
}

export default compose(
  firebaseConnect(),
  withRouter,
)(Welcome);
