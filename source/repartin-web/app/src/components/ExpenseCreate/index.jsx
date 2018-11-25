import React, { Component } from 'react'
import View from './View'
import service from "../../services/service";
import { firebaseConnect  } from 'react-redux-firebase'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom';

class ExpenseCreate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            value: 0,
            useId: '',
            payments: [],
            dueDate: '',
            repeatingExpenseID: '',
            houseID: 0,
            removed: 0
        }
    }

    componentWillMount(){
        this.getExpense();
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
        if(this.props.idExpense == undefined)
            await service.create('expense', form);
        else
            await service.update('expense', this.props.idExpense , form);

        e.preventDefault();
    }

    saveRepeatingExpense = async () => {
        const repExpense = {
            name: this.props.name,
            dueDate: this.props.dueDate,
            baseValue: this.props.value,
            houseID: this.props.houseID,
            removed: this.props.removed
        }
        await service.create('rExpense', respExpense)
            .then((response) => {
                var today = new Date();
                while(today <= repExpense.dueData){
                    
                }
            })
    }
    
    generateRepeatingExpense = async () => {

    }

    render() {
        return (
            <View handleChange={this.handleChange}
                handleSubmit={this.handleSubmit} 
                data={this.state}/>
        )
    }
};

export default compose(
    withRouter,
    firebaseConnect()
  )(ExpenseCreate);
  