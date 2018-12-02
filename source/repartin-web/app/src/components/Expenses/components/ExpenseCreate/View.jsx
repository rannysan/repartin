import React from "react";
import TextField from '@material-ui/core/TextField';
import { Grid, Typography, InputAdornment } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Button from '@material-ui/core/Button';
import BackButton from "../../../Common/BackButton"
import styles from "../../../Common/Forms/styles";

const View = ({ name, value, dueDate, handleChange, handleSubmit, classes }) => {
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
                    <BackButton to="/financas"/>
                    <Typography className={ classes.title } component="h1" variant="h5" className={classes.title} color="textSecondary" gutterBottom>
                        Nova Despesa
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <TextValidator
                        name='name'
                        label='Nome da despesa'
                        onChange={handleChange}
                        className={classes.textField}
                        value={ name }
                        validators={['required', 'minLength']}
                        errorMessages={['Campo obrigatório', 'O nome precisa ter mais que 3 caracteres']}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextValidator
                        label='Valor'
                        name='value'
                        type='number'
                        validators={ [ "required" ] }
                        errorMessages={ [ "Campo obrigatório" ] }
                        value={ value }
                        onChange={handleChange}
                        className={classes.textField}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">R$</InputAdornment>,
                        }}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        name='dueDate'
                        type='date'
                        label="Vencimento"
                        value={ dueDate }
                        onChange={handleChange}
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        fullWidth
                    />
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


