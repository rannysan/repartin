import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import { Grid, Typography, Button } from "@material-ui/core";

const View = ( { createHouse, joinHouse, signOut, classes } ) => {
  
  return (
    <div className={ classes.root }>
      <Grid container className={ classes.welcomeColumn } spacing={ 0 }>

        <Grid item xs={ 12 }>
          <div className={ classes.text }>
            <Typography className={ classes.title } component="h1" variant="h4" align="center">VAMOS COMEÇAR</Typography>
            <Typography component="p" align="center" variant="subtitle1">Você pode construir uma nova república ou solicitar entrada em uma.</Typography>
          </div>
        </Grid>

        <Grid item xs={ 12 }>
          <div className={ classes.actions }>
            <Button className={ `${ classes.firstAction } ${ classes.action }` } fullWidth variant="contained" onClick={ createHouse }>Casdastrar uma república</Button>
            <Button className={ classes.action } fullWidth variant="contained" onClick={ joinHouse }>Entrar em uma república</Button>
          </div>
        </Grid>

        <Grid className={ classes.signOut } item xs={ 12 }>
          <Button onClick={ signOut }>
            <Typography component="span" variant="body2">Sair</Typography>
          </Button>
        </Grid>

      </Grid>
    </div>
  );
}

export default withStyles( styles )( View );