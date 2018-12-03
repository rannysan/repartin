import React, { Component } from "react";
import View from "./View";
import service from "../../services/service";
import { firebaseConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom';

class Tasks extends Component {

  constructor(props) {
    super(props)
    this.state = {
      tasks: [],
      card: {
        blocks: [{
          label: "SUAS TAREFAS",
          value: "20"
        }, {
          label: "ATRASADAS",
          value: "2"
        }],
        quickTip: "Quick Tip"
      }
    }
    this.handleQuickTip = this.handleQuickTip.bind(this);
  }

  componentWillMount = () => {
    this.loadTasks()
    this.myTasks()
  }

  handleSearch(value) {
    // console.log( value );
  }

  handleFilter(value) {
    // console.log( value );
  }

  handleQuickTip() {
    const card = { ...this.state.card };
    card.quickTip = "New Quick Tip";
    this.setState({ card });
  }

  loadTasks = async () => {
    const { user } = await service.getById('user', this.props.firebase.auth().currentUser.uid);
    let tasks = await service.getByHouse('task', user.houseID);
    this.setState({ tasks })
  }

  myTasks = async () => {
    var currentUser = this.props.firebase.auth().currentUser.uid
    const { user } = await service.getById('user', currentUser)
    let tasks = await service.getByHouse('task', user.houseID)
    var myDelayedTasks = []
    var myTasks = []
    if (tasks != undefined) {

      var myTasks = tasks.task.reduce(function (filtered, task) {
        for (let i = 0; i < task.assignedUserID.length; i++) {
          if (task.assignedUserID[i] == currentUser) {
            filtered.push(task)
          }
        }
        return filtered
      }, [])

      myDelayedTasks = tasks.task.reduce(function (filtered, task) {
        for (let i = 0; i < task.assignedUserID.length; i++) {

          if (task.assignedUserID[i] == currentUser && task.executionDate > new Date().toLocaleDateString()) {
            filtered.push(task)
          }
        }
        return filtered
      }, [])

      var card = this.state.card
      card.blocks[0].value = myTasks.length
      card.blocks[1].value = myDelayedTasks.length
      this.setState({ card })
    }
  }

  filterTasks = () => {
    let tasks = [...this.state.tasks];
    tasks = tasks.filter(t => {
      return t.assignedUserID == this.props.firebase.auth().currentUser.uid
    })
    this.setState({ tasks })
  }

  render() {
    return (
      <View
        {...this.state}
        handleSearch={this.handleSearch}
        handleFilter={this.handleFilter}
        handleQuickTip={this.handleQuickTip}
        tasks={this.state.tasks}
      />
    );
  }
}

export default compose(
  withRouter,
  firebaseConnect()
)(Tasks);
