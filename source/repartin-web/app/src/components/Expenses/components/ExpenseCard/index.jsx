import React, { Component } from "react";
import View from "./View";
import service from "../../../../services/service";

class ListCard extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name:''
    }
  }

  componentWillMount() {
    this.loadUsers()
  }

  loadUsers = async () => {
    const userId = this.props.expense.useId
    var name = '';
    if (userId != undefined) {
      var { user } = await service.getById('user', userId)
      name = user.name
    }
    debugger;
    this.setState({ name })
  }

  render() {
    return (
      <View expense={this.props.expense}
            name={this.state.name} />
    );
  }
}

export default ListCard;