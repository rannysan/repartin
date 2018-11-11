import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { Typography } from "@material-ui/core";

const View = ( { firebaseAuth } ) => {
  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebaseAuth.GoogleAuthProvider.PROVIDER_ID,
      firebaseAuth.FacebookAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  };

  return ( 
    <StyledFirebaseAuth uiConfig={ uiConfig } firebaseAuth={ firebaseAuth() } />
  );
};

export default View;