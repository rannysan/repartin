import React, { Component } from "react";
import View from "./View";
import { throws } from "assert";

class Toolbar extends Component {

  state = {
    search: {
      value: ""
    },
    filter: {
      value: 2,
      open: false
    }
  }

  constructor( props ) {
    super( props );
    this.handleSearch = this.handleSearch.bind( this );
    this.handleFilter = this.handleFilter.bind( this );
  }

  handleSearch( event ) {
    const value = event.target.value;

    this.props.handleSearch( value );
    this.setState( {
      search: {
        value: value
      }
    } );
  }

  handleFilter( event ) {
    const value = event.target.value;

    this.props.handleFilter( value )
    this.setState( {
      filter: {
        value: value,
        open: false
      }
    } );
  }

  toggleSelect = ( open ) => ( event ) => {
    const filter = { ...this.state.filter };
    filter.open  = open;
    this.setState( { filter } );
  }

  render() {

    return (
      <View 
        { ...this.props }
        { ...this.state }
        handleSearch={ this.handleSearch }
        handleFilter={ this.handleFilter }
        toggleSelect={ this.toggleSelect }
      />
    );
  }
}

export default Toolbar;