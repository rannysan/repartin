import React, { Component } from "react";
import service from "../../../../services/service";
import View from "./View";

class ListCard extends Component {


  // getUsersNames = async () => {
  //     return this.props.task.assignedUserId != undefined && this.props.task.assignedUserId.map(async (user) => { // <-- note the `async` on this line
  //       return {
  //           id: "my_id",
  //           user: await service.getById('user', user)
  //       }
  //   });
  // }
  

  render() {
    // var a = this.getUsersNames();
    debugger
    return (
      <View task={this.props.task} />
    );
  }
}

export default ListCard;