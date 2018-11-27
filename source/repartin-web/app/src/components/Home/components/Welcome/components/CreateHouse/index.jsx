import React, { Component } from "react";
import View from "./View";
import service from "../../../../../../services/service";
import { firebaseConnect } from 'react-redux-firebase';
import { compose } from 'redux'
import { withRouter } from 'react-router-dom';

class CreateHouse extends Component {

  state = {
    house: {
      name: '',
      address: '',
      creation: new Date(),
      color: '#fff',
      removed: false,
      cep: ''
    },
    file: '',
    loading: false
  };

  componentWillMount = async () => {
    let user = await service.getById('user', this.props.firebase.auth().currentUser.uid)
    if (user.houseID !== undefined) {
      this.props.history.push('/');
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    let house = this.state.house;
    house[name] = value;
    this.setState({ house })
  }

  handleChangeComplete = (color) => {
    let house = this.state.house;
    house.color = color.hex;
    this.setState({ house });
  };

  /*
  * Só é possível cadastrar uma house para o usuario que tenha houseID null
  *
  */
  handleSubmit = async (e) => {

    this.setState({ loading: true })

    const form = this.state.house;
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
          this.setState({ loading: false })
          //this.props.history.push( "/" );

        }).catch(err => {
          this.setState({ loading: false })
          console.log(err)
        });
      });
    } else {
      alert('Erro ao cadastrar a república');
      this.setState({ loading: false })
    }
  }


  handleUpload = (e) => {
    let file = e.target.files[0];
    this.setState({ file })

  }

  render() {

    return (
      <View handleChange={this.handleChange}
        handleSubmit={this.handleSubmit} handleChangeComplete={this.handleChangeComplete} color={this.state.color} handleUpload={this.handleUpload} loading={this.state.loading}  house={this.state.house}/>
    );
  }
}


export default compose(
  withRouter,
  firebaseConnect()
)(CreateHouse);

