import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import ListCard from "./components/ListCard";
import { Typography } from "@material-ui/core";

const View = ( {} ) => {

  return (
    <main>
      <Typography component="h1" variant="h4">Membros</Typography>
      <ListCard />
      <ListCard />
      <ListCard />
    </main>
  );
}

export default withStyles( styles )( View );