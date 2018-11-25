import React, { Component } from 'react'
import View from './View'
import service from "../../services/service";


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


    handleSubmit = async (e) => {
        var useId =  this.props.firebase.auth().currentUser.uid;
        this.setState({useId})
        
        const form = this.state;
        await service.create('task', form);
        e.preventDefault();
    }




    render() {
        return (
            <View handleChange={this.handleChange}
                handleSubmit={this.handleSubmit} />
        )
    }
}