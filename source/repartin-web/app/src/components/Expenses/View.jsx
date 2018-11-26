import React from "react";
import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import TopCard from "../Common/TopCard";
import ListCard from "../Common/ListCard";
import styles from "./styles";

const View = ( { classes, expenses } ) => {

  return (
    <>
      [busca][filtro]
      <TopCard title="Finanças"/>
      <ListCard />
      <ListCard />
      <ListCard />
      <Button className={ classes.addButton } variant="fab" color="primary">
        <AddIcon></AddIcon>
      </Button>
    </>
  );
}

export default withStyles( styles )( View );