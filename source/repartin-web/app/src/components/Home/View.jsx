import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Dashboard from "./components/Dashboard";
import Welcome from "./components/Welcome";
import styles from "./styles";

const View = ( { isMember, signOut, setMember } ) => {

  // const currentUser = firebase.auth().currentUser;

  return ( 
    <>
      {
        isMember 
        ? <Dashboard /> 
        : <Welcome setMember={ setMember }/>
      }  
    </>
  );
};

export default withStyles(styles)(View);
