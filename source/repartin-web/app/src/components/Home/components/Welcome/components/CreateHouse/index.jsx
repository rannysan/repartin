import React, { Component } from "react";
import View from "./View";
import service from "../../../../../../services/service";
import { firebaseConnect } from 'react-redux-firebase';
import { compose } from 'redux'
import { withRouter } from 'react-router-dom';

class CreateHouse extends Component {

  state = {
    name: 'Cat in the Hat',
    address: '',
    creation: new Date(),
    color: '#fff',
    adminId: '',
    removed: false
  };

  componentWillMount = async () => {
    let user = await service.getById('user', this.props.firebase.auth().currentUser.uid)
    if (user.houseID !== undefined) {
      this.props.history.push('/');
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ ...this.state, [name]: value })
    e.target.value = value;
  }

  handleChangeComplete = (color) => {
    this.setState({ color: color.hex });
  };

  handleSubmit = async (e) => {

    let adminId = this.props.firebase.auth().currentUser.uid;
    this.setState({ adminId });
    const form = this.state;

    e.preventDefault();
  }

  handleUpload = async (e) => {
    console.log(e);
  }

  render() {

    return (
      <View handleChange={this.handleChange}
        handleSubmit={this.handleSubmit} handleChangeComplete={this.handleChangeComplete} color={this.state.color} />
    );
  }
}


export default compose(
  withRouter,
  firebaseConnect()
)(CreateHouse);

