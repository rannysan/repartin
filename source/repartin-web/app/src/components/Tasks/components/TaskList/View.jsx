import React from "react";
import { withStyles } from "@material-ui/core/styles";
import TaskCard from '../TaskCard';
import styles from "./styles";
import { CardContent, Typography, IconButton } from "@material-ui/core";

const tasks = [ 1, 2, 3, 4, 5]

const View = ( { classes } ) => {

  return (
    <div>
      {tasks.map((item, i) => 
        <TaskCard key={i} />
      )}
    </div>
  );
}

export default withStyles( styles )( View );