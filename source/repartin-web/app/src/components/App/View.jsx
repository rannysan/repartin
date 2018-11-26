
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CssBaseline, createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import service from "../../services/service";
import PrivacyPolicy from "../PrivacyPolice";
import TermsOfService from "../TermsOfService";
import FrontPage from "../FrontPage";

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
            <Switch>
              <Route path="/termos-de-uso" component={ TermsOfService }/>
              <Route path="/politica-de-privacidade" component={ PrivacyPolicy }/>
              <Route path="/" component={ FrontPage }/>
            </Switch>
          </Router>
        </CssBaseline>
      </MuiThemeProvider>
    </Provider>
  );
};
