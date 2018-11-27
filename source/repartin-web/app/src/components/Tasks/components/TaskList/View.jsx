import React from "react";
import { withStyles } from "@material-ui/core/styles";
import TaskCard from '../TaskCard';
import styles from "./styles";
import { CardContent, Typography, IconButton } from "@material-ui/core";


const View = ( { classes, tasks } ) => {
  return (
    <div>
      {tasks!=undefined && tasks.map((item, i) => 
        <TaskCard key={i} task={item}/>
      )}
    </div>
  );
}

export default withStyles( styles )( View );