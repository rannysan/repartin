import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import FullCard from "./components/FullCard";
import Card from "./components/Card";
import { Grid } from "@material-ui/core";

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
          List
        </Grid>
      </Grid>
    </>
  );
}

export default withStyles( styles )( View );