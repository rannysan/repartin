import React from "react";
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import { Grid, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Button from '@material-ui/core/Button';

const View = ({ handleChange, handleSubmit, classes }) => {
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
                onError={errors => console.error(errors)}
            >
                <CardContent>
                    <Grid container spacing={24}>
                        <Grid item xs={12}>
                            <Typography component="h1" className={classes.title} color="textSecondary" gutterBottom>
                                <h1>Nova Despesa</h1>
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <TextValidator
                                name='name'
                                label='Nome da despesa'
                                onChange={handleChange}
                                className={classes.textField}
                                validators={['minLength', 'required']}
                                errorMessages={['O nome precisa ter mais que 3 caracteres', 'Campo obrigatório']}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                label='Valor'
                                name='value'
                                type='number'
                                onChange={handleChange}
                                className={classes.textField}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                name='dueDate'
                                type='date'
                                onChange={handleChange}
                                className={classes.textField}
                            />
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


