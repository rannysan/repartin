import React from "react";
import Login from "../Login";
import Home from "../Home";
import { Typography } from "@material-ui/core";

const View = ( { firebaseAuth, isSignedIn } ) => {

  return (
    <div className="App">
      { isSignedIn ? (
        <Home firebaseAuth={ firebaseAuth } />
      ) : (
        <Login firebaseAuth={ firebaseAuth } />
      ) }
    </div>
  );
};

export default View;