import React from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from 'prop-types';
import classNames from 'classnames';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { TwitterPicker } from 'react-color';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { Grid } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import styles from './styles';



const View = ({ classes, handleChange, handleSubmit, handleChangeComplete, color, handleUpload }) => {

  return (
    <Card className={classes.card}>
      <form noValidate autoComplete="off">
        <CardContent>
          <Grid container spacing={24}>

            <Grid item xs={12}>
              <Typography component="h1" className={classes.title} color="textSecondary" gutterBottom>
                <h1>Nova República</h1>
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="name"
                label="Nome"
                className={classes.textField}
                onChange={handleChange}
                margin="normal"
              />            </Grid>
            <Grid item xs={6}>
              <TextField
                name="address"
                label="Endereço"
                className={classes.textField}
                onChange={handleChange}
                margin="normal"
              />            </Grid>
            <Grid item xs={4}>
              <input
                accept="image/*"
                className={classes.input}
                id="contained-button-file"
                type="file"
                onChange={handleUpload}
                unique="true"
              />
              <label htmlFor="contained-button-file">
                <Button variant="contained" component="span" className={classes.button}>
                  Upload
              <CloudUploadIcon className={classes.rightIcon} />
                </Button>
              </label>            </Grid>
            <Grid item xs={6}>
              <TwitterPicker triangle="hide" color={color}
                onChangeComplete={handleChangeComplete} />
            </Grid>
          </Grid>

        </CardContent>
        <CardActions>
          <Button variant="contained" onClick={handleSubmit} color="primary" className={classes.button}>
            Salvar
           </Button>
        </CardActions>
      </form>

    </Card>

  );
}


export default withStyles(styles)(View);
