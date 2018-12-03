import React, { Component } from "react";
import View from "./View";

class TaskList extends Component {

  render() {
    return (
      <View expenses={this.props.expenses}/>
    );
  }
}

export default TaskList;