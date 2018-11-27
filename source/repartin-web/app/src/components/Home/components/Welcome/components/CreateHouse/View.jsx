import React from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import { TwitterPicker } from 'react-color';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { Grid } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import InputMask from 'react-input-mask';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Loading from "../../../../../Loading";
import styles from './styles';


const View = ({ classes, handleChange, handleSubmit, handleChangeComplete, color, handleUpload, loading, house }) => {

  ValidatorForm.addValidationRule('minLength', (value) => {
    if (value.length < 4) {
      return false;
    }
    return true;
  });

  return (
    <>
      { loading 
        ? <Loading loading={ loading } />
        : (
          <>
            <Typography component="h1" variant="h5">VO DURMI FLW</Typography>
            <ValidatorForm
              onSubmit={handleSubmit}
              onError={errors => console.log(errors)}
            >
              <Grid container spacing={0}>
                <Grid item xs={12}>

                  <TextValidator
                    label="Nome"
                    margin="normal"
                    className={classes.textField}
                    value={house.name}
                    onChange={handleChange}
                    name="name"
                    validators={['minLength', 'required']}
                    errorMessages={['O nome precisa ter mais que 3 caracteres', 'Campo obrigatório']}
                    fullWidth
                  />

                </Grid>
                <Grid item xs={12}>

                  <InputMask
                    mask="99999-999"
                    value={house.cep}
                    onChange={handleChange}
                  >
                    {() => <TextValidator
                      label="Cep"
                      name="cep"
                      className={classes.textField}
                      value={house.cep}
                      onChange={handleChange}
                      margin="normal"
                      type="text"
                      validators={['required']}
                    errorMessages={['Campo obrigatório']}
                    />}
                  </InputMask>
                </Grid>
                <Grid item xs={ 12 }>
                  <TextField
                    name="address"
                    label="Endereço"
                    className={classes.textField}
                    onChange={handleChange}
                    margin="normal"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
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
                      Upload <CloudUploadIcon className={classes.rightIcon} />
                    </Button>
                  </label>            
                </Grid>
                <Grid item xs={12}>
                  <TwitterPicker triangle="hide" color={color}
                    onChangeComplete={handleChangeComplete} />
                </Grid>
              </Grid>
              <Button variant="contained" type="submit" color="primary" className={classes.button}>
                Salvar
              </Button>
            </ValidatorForm>
          </>
        )
      }
    </>
  );
}


export default withStyles(styles)(View);
