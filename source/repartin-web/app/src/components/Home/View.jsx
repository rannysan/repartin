import React from "react";

export default ( { firebaseAuth, signOut } ) => {

  return ( 
    <div>
      <div>
      <div>Signed in</div>
      <button onClick={ signOut }>Sair</button>
    </div>
    <h1>Welcome { firebaseAuth().currentUser.displayName }</h1>
    <img
      alt="profile picture"
      src={ firebaseAuth().currentUser.photoURL }
    />
    </div>
  );
};
