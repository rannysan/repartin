import React, { Component } from 'react'
import View from './View'
import axios from 'axios'

const URL = 'http://localhost:3000/task' 

export default class TaskCreate extends Component {

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


    handleSubmit = (e) => {
        debugger;
        const form = this.state;
        axios.post(URL, form)
            .then(function () {
                console.log('Tarefa salva com sucesso');
            })
            .catch(error => console.log(error))
        e.preventDefault();
    }




    render() {
        return (
            <View handleChange={this.handleChange}
                handleSubmit={this.handleSubmit} />
        )
    }
}