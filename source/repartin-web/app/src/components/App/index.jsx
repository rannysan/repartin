import React, { Component } from "react";
import View from "./View";

export default class extends Component {
  state = {
    isSignedIn: false
  };

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