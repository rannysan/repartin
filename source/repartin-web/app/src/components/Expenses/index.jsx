import React, { Component } from "react";
import View from "./View";
import service from "../../services/service";
import { firebaseConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom';

class Expenses extends Component {

  constructor(props) {
    super(props)
    this.state = {
      expenses:[],
      card: {
        blocks: [ {
          label: "GASTO",
          value: "500,00"
        }, {
          label: "PAGO",
          value: "200,00"
        } ],
        quickTip: "Quick Tip"
      }
    }
    this.handleSearch   = this.handleSearch.bind( this );
    this.handleFilter   = this.handleFilter.bind( this );
    this.handleQuickTip = this.handleQuickTip.bind( this );
  }

  handleSearch( value ) {
    // console.log( value );
  }

  handleFilter( value ) {
    // console.log( value );
  }

  handleQuickTip() {
    const card = { ...this.state.card };
    card.quickTip = "New Quick Tip";
    this.setState( { card } );
  }

  // componentWillMount = () =>{
  //   this.loadExpenses();
  // }

  // loadExpenses = async()=> {
  //   const user = await service.getById('user', this.props.firebase.auth().currentUser.uid);
  //   let expenses = await service.getByHouseId('expense', user.houseID); 
  //   this.setState({expenses})
  // }

  // filterExpenses = () => {
  //   let expenses = [...this.state.expenses];
  //   expenses = expenses.filter(t => {
  //     return t.assignedUserID == this.props.firebase.auth().currentUser.uid
  //   })
  //   this.setState({expenses})
  // }

  render() {

    return (
      <View
        { ...this.state }
        expenses={ this.state.expenses }
        handleSearch={ this.handleSearch }
        handleFilter={ this.handleFilter }
        handleQuickTip={ this.handleQuickTip }
      />
    );
  }
}

export default compose(
  withRouter,
  firebaseConnect()
)(Expenses);
