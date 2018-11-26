import React, { Component } from 'react'
import View from './View'
import service from "../../../services/service";
import { firebaseConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom';

class TaskCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: {
                name: '',
                description: '',
                useId: '',
                assignedUserID: '',
                dueDate: '',
                executionDate: '',
                houseID: '',
                removed: 0
            }, 
            users:[]
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        let task = this.state.task;
        task[name] = value;
        this.setState({ task })
        e.target.value = value;
        console.log(this.state)
    }

    componentWillMount(){
        debugger;
        this.loadUsers();
    }

    handleChangeUser = (e) => {

    }
    


    handleSubmit = async (e) => {
        const useId = this.props.firebase.auth().currentUser.uid;
        this.setState({...this.state.task, useId })
        const form = this.state.task;
        if (this.props.idTask == undefined)
            await service.create('task', form);
        else
            await service.update('task', this.props.idTask, form);
        e.preventDefault();
    }

    //verifica a existência de uma task antes de renderizar
    getTask = async () => {
        if (this.props.idTask != undefined) {
            this.state.task = await service.getById('task', props.idTask)
        }
    }

    //buscar por todos usuários da casa
    loadUsers = async (e) => {
        const useId = this.props.firebase.auth().currentUser.uid;
        const user = await service.getById('user', useId);

        let users = await service.getByHouse('user', user.houseID);
        this.setState({users});
    }

    render() {
        return (
            <View handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                users={this.state.users} />
        )
    }
};

export default compose(
    withRouter,
    firebaseConnect()
)(TaskCreate);
