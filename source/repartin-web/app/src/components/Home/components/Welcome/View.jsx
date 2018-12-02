import React, { Fragment } from "react"
import { withStyles } from "@material-ui/core/styles"
import { Grid, Typography, Button } from "@material-ui/core"
import { Link } from "react-router-dom"
import InputModal from "../../../Common/InputModal"
import styles from "./styles"
import Loading from "../../../Loading"
import MessageDialog from '../../../MessageDialog'

const View = ({ pending, openJoinHouse, openInputModal, handleJoinHouse, handleCancel, signOut, classes, dialog, loading, closeDialog }) => {

  return (
    <Fragment>
      {loading
        ? <Loading loading={loading} />
        :
        <div className={classes.root}>

          <Grid container className={classes.welcomeColumn} spacing={0}>

            <Grid item xs={12}>
              <div className={classes.text}>
                <Typography className={classes.title} component="h1" variant="h4" align="center">VAMOS COMEÇAR</Typography>
                <Typography component="p" align="center" variant="subtitle1">Você pode construir uma nova república ou solicitar entrada em uma.</Typography>
              </div>
            </Grid>

            {
              pending
                ? (
                  <div>
                    <Typography className={classes.pendingTitle} component="p" variant="h5" align="center">Quase lá!</Typography>
                    <Typography component="p" variant="body2" align="center">Sua solicitação de entrada na república está em espera, aguarde a aprovação.</Typography>
                    <div className={classes.centerButton}>
                      <Button className={classes.cancel} onClick={handleCancel}>
                        <Typography component="span" variant="body2">Cancelar</Typography>
                      </Button>
                    </div>
                  </div>
                )
                : (
                  <Grid item xs={12}>
                    <div className={classes.actions}>
                      <Button className={`${classes.firstAction} ${classes.action}`} fullWidth variant="contained" component={Link} to="/nova-republica">Casdastrar uma república</Button>
                      <Button className={classes.action} fullWidth variant="contained" onClick={openJoinHouse(true)}>Entrar em uma república</Button>
                    </div>
                  </Grid>
                )
            }

            <Grid className={classes.centerButton} item xs={12}>
              <Button onClick={signOut}>
                <Typography component="span" variant="body2">Sair</Typography>
              </Button>
            </Grid>

          </Grid>

          <InputModal
            open={openInputModal}
            openJoinHouse={openJoinHouse}
            handleModalSubmit={handleJoinHouse}
          />

          <MessageDialog title={dialog.title} message={dialog.message} open={dialog.open} handleClose={closeDialog} />
        </div>

      }
    </Fragment>
  );
}

export default withStyles(styles)(View);