import React from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from 'prop-types';
import classNames from 'classnames';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { BlockPicker } from 'react-color';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { Grid } from "@material-ui/core";

const styles = theme => ({

  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
  button: {
    marginLeft: 10
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  input: {
    display: 'none',
  }
});

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

const View = ({ classes, handleChange, handleSubmit, handleChangeComplete, color, handleUpload }) => {

  return (
    <Grid container>
      <form noValidate autoComplete="off">
        <Grid xs={12}>
          <TextField
            name="name"
            label="Nome"
            className={classes.textField}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            name="address"
            label="Endereço"
            className={classes.textField}
            onChange={handleChange}
            margin="normal"
          />
        </Grid>
        <Grid xs={12}>

          <input
            accept="image/*"
            className={classes.input}
            id="contained-button-file"
            type="file"
            unique
          />
          <label htmlFor="contained-button-file">
            <Button variant="contained" component="span" onChange={handleUpload} className={classes.button}>
              Upload
              <CloudUploadIcon className={classes.rightIcon} />
            </Button>
          </label>

          <BlockPicker color={color}
            onChangeComplete={handleChangeComplete} />
        </Grid>
        <Button variant="contained" onClick={handleSubmit} color="primary" className={classes.button}>
          Salvar
      </Button>
      </form>
    </Grid>);
}


export default withStyles(styles)(View);
