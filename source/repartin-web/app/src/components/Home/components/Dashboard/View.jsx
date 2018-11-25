import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import FullCard from "./components/FullCard";
import Card from "./components/Card";
import ListCard from "./components/ListCard";
import styles from "./styles";

const View = ( { signOut } ) => {

  return (
    <>
      <Grid container spacing={ 0 }>
        <Grid item xs={ 12 }>
          <FullCard />
        </Grid>
        <Grid item xs={ 6 }>
          <Card />
        </Grid>
        <Grid item xs={ 6 }>
          <Card />
        </Grid>
        <Grid item xs={ 12 }>
          <ListCard />
          <ListCard />
          <ListCard />
          <ListCard />
        </Grid>
      </Grid>
    </>
  );
}

export default withStyles( styles )( View );