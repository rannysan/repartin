import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import Card from '@material-ui/core/Card';
import { CardContent, Typography } from "@material-ui/core";
import graph from "./graphSample.svg";

const View = ({ openExpenses, classes, expense }) => {

  return (
    <Card raised={true} onClick={openExpenses} className={classes.cardStyle}>
      <CardContent style={{ display: "flex", flexDirection: "column" }} className={classes.cardStyle}>
        <Typography color="textPrimary" component="h1" variant="h5" align="center">GASTOS</Typography>
        <Typography component="h2" align="center" variant="h4">{expense}</Typography>
        <object data={graph} align="center" style={{ maxHeight: "80px", alignSelf: "center" }} type="image/svg+xml"></object>
      </CardContent>
    </Card>
  );
}

export default withStyles(styles)(View);