import React from "react";
import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import TopCard from "../Common/TopCard";
import TaskList from "./components/TaskList";
import styles from "./styles";

const View = ( { classes, tasks } ) => {
  
  return (
    <div className={classes.body}>
      [busca][filtro]
      <TopCard title="Tarefas"/>
      <TaskList />
      <Button className={ classes.addButton } variant="fab" color="primary">
        <AddIcon></AddIcon>
      </Button>
    </div>
  );
}

export default withStyles( styles )( View );