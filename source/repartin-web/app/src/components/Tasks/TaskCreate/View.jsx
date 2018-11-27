import React from "react";
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import { Grid, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Button from '@material-ui/core/Button';


const View = ({ handleChange, handleSubmit, handleChangeUser, classes, state }) => {
    ValidatorForm.addValidationRule('minLength', (value) => {
        if (value.length < 6) {
          return false;
        }
        return true;
      });

    return (
        <Card className={classes.card}>
            <ValidatorForm
                onSubmit={handleSubmit}
                onError={errors => console.log(errors)}
            >
                <CardContent>
                    <Grid container spacing={24}>
                        <Grid item xs={12}>
                            <Typography component="h1" className={classes.title} color="textSecondary" gutterBottom>
                                <h1>Nova Tarefa</h1>
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <TextValidator
                                name='name'
                                label='Nome da tarefa'
                                onChange={handleChange}
                                validators={['minLength', 'required']}
                                errorMessages={['O nome precisa ter mais que 3 caracteres', 'Campo obrigatório']}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextValidator
                                name='description'
                                label='Descrição'
                                onChange={handleChange}
                                validators={['minLength', 'required']}
                                errorMessages={['O nome precisa ter mais que 3 caracteres', 'Campo obrigatório']}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <FormGroup>
                                <TextValidator
                                    className={classes.textField}
                                    label='Data de realização'
                                    name='dueDate'
                                    type='date'
                                    onChange={handleChange}
                                />
                            </FormGroup>
                        </Grid>
                        <Grid item xs={6}>
                            <FormGroup>
                                <TextValidator
                                    className={classes.textField}
                                    label='Vencimento'
                                    name='executionDate'
                                    type='date'
                                    onChange={handleChange}
                                />
                            </FormGroup>
                        </Grid>
                        <Grid item xs={6}>
                            <Select
                                className={classes.textField}
                                name='assignedUserID'
                                multiple
                                value={state.task.assignedUserID}
                                onChange={handleChange}
                                input={<Input id="select-multiple" />}
                            >
                                {
                                    state.users && state.users.map(u => {
                                        return (
                                            <MenuItem key={u.uid} value={u.uid}>
                                                {u.name}
                                            </MenuItem>
                                        )
                                    })}
                            </Select>
                        </Grid>
                    </Grid>
                </CardContent>
                <CardActions>
                    <Button variant="contained" type="submit" color="primary" className={classes.button}>
                        Salvar
                        </Button>
                </CardActions>
            </ValidatorForm>
        </Card>
    )
}
export default withStyles(styles)(View);

        // name: '',
        // description: '',
        // useId: '',
        // assignedUserID: '',
        // dueDate: '',
        // executionDate: '',
        // houseID: '',
// removed: 0