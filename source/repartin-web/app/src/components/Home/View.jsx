import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Dashboard from "./components/Dashboard";
import Welcome from "./components/Welcome";
import styles from "./styles";

const View = ( { isMember, signOut, setMember } ) => {

  // const currentUser = firebase.auth().currentUser;

  return ( 
    <main>
      {
        isMember 
        ? <Dashboard /> 
        : <Welcome setMember={ setMember }/>
      }
    </main>
  );
};

export default withStyles(styles)(View);
