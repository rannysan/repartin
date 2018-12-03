import React, { Component } from 'react'
import View from './View'
import service from "../../../../services/service";
import { firebaseConnect  } from 'react-redux-firebase'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom';

class ExpenseCreate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            value: '',
            useId: '',
            payments: [],
            dueDate: new Date().toISOString().slice( 0, 10 ),
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
    }


    handleSubmit = async (e) => {
        const useId = this.props.firebase.auth().currentUser.uid;
        const { user } = await service.getById('user', useId);
        const form = this.state;
        form.useId = useId
        form.houseID = user.houseID

        if(this.props.idExpense == undefined)
            await service.create('expense', form).then(
                alert('Despesa salva com sucesso')
            )
        else
            await service.update('expense', this.props.idExpense , form);

        e.preventDefault();
    }

    getExpense = async () => {
        if(this.props.idExpense != undefined){
            this.state = await service.getById('expense', props.idExpose)
        }
    }

    render() {
        return (
            <View 
                { ...this.state }
                { ...this.props }
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
            />
        )
    }
};

export default compose(
    withRouter,
    firebaseConnect()
  )(ExpenseCreate);
  