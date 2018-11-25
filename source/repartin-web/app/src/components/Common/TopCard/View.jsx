import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import { Typography } from "@material-ui/core";

const View = ( { title } ) => {

  return (
    <Typography component="h1" variant="h4">{ title }</Typography>
  );
}

export default withStyles( styles )( View );