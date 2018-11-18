import React from "react";
import { render } from "react-dom";
import { createStore, compose } from "redux";
import { reactReduxFirebase } from "react-redux-firebase";
import firebase from "firebase";
import rootReducer from "./redux/rootReducer";
import App from "./components/App";
import "typeface-roboto";

const firebaseConfig = {
  apiKey: "AIzaSyAP-W-sqXqyIqK_acOxCGXRbLb-jSy0uGY",
  authDomain: "repartin-bcc85.firebaseapp.com",
  projectId: "repartin-bcc85",
  storageBucket: "repartin-bcc85.appspot.com",
  messagingSenderId: "816224201193",
  databaseURL: "repartin-bcc85.firebaseio.com"
};
const reactReduxFirebaseConfig = {
  userProfile: "users"
};

try {
  firebase.initializeApp( firebaseConfig );
} catch( error ) {
  if( !/already exists/.test( error.message ) ) {
    console.error( error.stack );
  }
}

const createStoreWithFirebase = compose(
  reactReduxFirebase( firebase, reactReduxFirebaseConfig )
)( createStore );
const initialState = {};
const store = createStoreWithFirebase( rootReducer, initialState );

render( <App store={ store }/>, document.getElementById( "app" ) );

// For Webpack Hot Module Replacement
!module.hot || module.hot.accept( App );