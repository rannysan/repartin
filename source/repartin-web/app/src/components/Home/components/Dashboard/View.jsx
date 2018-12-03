import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grid  } from "@material-ui/core";
import FullCard from "./components/FullCard";
import CardExpenses from "./components/CardExpenses";
import CardTasks from "./components/CardTasks";
import FeedList from "./components/FeedList";
import styles from "./styles";
import { Link } from "react-router-dom";

const View = ( { classes } ) => {

  return (
    <Grid container className={classes.body} spacing={ 16 }>
      <Grid item xs={ 12 }>
        <FullCard />
      </Grid>
      <Grid item xs={ 6 }>
        <CardExpenses />
      </Grid>
      <Grid item xs={ 6 }>
        <CardTasks />
      </Grid>
      <Grid item xs={ 12 }>
        <FeedList/>
      </Grid>
 
    </Grid>
  );
}

export default withStyles( styles )( View );