import React from "react";
import FormGroup from '@material-ui/core/FormGroup';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input';
import { Grid, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Button from '@material-ui/core/Button';
import BackButton from "../../../Common/BackButton";
import styles from "../../../Common/Forms/styles";


const View = ( { task: { name, description, assignedUserID, dueDate, executionDate }, users, handleChange, handleSubmit, handleChangeUser, classes, state } ) => {
        
    ValidatorForm.addValidationRule('minLength', (value) => {
        if (value.length < 3) {
          return false;
        }
        return true;
      });

    return (
        <ValidatorForm
            onSubmit={handleSubmit}
            onError={errors => console.error(errors)}
        >
            <Grid container spacing={24}>
                <Grid className={ classes.titleBlock } item xs={12}>
                    <BackButton to="/tarefas"/>
                    <Typography className={ classes.title } component="h1" variant="h5" className={classes.title} color="textSecondary" gutterBottom>
                        Nova Tarefa
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <TextValidator
                        name='name'
                        label='Nome da tarefa'
                        value={ name }
                        onChange={handleChange}
                        validators={['required', 'minLength']}
                        errorMessages={['Campo obrigatório', 'O nome precisa ter mais que 3 caracteres']}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextValidator
                        name='description'
                        label='Descrição'
                        multiline
                        rows="2"
                        rowsMax="5"
                        value={ description }
                        onChange={handleChange}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormGroup>
                        <TextValidator
                            className={classes.textField}
                            label='Data de realização'
                            name='dueDate'
                            type='date'
                            value={ dueDate }
                            onChange={handleChange}
                            fullWidth
                        />
                    </FormGroup>
                </Grid>
                <Grid item xs={12}>
                    <FormGroup>
                        <TextValidator
                            className={classes.textField}
                            label='Vencimento'
                            name='executionDate'
                            type='date'
                            value={ executionDate }
                            onChange={handleChange}
                            fullWidth
                        />
                    </FormGroup>
                </Grid>
                <Grid item xs={12}>
                    <Select
                        className={classes.textField}
                        name='assignedUserID'
                        multiple
                        value={ assignedUserID }
                        value={assignedUserID}
                        onChange={handleChange}
                        input={<Input id="select-multiple" />}
                        fullWidth
                    >
                        {
                            users && users.map(u => {
                                return (
                                    <MenuItem key={u.uid} value={u.uid}>
                                        {u.name}
                                    </MenuItem>
                                )
                            })}
                    </Select>
                </Grid>
            </Grid>
            <div className={ classes.submit }>
                <Button variant="contained" type="submit" color="primary" className={classes.button}>
                    Salvar
                </Button>
            </div>
        </ValidatorForm>
    )
}
export default withStyles(styles)(View);
