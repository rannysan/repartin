import React, { Component } from 'react'
import View from './View'
import service from "../../services/service";

export default class ExpenseCreate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            value: '',
            useId: 0,
            payments: [],
            dueDate: '',
            repeatingExpenseID: '',
            houseID: 0,
            removed: 0
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ ...this.state, [name]: value })
        e.target.value = value;
    }


     handleSubmit = async(e) => {
        
        const form = this.state;
        await service.create('expense', form);
        e.preventDefault();
    }




    render() {
        return (
            <View handleChange={this.handleChange}
                handleSubmit={this.handleSubmit} />
        )
    }
}