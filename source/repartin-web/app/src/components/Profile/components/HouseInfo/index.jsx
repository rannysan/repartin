import React, { Component } from "react"
import View from "./View"

class HouseInfo extends Component {

  constructor( props ) {
    super( props )
    this.editHouse  = this.editHouse.bind( this )
  }

  editHouse() {
    alert( "edit house info" )
  }

  copyId = ( id ) => ( event ) => {
    event.preventDefault()
    
    const tempInput = document.createElement( "input" )

    tempInput.style = "position: fixed; top: -100%; left: -100%"
    tempInput.value = id

    document.body.appendChild( tempInput )
    tempInput.select()
    document.execCommand( "copy" )
    document.body.removeChild( tempInput )

    alert( "house id copied to clipboard" )
  }

  render() {

    return(
      <View 
        { ...this.props }
        { ...this.state }
        editHouse={ this.editHouse }
        copyId={ this.copyId }
      />
    )
  }
}

export default HouseInfo