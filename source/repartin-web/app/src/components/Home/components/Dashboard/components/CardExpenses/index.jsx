import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import View from "./View";
import { compose } from "redux";
import { firebaseConnect } from 'react-redux-firebase';
import service from './../../../../../../services/service';

class CardExpenses extends Component {

  state = {
    expense: 0
  }

  constructor(props) {
    super(props);
    this.openExpenses = this.openExpenses.bind(this);
  }

  openExpenses(event) {
    this.props.history.push("/financas");
  }
  componentWillMount = async () => {
    var currentUser = this.props.firebase.auth().currentUser.uid
    const { user } = await service.getById('user', currentUser)
    let expenses = await service.getByHouse('expense', user.houseID)
    var spentValue = 0
    if (expenses != undefined) {
      for (let i = 0; i < expenses.expense.length; i++) {
        spentValue += parseInt(expenses.expense[i].value.$numberDecimal)
      }

      var expense = this.state.expense
      expense = spentValue
      console.log(expense)
      this.setState({ expense })
    }
  }
  render() {

    return (
      <View
        openExpenses={this.openExpenses}
        expense={this.state.expense} />
    );
  }
}

export default compose(
  withRouter,
  firebaseConnect()
)(CardExpenses);