import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import ListCard from "./components/ListCard";
import { Typography } from "@material-ui/core";

const View = ( {} ) => {

  return (
    <>
      <Typography component="h1" variant="h4">Membros</Typography>
      <ListCard />
      <ListCard />
      <ListCard />
    </>
  );
}

export default withStyles( styles )( View );