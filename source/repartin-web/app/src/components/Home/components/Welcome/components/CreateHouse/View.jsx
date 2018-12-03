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
import MessageDialog from '../../../../../MessageDialog';
import { Link } from "react-router-dom"
import styles from './styles';

const View = ({ classes, handleChange, handleSubmit, handleChangeComplete,  
  handleUpload, loading, house, searchCep, dialog, closeDialog }) => {

  ValidatorForm.addValidationRule('minLength', (value) => {
    if (value.length < 4) {
      return false;
    }
    return true;
  });

  return (
    <>
      {loading
        ? <Loading loading={loading} />
        : (
          <>
            <Typography component="h1" variant="h5">Nova república</Typography>
            <ValidatorForm
              onSubmit={handleSubmit}
              onError={errors => console.error(errors)}
            >
              <Grid container spacing={0}>
                <Grid item xs={12}>

                  <TextValidator
                    label="Nome da República"
                    margin="normal"
                    className={classes.textField}
                    value={house.name}
                    onChange={handleChange}
                    name="name"
                    validators={['required', 'minLength']}
                    errorMessages={['Campo obrigatório', 'O nome precisa ter mais que 3 caracteres']}
                    fullWidth
                  />
                  <InputMask
                    mask="99999-999"
                    value={house.cep}
                    onChange={handleChange}
                    onBlur={searchCep}
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

                <Grid item xs={12}>
                  <TextField
                    name="address"
                    label="Endereço"
                    className={classes.textField}
                    onChange={handleChange}
                    margin="normal"
                    disabled
                    value={house.address}
                    fullWidth
                  />
                  <TextField
                    name="city"
                    label="Cidade"
                    className={classes.textField}
                    onChange={handleChange}
                    value={house.city}
                    margin="normal"
                    fullWidth
                    disabled
                  />
                  <TextField
                    name="state"
                    label="Estado"
                    value={house.state}
                    className={classes.textField}
                    onChange={handleChange}
                    margin="normal"
                    fullWidth
                    disabled
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
                  <label className={ classes.label } htmlFor="contained-button-file">
                    <Typography component="p" variant="body2">Imagem da república</Typography>
                    <div className={ classes.buttonInput }>
                      <Button variant="contained" component="span" className={classes.button}>
                        Upload <CloudUploadIcon className={classes.rightIcon} />
                      </Button>
                    </div>
                  </label>
                  <label className={ classes.label } htmlFor="colorPicker">
                      <Typography component="p" variant="body2">Cor da república</Typography>
                  </label>
                  <TwitterPicker
                    id="colorPicker"
                    triangle="hide"
                    className={ classes.colorPicker }
                    value={house.color}
                    color={house.color}
                    onChangeComplete={handleChangeComplete}
                    width="100%"
                    colors={ [ 
                      "#F44336", 
                      "#E91E63", 
                      "#9C27B0", 
                      "#3F51B5", 
                      "#2196F3", 
                      "#00BCD4", 
                      "#4CAF50", 
                      "#8BC34A",
                      "#CDDC39", 
                      "#FFEB3B", 
                      "#FF9800",
                      "#607D8B"  
                    ] }
                  />
                </Grid>

              </Grid>
              <div className={ classes.buttonInput }>
                <Button component={ Link } to="/">
                  Cancelar
                </Button>
                <Button variant="contained" type="submit" color="primary" className={ `${ classes.button } ${ classes.submit }` }>
                  Salvar
                </Button>
              </div>
              <MessageDialog title={dialog.title} message={dialog.message} open={dialog.open} handleClose={closeDialog}/>
            </ValidatorForm>
          </>
        )
      }
    </>
  );
}

export default withStyles(styles)(View);
