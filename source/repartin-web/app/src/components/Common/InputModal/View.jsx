import React from "react"
import { withStyles, Modal, Typography, Button, TextField } from "@material-ui/core"
import styles from "./styles"

const View = ( { open, value, handleClose, handleChange, handleSubmit, classes } ) => {

  return (
    <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={ open }
      onClose={ handleClose }
    >
      <div className={ classes.modal }>
        <Typography component="p" variant="h6">Entrar em uma república</Typography>
        <Typography component="p" variant="caption">Por favor, informe o ID da república que deseja entrar</Typography>
        <form className={ classes.form } onSubmit={ handleSubmit }>
          <TextField 
            label="ID"
            className={ classes.input }
            value={ value }
            onChange={ handleChange }
            fullWidth
          />
          <div className={ classes.inputButton }>
            <Button type="submit">Ok</Button>
          </div>
        </form>
      </div>
    </Modal>
  )
}

export default withStyles( styles )( View );