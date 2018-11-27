import React, { Component } from "react";
import View from "./View";

class TaskList extends Component {
  render() {
    return (
      <View tasks={this.props.tasks}/>
    );
  }
}

export default TaskList;