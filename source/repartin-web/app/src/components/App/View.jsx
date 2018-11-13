import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { CssBaseline, createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import Home from "../Home";
import Login from "../Login";
import PrivacyPolicy from "../PrivacyPolice";
import TermsOfService from "../TermsOfService";

const theme = createMuiTheme( {
  palette: {
    text: {
      primary: grey[ 50 ]
    }
  },
  typography: {
    useNextVariants: true
  }
} );

export default ( { firebaseAuth, isSignedIn } ) => {

  const FrontPage = ( props ) => (
    isSignedIn
      ? <Home firebaseAuth={ firebaseAuth } { ...props }/>
      : <Login firebaseAuth={ firebaseAuth } { ...props }/>
  );

  return (
    <MuiThemeProvider theme={ theme }>
      <CssBaseline>
        <Router>
          <div className="App">
            <Route exact path="/" component={ FrontPage }/>
            <Route path="/termos-de-uso" component={ TermsOfService }/>
            <Route path="/politica-de-privacidade" component={ PrivacyPolicy }/>
          </div>
        </Router>
      </CssBaseline>
    </MuiThemeProvider>
  );
};