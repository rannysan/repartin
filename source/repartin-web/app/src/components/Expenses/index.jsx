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
      expenses:[]
    }
  }

  componentWillMount = () =>{
  }

  loadExpenses = async()=> {
    const user = await service.getById('user', this.props.firebase.auth().currentUser.uid);
    let expenses = await service.getByHouseId('expense', user.houseID); 
    this.setState({expenses})
  }

  filterExpenses = () => {
    let expenses = [...this.state.expenses];
    expenses = expenses.filter(t => {
      return t.assignedUserID == this.props.firebase.auth().currentUser.uid
    })
    this.setState({expenses})
  }



  render() {

    return (
      <View expenses={this.state.expenses}/>
    );
  }
}

export default compose(
  withRouter,
  firebaseConnect()
)(Expenses);
