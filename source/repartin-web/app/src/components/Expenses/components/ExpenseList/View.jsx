import React from "react";
import { withStyles } from "@material-ui/core/styles";
import ExpenseCard from '../ExpenseCard';
import styles from "./styles";
import { CardContent, Typography, IconButton } from "@material-ui/core";

const expensee = [ 1, 2, 3, 4, 5]

const View = ( { classes, expenses } ) => {

  return (
    <div>
      {expenses.expense != undefined && expenses.expense.map((item, i) => 
        <ExpenseCard key={i} expense={item}/>
      )}
    </div>
  );
}

export default withStyles( styles )( View );