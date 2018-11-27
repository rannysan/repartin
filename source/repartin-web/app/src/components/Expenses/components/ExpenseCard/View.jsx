import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import styles from "./styles";
import Arrow from '@material-ui/icons/ArrowForward';
import { CardContent, Typography, IconButton } from "@material-ui/core";

const View = ( { classes } ) => {

  return (
    <Card raised={true} style={{margin: "16px 0px"}}>
      <CardContent className={classes.cardStyle}>
        <div>
          <Typography color="secondary" component="h1" align="left" variant="h5">Título da despesa</Typography>
          <Typography color="secondary" component="h2" align="left" variant="h6">Usuário que cadastrou</Typography>
          <Typography color="secondary" component="h3" align="left" variant="h6">Pago por: Nego, Fí, Man e Zé</Typography>
          <Typography color="secondary" component="h4" align="left" variant="subtitle1">Vencimento em 10/11/2018</Typography>
        </div>
        <IconButton color="secondary" className={classes.button} aria-label="Membros da república">
          <Arrow/>
        </IconButton>
      </CardContent>
    </Card>
  );
}

export default withStyles( styles )( View );