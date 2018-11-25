import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { CssBaseline, createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import FrontPage from "../FrontPage";
import Members from "../Members";
import PrivacyPolicy from "../PrivacyPolice";
import TermsOfService from "../TermsOfService";
import TaskCreate from "../TaskCreate";
import ExpenseCreate from "../TaskCreate";
import Home from "../Home";

const theme = createMuiTheme( {
  palette: {
    type: "dark",
    background: {
      default: "#0c0c0c"
    },
    primary: {
      main: "#333333"
    },
    secondary: {
      main: "#cccccc"
    },
    text: {
      primary: "#cccccc",
      secondary: "#ffffff"
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
              <Route path="/membros" component={ Members }/>
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

