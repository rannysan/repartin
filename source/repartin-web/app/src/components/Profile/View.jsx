import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import { Typography } from "@material-ui/core";

const View = ( {} ) => {

  return (
    <main>
      <Typography component="h1" variant="h5">Perfil</Typography>
      [userinfo]
      [edit rep if admin]
      [logout] [exit house]
    </main>
  );
}

export default withStyles( styles )( View );