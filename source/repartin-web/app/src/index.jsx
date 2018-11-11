import firebase from "firebase/app";
import "firebase/auth";
import React from "react";
import { render } from "react-dom";
import App from "./components/App";
import "typeface-roboto";

try {
  firebase.initializeApp( {
    apiKey: "AIzaSyAP-W-sqXqyIqK_acOxCGXRbLb-jSy0uGY",
    authDomain: "repartin-bcc85.firebaseapp.com",
    projectId: "repartin-bcc85",
    storageBucket: "repartin-bcc85.appspot.com",
    messagingSenderId: "816224201193"
  } );
} catch( error ) {
  if( !/already exists/.test( error.message ) ) {
    console.error( error.stack );
  }
}

render( <App firebaseAuth={ firebase.auth }/>, document.getElementById( "app" ) );

// For Webpack Hot Module Replacement
!module.hot || module.hot.accept( App );