import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import { Typography } from "@material-ui/core";

export default withStyles( styles )( ( { user, classes } ) => {

  return (
    <div className={ classes.root }>
      <img className={ classes.avatar } src={ user.photoURL } alt=""/>
      <Typography className={ classes.name } component="p" variant="h5">{ user.name }</Typography>
      <Typography className={ classes.email }  component="p" variant="h6">{ user.email }</Typography>
    </div>
  );
} );