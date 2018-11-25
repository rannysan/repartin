import React from "react";
import { compose } from 'recompact'
import { firebaseConnect  } from 'react-redux-firebase'
import { withStyles } from "@material-ui/core/styles";
import { createStyles } from "@material-ui/core";

const styles = createStyles({
});

const View = ( { firebase, signOut } ) => {

  return ( 
    <div>
      <div>
      <div>Signed in</div>
      <button onClick={ signOut }>Sair</button>
    </div>
    <h1>Welcome { firebase.auth().currentUser.displayName }</h1>
    <img
      alt="profile picture"
      src={ firebase.auth().currentUser.photoURL }
    />
    
    </div>
  );
};

export default compose(
  withStyles(styles),
  firebaseConnect()
)(View);
