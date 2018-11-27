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
import { css } from 'react-emotion';
import { ClipLoader } from 'react-spinners';
import InputMask from 'react-input-mask';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;


const View = ({ classes, handleChange, handleSubmit, handleChangeComplete, color, handleUpload, loading, house }) => {

  ValidatorForm.addValidationRule('minLength', (value) => {
    if (value.length < 4) {
      return false;
    }
    return true;
  });

  return (
    <Card className={classes.card}>
      {loading ?

        <div className={classes.sweetLoading}>
          <ClipLoader
            className={override}
            sizeUnit={"px"}
            size={150}
            color={'#123abc'}
            loading={loading}
          />
        </div>

        :
        <ValidatorForm
          onSubmit={handleSubmit}
          onError={errors => console.log(errors)}
        >
          <CardContent>
            <Grid container spacing={24}>
              <Grid item xs={12}>
                <Typography component="h1" className={classes.title} color="textSecondary" gutterBottom>
                  <h1>Nova República</h1>
                </Typography>
              </Grid>
              <Grid item xs={6}>

                <TextValidator
                  label="Nome"
                  margin="normal"
                  className={classes.textField}
                  value={house.name}
                  onChange={handleChange}
                  name="name"
                  validators={['minLength', 'required']}
                  errorMessages={['O nome precisa ter mais que 3 caracteres', 'Campo obrigatório']}
                />

              </Grid>
              <Grid item xs={6}>

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
            <Button variant="contained" type="submit" color="primary" className={classes.button}>
              Salvar
           </Button>
          </CardActions>
        </ValidatorForm>

      }

    </Card>

  );
}


export default withStyles(styles)(View);
