import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Typography, ButtonBase  } from "@material-ui/core";
import FullCard from "./components/FullCard";
import CardExpenses from "./components/CardExpenses";
import CardTasks from "./components/CardTasks";
import ListCard from "./components/ListCard";
import styles from "./styles";
import { Link } from "react-router-dom";

const View = ( { signOut } ) => {

  return (
    <>
      <Grid container spacing={ 0 }>
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
          <ListCard />
          <ListCard />
          <ListCard />
          <ListCard />
        </Grid>
        <ButtonBase component={Link} to="/tarefasAdd">
            <Typography component="span" variant="body2">Tarefa</Typography>
        </ButtonBase>
        <ButtonBase component={Link} to="/financasAdd">
            <Typography component="span" variant="body2">Financas</Typography>
        </ButtonBase>
      </Grid>
    </>
  );
}

export default withStyles( styles )( View );