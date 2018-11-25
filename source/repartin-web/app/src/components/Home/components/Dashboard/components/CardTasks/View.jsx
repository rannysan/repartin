import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import Card from '@material-ui/core/Card';
import { CardContent, Typography } from "@material-ui/core";

const View = ( {} ) => {

  return (
    <Card raised={true}>
      <CardContent>
        <Typography color="textPrimary" component="h1" variant="h5" align="center">TAREFAS</Typography>
        <Typography component="h2" align="center" variant="h3">5</Typography>
      </CardContent>
    </Card>
  );
}

export default withStyles( styles )( View );