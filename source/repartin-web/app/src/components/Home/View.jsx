import React from "react";

const View = ( { firebaseAuth, signOut } ) => {

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

export default View;
