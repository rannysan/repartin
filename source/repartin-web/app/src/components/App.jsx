import React, { Component } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import Typography from "@material-ui/core/Typography";
import "./App.scss";
const service = require('../../../node_modules/services-commons/index');

class App extends Component {
  state = { isSignedIn: false }
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      this.props.firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      this.props.firebase.auth.FacebookAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  async componentWillMount() {
     var teste = (await service.getUserById('teste'))
     console.log(teste);
  }

  componentDidMount = () => {

    this.props.firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
    })
  }

  render() {
    return (
      <div className="App">

        <Typography variant="h4" component="h4">Login</Typography>

        {this.state.isSignedIn ? (
          <span>
            <div>Signed In!</div>
            <button onClick={() => this.props.firebase.auth().signOut()}>Sign out!</button>
            <h1>Welcome {this.props.firebase.auth().currentUser.displayName}</h1>
            <img
              alt="profile picture"
              src={this.props.firebase.auth().currentUser.photoURL}
            />
          </span>
        ) : (
            <StyledFirebaseAuth
              uiConfig={this.uiConfig}
              firebaseAuth={this.props.firebase.auth()}
            />
          )}
      </div>
    )
  }
}

export default App