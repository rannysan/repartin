import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import Card from '@material-ui/core/Card';
import { CardContent, Typography } from "@material-ui/core";
import graph from "./graphSample.svg";

const View = ( {} ) => {

  return (
    <Card raised={true}>
      <CardContent>
        <Typography color="textPrimary" component="h1" variant="h5" align="center">GASTOS</Typography>
        <Typography component="h2" align="center" variant="h3">500,00</Typography>
        <object data={graph} align="center" style={ {maxWidth: "150px", alignSelf: "center" } } type="image/svg+xml"></object>
      </CardContent>
    </Card>
  );
}

export default withStyles( styles )( View );