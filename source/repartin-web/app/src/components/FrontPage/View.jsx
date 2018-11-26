import React from "react";
import Home from "../Home";
import { Redirect } from "react-router-dom";
import Login from "../Login";

export default ( { credential, match } ) => {
  
  return credential
    ? <Home/>
    : match.isExact
      ? <Login/>
      : <Redirect to="/"/>;
}