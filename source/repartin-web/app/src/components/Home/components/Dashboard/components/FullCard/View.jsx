import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import styles from "./styles";
import People from '@material-ui/icons/People';
import { CardContent, Typography, IconButton, Button } from "@material-ui/core";

const View = ( {openProfile, houseMembers, classes} ) => {

  return (
    <Card raised={true} onClick={ openProfile } className={ classes.cardStyle }>
      <CardContent className={classes.cardStyle}>
        <div>
          <Typography color="textPrimary" component="h1" variant="h4" align="left">República</Typography>
          <Typography component="h2" align="left" variant="h5">Usuário</Typography>
        </div>
        <IconButton color="primary" onClick={houseMembers} aria-label="Membros da república">
          <People/>
        </IconButton>
      </CardContent>
    </Card>
  );
}

export default withStyles( styles )( View );