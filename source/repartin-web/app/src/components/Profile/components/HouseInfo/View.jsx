import React from "react";
import { Typography, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import EditIcon from "@material-ui/icons/Edit";
import styles from "./styles";

const View = ( { house, admin, editHouse, classes } ) => {

  return (
    <div className={ classes.root }>
      <Typography className={ classes.name } component="p" variant="h6">
        { house.name }
        { admin ? (
            <Button className={ classes.editButton } onClick={ editHouse }>
              <EditIcon className={ classes.editButtonIcon }/>
            </Button>
          ) : '' 
        }
      </Typography>
      <Typography className={ classes.address } component="p" variant="body1">{ house.address }</Typography>
    </div>
  );
}

export default withStyles( styles )( View );