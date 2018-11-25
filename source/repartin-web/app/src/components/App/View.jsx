import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { CssBaseline, createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import Members from "../Members";
import PrivacyPolicy from "../PrivacyPolice";
import TermsOfService from "../TermsOfService";
import Home from "../Home";
import Login from "../Login";
import Tasks from "../Tasks";
import Expenses from "../Expenses";
import Profile from "../Profile";
import NotFound from "../NotFound";
import TasksAdd from "../Tasks/TaskCreate"
import ExpenseAdd from "../Expenses/ExpenseCreate"
import CreateHouse from "../Home/components/Welcome/components/CreateHouse";

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

const privatePages = {
  "/tarefas": Tasks,
  "/financas": Expenses,
  "/membros": Members,
  "/perfil": Profile,
  "/tarefasAdd": TasksAdd,
  "/financasAdd": ExpenseAdd, // acho que isso nao deveria estar aqui e tambem fosse /financas/criar algo assim
  "/republica-add": CreateHouse // foda-se o padrão imposto pela sociedade capitalista
};

function checkAuth(props, store) {
  
  if( store.firebase.auth().currentUser ) {
    const Component = privatePages[ props.match.url ];
    return <Component />;
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
                        return <Home />
                    }
                    return <Login {...props} />
              }}/>
              <Route path="/termos-de-uso" component={ TermsOfService }/>
              <Route path="/politica-de-privacidade" component={ PrivacyPolicy }/>
              {
                Object.keys( privatePages ).map( ( path, key ) => {
                  return <Route path={ path } key={ key } render={(props) => checkAuth(props,store)}/>
                } )
              }
              <Route component={ NotFound }/>
            </Switch>

          </Router>
        </CssBaseline>
      </MuiThemeProvider>
    </Provider>
  );
};

