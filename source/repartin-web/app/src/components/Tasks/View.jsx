import React from "react"
import { Button } from "@material-ui/core"
import { withStyles } from "@material-ui/core/styles"
import AddIcon from "@material-ui/icons/Add"
import TopCard from "../Common/TopCard"
import TaskList from "./components/TaskList"
import Toolbar from "../Common/Toolbar"
import { Link } from "react-router-dom"
import styles from "./styles"

const View = ({ tasks, card, handleSearch, handleFilter, handleQuickTip, classes }) => {

  return (

      <div className={classes.body}>
        <Toolbar
          handleSearch={ handleSearch }
          handleFilter={ handleFilter }
        />
        <div className={ classes.wrapper }>
          <TopCard card={ card } handleQuickTip={ handleQuickTip }/>
          <TaskList tasks={tasks}/>
          <Button component={ Link } to="/tarefas/nova" className={ classes.addButton } variant="fab" color="primary">
            <AddIcon></AddIcon>
          </Button>
        </div>
      </div>
  )
}

export default withStyles( styles )( View )
