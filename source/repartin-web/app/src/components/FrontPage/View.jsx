import React from "react";
import { isLoaded, isEmpty } from "react-redux-firebase";
import Home from "../Home";
import Login from "../Login";

export default ( { firebase, auth } ) => {
  
  return ! isLoaded
    ? ( <h1>Loading...</h1> )
    : isEmpty( auth )
      ? ( <Login firebaseAuth={ firebase.auth }/> )
      : ( <Home firebaseAuth={ firebase.auth }/> );
}