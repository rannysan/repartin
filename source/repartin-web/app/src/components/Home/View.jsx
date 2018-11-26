import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Dashboard from "./components/Dashboard";
import Welcome from "./components/Welcome";
import Tasks from "../Tasks";
import Expenses from "../Expenses";
import Profile from "../Profile";
import TasksAdd from "../Tasks/TaskCreate"
import ExpenseAdd from "../Expenses/ExpenseCreate"
import Members from "../Members";
import CreateHouse from "../Home/components/Welcome/components/CreateHouse";
import NotFound from "../NotFound";
import styles from "./styles";

const View = ( { isMember, signOut, setMember } ) => {

  return ( 
    <main>
      <Router>
        <Switch>
          <Route exact path="/" render={ ( props ) => {
            return isMember
              ? <Dashboard />
              : <Welcome setMember={ setMember }/>
          } }/>
          <Route path="/perfil" component={ Profile }/>
          <Route exact path="/tarefas" component={ Tasks }/>
          <Route path="/tarefas/nova" component={ TasksAdd }/>
          <Route path="/tarefas/:id" component={ TasksAdd }/>
          <Route exact path="/financas" component={ Expenses }/>
          <Route path="/financas/nova" component={ ExpenseAdd }/>
          <Route path="/financas/:id" component={ ExpenseAdd }/>
          <Route path="/membros" component={ Members }/>
          <Route component={ NotFound }/>
        </Switch>
      </Router>
    </main>
  );
};

export default withStyles(styles)(View);
