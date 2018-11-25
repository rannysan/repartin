import React from "react";
import { Link } from "react-router-dom";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { Grid, createStyles, Typography, ButtonBase } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";
import logo from "../../../public/images/logo.svg";
import { compose } from 'recompact'
import { firebaseConnect  } from 'react-redux-firebase'

const styles = createStyles({
  root: {
    backgroundColor: grey[900],
    height: "100vh"
  },
  loginColumn: {
    height: "100%"
  },
  formColumn: {
    paddingTop: "10rem"
  },
  app: {
    textAlign: "center"
  },
  logo: {
    width: "132px",
    height: "auto",
    marginBottom: "0.8rem"
  },
  buttons: {
    paddingTop: "2.2rem"
  },
  links: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: ".4rem"
  }
});

const View = ({ classes, firebase }) => {

  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccessWithAuthResult: () => false
    }
  };



  return (
    <main className={classes.root}>
      <Grid container className={classes.loginColumn} spacing={0}>

        <Grid container item className={classes.formColumn} direction="column" justify="space-between" wrap="nowrap" xs={12}>

          <Grid className={classes.app} item xs={12}>
            <object className={classes.logo} data={logo} type="image/svg+xml"></object>
            <Typography component="h1" variant="h5">Repartin</Typography>
            <Typography component="p" variant="body2">Administração de Repúblicas</Typography>
          </Grid>

          <Grid item className={classes.buttons} xs={12}>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
          </Grid>

          <Grid item className={classes.links} xs={12}>
            <ButtonBase component={Link} to="/termos-de-uso">
              <Typography component="span" variant="body2">Termos de uso</Typography>
            </ButtonBase>
            <ButtonBase component={Link} to="/politica-de-privacidade">
              <Typography component="span" variant="body2">Política de Privacidade</Typography>
            </ButtonBase>
          </Grid>

        </Grid>

      </Grid>
    </main>
  );
};

export default compose(
  withStyles(styles),
  firebaseConnect()
)(View);