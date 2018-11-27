import React from "react";
import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import TopCard from "../Common/TopCard";
import ExpenseList from "./components/ExpenseList";
import Toolbar from "../Common/Toolbar";
import styles from "./styles";

const View = ( { expenses, handleSearch, handleFilter, classes } ) => {

  return (
    <div className={classes.body}>
      <Toolbar 
        handleSearch={ handleSearch }
        handleFilter={ handleFilter }
      />
      [busca][filtro]
      <TopCard title="Finanças"/>
      <ExpenseList />
      <Button className={ classes.addButton } variant="fab" color="primary">
        <AddIcon></AddIcon>
      </Button>
    </div>
  );
}

export default withStyles( styles )( View );