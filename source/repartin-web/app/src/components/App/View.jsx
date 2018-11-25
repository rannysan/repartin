import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CssBaseline, createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import FrontPage from "../FrontPage";
import Members from "../Members";
import PrivacyPolicy from "../PrivacyPolice";
import TermsOfService from "../TermsOfService";
import TaskCreate from "../TaskCreate";
import ExpenseCreate from "../ExpenseCreate";
import Home from "../Home";
import Tasks from "../Tasks";
import Expenses from "../Expenses";
import NotFound from "../NotFound";
>>>>>>> 9f64842cc5f558fbd7568c4acdcd1296650800f1

const theme = createMuiTheme( {
  palette: {
    type: "dark",
    background: {
      default: grey[900]
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
              <Switch>
                <Route exact path="/" component={ FrontPage }/>
                <Route path="/membros" component={ Members }/>
                <Route path="/termos-de-uso" component={ TermsOfService }/>
                <Route path="/politica-de-privacidade" component={ PrivacyPolicy }/>
                <Route path="/tarefas" component={ Tasks }/>
                <Route path="/financas" component={ Expenses }/>
                <Route path="/task" component={ TaskCreate }/>
                <Route path="/expense" component={ ExpenseCreate }/>
                <Route path="/home" component={ Home }/>
                <Route component={ NotFound }/>
              </Switch>
            </div>
          </Router>
        </CssBaseline>
      </MuiThemeProvider>
    </Provider>
  );
};

