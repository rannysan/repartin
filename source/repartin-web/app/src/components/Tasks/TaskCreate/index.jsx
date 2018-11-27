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
                assignedUserID: [],
                dueDate: '',
                executionDate: '',
                houseID: '',
                removed: 0
            },
            users: []
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        let task = this.state.task;
        task[name] = value;
        this.setState({ task })
        e.target.value = value;
    }

    componentWillMount = async () => {
        await this.loadUsers();
    }





    handleSubmit = async (e) => {
        const useId = this.props.firebase.auth().currentUser.uid
        const { user } = await service.getById('user', useId)

        var form = this.state.task
        form.useId = useId
        form.houseID = user.houseID
        if (this.props.idTask == undefined)
            await service.create('task', form).then(
                alert('Tarefa cadastrada com sucesso')
            )
        else
            await service.update('task', this.props.idTask, form)
        this.props.history.push('/tarefas')

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
        const { user } = await service.getById('user', useId);

        let { users } = await service.getById('house/members', user.houseID);
        this.setState({ users });
    }

    render() {
        return (
            <View handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                state={this.state} />
        )
    }
};

export default compose(
    withRouter,
    firebaseConnect()
)(TaskCreate);
