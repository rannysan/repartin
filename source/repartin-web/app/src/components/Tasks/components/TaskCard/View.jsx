import React from "react"
import { CardContent, Typography, IconButton, CardActions, Card, Button } from "@material-ui/core"
import { withStyles } from "@material-ui/core/styles"
import EditIcon from "@material-ui/icons/Edit"
import DeleteIcon from "@material-ui/icons/Delete"
import PersonIcon from "@material-ui/icons/Person"
import styles from "./styles"

const View = ( { classes, task, names } ) => {

  return (
    <Card className={ classes.root } raised={true}>
      <CardContent className={classes.content}>
        <Typography color="secondary" className={ classes.status } component="p" variant="caption">Aguardando</Typography>
        <Typography color="secondary" component="p" variant="h6">{task.name}</Typography>
        <Typography color="secondary" component="p" variant="body2">{task.description}</Typography>
        <Typography color="secondary" className={ classes.user } component="p" variant="body2">
          <PersonIcon className={ classes.userIcon }/> 
          {names}
        </Typography>
      </CardContent>
      <CardActions className={ classes.actions }>
        <Button className={ classes.finish }>Concluído</Button>
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
  )
}

export default withStyles( styles )( View )