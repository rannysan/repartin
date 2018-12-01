import React, { Component } from "react"
import View from "./View"

export default class extends Component {

  state = {
    open: false,
    value: "" 
  }

  constructor( props ) {
    super( props )
    this.handleClose  = this.handleClose.bind( this )
    this.handleChange = this.handleChange.bind( this )
    this.handleSubmit = this.handleSubmit.bind( this )
    this.state.open   = props.open
  }

  handleClose( event ) {
    this.props.openJoinHouse( false )()
  }

  handleChange( event ) {

    this.setState( {
      value: event.currentTarget.value
    } )
  }

  handleSubmit( event ) {
    event.preventDefault()
    this.props.handleModalSubmit( this.state.value )
  }

  render() {

    return (
      <View 
        { ...this.state }
        { ...this.props }
        handleChange={ this.handleChange }
        handleClose={ this.handleClose }
        handleSubmit={ this.handleSubmit }
      />
    )
  }
}