import React, { Component } from "react";
import View from "./View";
import { getUserById } from "services-commons";

export default class extends Component {
  state = {
    isSignedIn: false
  };

  async componentWillMount() {
    const teste = await getUserById( "teste" );
    console.log( teste );
  }

  componentDidMount = () => {

    this.props.firebaseAuth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
    }) 
  }

  render() {

    return (
      <View { ...this.props } { ...this.state } />
    );
  }
}