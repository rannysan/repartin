import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import styles from "./styles";
import people from "../../../../../../../public/images/account-multiple.svg";
import { CardContent, Typography } from "@material-ui/core";

const View = ( {openProfile} ) => {

  return (
    <Card raised={true} onClick={ openProfile }>
      <CardContent>
        <Typography color="textPrimary" component="h1" variant="h4" align="left">República</Typography>
        <Typography component="h2" align="left" variant="h5">Usuário</Typography>
        <object data={people} align="right" style={ {maxWidth: "150px", alignSelf: "center", padding: "20px"} } type="image/svg+xml" />
      </CardContent>
    </Card>
  );
}

export default withStyles( styles )( View );