import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import styles from "./styles";
import { CardContent, Typography } from "@material-ui/core";

const View = ( {} ) => {

  return (
    <Card raised="true">
      <CardContent>
        <Typography color="textPrimary" component="h1" variant="h4" align="left">República</Typography>
        <Typography component="h2" align="left" variant="h5">Usuário</Typography>
      </CardContent>
    </Card>
  );
}

export default withStyles( styles )( View );