import React, { Component } from 'react'
import View from './View'
import service from "../../services/service";
import { firebaseConnect  } from 'react-redux-firebase'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom';

class TaskCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            useId: 0,
            assignedUserID: 0,
            dueDate: '',
            executionDate: '',
            houseID: 0,
            removed: 0
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ ...this.state, [name]: value })
        e.target.value = value;
    }


    handleSubmit = async (e) => {
        const useId =  this.props.firebase.auth().currentUser.uid;
        this.setState({useId})
        
        const form = this.state;
        e.preventDefault();
    }

    //verifica a existência de uma task antes de renderizar
    getTask = async () => {
        if(this.props.idTask != undefined){
            this.state = await service.getById('task', props.idTask)
        }
    }

    //buscar por todos usuários da casa
    loadUsers = async (e) => {
        const useId =  this.props.firebase.auth().currentUser.uid;
        let houseUsers = await service.getById('user/house', useId);
        return houseUsers;
    }

    render() {
        return (
            <View handleChange={this.handleChange}
                handleSubmit={this.handleSubmits} />
        )
    }
};

export default compose(
    withRouter,
    firebaseConnect()
  )(TaskCreate);
  