import React from "react";
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';

import { Grid, Typography, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

const View = ({ handleChange, handleSubmit, classes }) => {
    return (
        <div className={classes.root}>
            <Grid container>
                <form>
                    <Grid container item xs={12} sm={12}>
                        <FormGroup>
                            <TextField
                                name='name'
                                label='Nome da despesa'
                                onChange={handleChange}
                            />
                        </FormGroup>
                    </Grid>
                    <FormGroup>
                        <TextField
                            label='Valor'
                            name='value'
                            type='number'
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <TextField
                            name='dueDate'
                            type='date'
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <button onClick={handleSubmit}>Cadastrar</button>
                </form>
            </Grid>
        </div>
    )
}

export default withStyles(styles)(View);


