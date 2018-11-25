import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { CssBaseline, createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import FrontPage from "../FrontPage";
import PrivacyPolicy from "../PrivacyPolice";
import TermsOfService from "../TermsOfService";
import TaskCreate from "../TaskCreate";
import ExpenseCreate from "../ExpenseCreate";
import Home from "../Home";

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

export default ( { store } ) => {

  return (
    <Provider store={ store }>
      <MuiThemeProvider theme={ theme }>
        <CssBaseline>
          <Router>
            <div className="App">
              <Route exact path="/" component={ FrontPage }/>
              <Route path="/termos-de-uso" component={ TermsOfService }/>
              <Route path="/politica-de-privacidade" component={ PrivacyPolicy }/>
              <Route path="/task" component={ TaskCreate }/>
              <Route path="/expense" component={ ExpenseCreate }/>
              <Route path="/home" component={ Home }/>
            </div>
          </Router>
        </CssBaseline>
      </MuiThemeProvider>
    </Provider>
  );
};

