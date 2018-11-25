import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { CssBaseline, createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import PrivacyPolicy from "../PrivacyPolice";
import TermsOfService from "../TermsOfService";
import TaskCreate from "../TaskCreate";
import ExpenseCreate from "../TaskCreate";
import Home from "../Home";
import Login from "../Login";

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

function verificaAutenticacao(props, store) {
  console.log( props.match.url)

  if(store.firebase.auth().currentUser) {
    if ( props.match.url == '/home') {
      return <Home />
    }
    if ( props.match.url == '/task') {
      return <TaskCreate />
    }
    if ( props.match.url == '/expense') {
      return <ExpenseCreate />
    }
  }
 
  return <Redirect to='/' />
}

export default ( { store } ) => {

  return (
    <Provider store={ store }>
      <MuiThemeProvider theme={ theme }>
        <CssBaseline>
          <Router>
            <Switch>
              <Route exact path="/"  render={props => {
                    var auth = store.firebase.auth().currenUser;
                    if (auth !== undefined) {
                        return <Redirect to='/home' />
                    }
                    return <Login {...props} />
              }}/>
              <Route path="/termos-de-uso" component={ TermsOfService } />
              <Route path="/politica-de-privacidade" component={ PrivacyPolicy }/>
              <Route path="/task"  render={(props) => verificaAutenticacao(props,store)} />
              <Route path="/expense" render={(props) => verificaAutenticacao(props,store)}/>
              <Route path="/home" render={(props) => verificaAutenticacao(props,store)}/>

            </Switch>
          </Router>
        </CssBaseline>
      </MuiThemeProvider>
    </Provider>
  );
};

