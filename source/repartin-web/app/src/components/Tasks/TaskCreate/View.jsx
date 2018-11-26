import React from "react";
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input';

import { Grid, Typography, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

const View = ({ handleChange, handleSubmit, classes, users }) => {
    return (
        <div className={classes.root}>
            <Grid container>
                <form>
                    <Grid container item xs={12} sm={12}>
                        <TextField
                            name='name'
                            label='Nome da tarefa'
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid container item xs={12} sm={12}>
                        <TextField
                            name='description'
                            label='Descrição'
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid container item xs={12} sm={12}>
                        <FormGroup>
                            <TextField
                                label='Data de realização'
                                name='dueDate'
                                type='date'
                                onChange={handleChange}
                            />
                        </FormGroup>
                    </Grid>
                    <Grid container item xs={12} sm={12}>
                        <FormGroup>
                            <TextField
                                label='Vencimento'
                                name='executionDate'
                                type='date'
                                onChange={handleChange}
                            />
                        </FormGroup>
                    </Grid>
                    <Grid>
                        {/* <Select
                            multiple
                            value={users}
                            onChange={handleChange}
                            input={<Input id="select-multiple" />}
                        >
                            {users != undefined && users.map(u => {
                                debugger;
                                return(
                                <MenuItem key={u.uid} value={u.uid}>
                                    {u.uid}
                                </MenuItem>
                            )})}
                        </Select> */}
                    </Grid>

                    <button onClick={handleSubmit}></button>

                </form>
            </Grid>
        </div>
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