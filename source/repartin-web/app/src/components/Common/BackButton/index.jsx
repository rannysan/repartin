import React from "react";
import { ButtonBase } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Link } from "react-router-dom";
import styles from "./styles";

export default withStyles( styles )( ( { to, classes, className } ) => {
  
  const mergedClasses = className ? `${ className } ${ classes.button }` : classes.button;

  return (
    <ButtonBase className={ mergedClasses } component={ Link } to={ to }>
      <ArrowBackIcon/>
    </ButtonBase>
  );
} );