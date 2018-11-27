import React from "react";
import { withStyles } from "@material-ui/core/styles";
import ExpenseCard from '../ExpenseCard';
import styles from "./styles";
import { CardContent, Typography, IconButton } from "@material-ui/core";

const expenses = [ 1, 2, 3, 4, 5]

const View = ( { classes } ) => {

  return (
    <div>
      {expenses.map((item, i) => 
        <ExpenseCard key={i} />
      )}
    </div>
  );
}

export default withStyles( styles )( View );