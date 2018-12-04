import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import styles from "./styles";
import EditIcon from "@material-ui/icons/Edit"
import DeleteIcon from "@material-ui/icons/Delete"
import PersonIcon from "@material-ui/icons/Person"
import AttachMoneyIcon from "@material-ui/icons/AttachMoney"
import { CardContent, Typography, IconButton, CardActions, Button } from "@material-ui/core";

const View = ( { classes, expense, name } ) => {

  return (
    <Card className={ classes.root } raised={true}>
      <CardContent className={classes.content}>
        <Typography color="secondary" className={ classes.status } component="p" variant="caption">Pendente</Typography>
        <Typography color="secondary" component="p" variant="h6">{expense.name}</Typography>
        <Typography className={ classes.payments } color="secondary" component="h3" align="left" variant="body2">
          <AttachMoneyIcon className={ classes.moneyIcon }/> Fulano, 
          <AttachMoneyIcon className={ classes.moneyIcon }/> Ciclano
        </Typography>
        <Typography color="secondary" className={ classes.user } component="p" variant="body2">
          <PersonIcon className={ classes.userIcon }/> 
          {name}
        </Typography>
        <div className={ classes.info }>
        <Typography className={ classes.value } component="h4" align="left" variant="h6">R${expense.value.$numberDecimal}</Typography>
        <Typography className={ classes.date } component="h4" align="left" variant="body1">{ new Date( expense.dueDate ).toLocaleDateString() }</Typography>
        </div>
      </CardContent>
      <CardActions className={ classes.actions }>
        <Button className={ classes.pay }>Pago</Button>
        <div>
          <IconButton className={ classes.edit }>
            <EditIcon/>
          </IconButton>
          <IconButton className={ classes.delete }>
            <DeleteIcon/>
          </IconButton>
        </div>
      </CardActions>
    </Card>
  );
}

export default withStyles( styles )( View );