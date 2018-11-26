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
    removed: false,
    file: ''
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

  /*
  * Só é possível cadastrar uma house para o usuario que tenha houseID null
  *
  */
  handleSubmit = async (e) => {

    const form = this.state;
    form.adminID = this.props.firebase.auth().currentUser.uid;

    let house = await service.create('house', form);

    if (house !== undefined) {
      let uploadTask = this.props.firebase.storage().ref().child(this.props.firebase.auth().currentUser.uid).put(this.state.file);

      await uploadTask.on('state_changed', async function (snapshot) {
        let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
      }, function (error) {
        console.log(error)
      }, async function () {
        uploadTask.snapshot.ref.getDownloadURL().then(async function (downloadURL) {
          house.house.image = downloadURL;
          await service.update('house', house.house._id, house.house);
        }).catch(err => console.log(err));
      });
    } else {
      alert('Erro ao cadastrar a república');
    }
  }


  handleUpload = (e) => {
    let file = e.target.files[0];
    this.setState({ file })

  }

  render() {

    return (
      <View handleChange={this.handleChange}
        handleSubmit={this.handleSubmit} handleChangeComplete={this.handleChangeComplete} color={this.state.color} handleUpload={this.handleUpload} />
    );
  }
}


export default compose(
  withRouter,
  firebaseConnect()
)(CreateHouse);

