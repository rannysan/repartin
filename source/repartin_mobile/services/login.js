import { GoogleSignin } from 'react-native-google-signin';
import { AccessToken, LoginManager } from 'react-native-fbsdk';
import firebase from 'react-native-firebase'

// Calling this function will open Google for login.
export const googleLogin = async () => {
  try {
    // Add any configuration settings here:
    await GoogleSignin.configure();

    const data = await GoogleSignin.signIn();
    alert('passou');
    // create a new firebase credential with the token
    const credential = firebase.auth.GoogleAuthProvider.credential(data.idToken, data.accessToken)
    // login with credential
    const currentUser = await firebase.auth().signInAndRetrieveDataWithCredential(credential);

    alert(JSON.stringify(currentUser.user.toJSON()));
  } catch (e) {
    console.error(e);
  }
}

export const facebookLogin = async () => {
  try {
    const result = await LoginManager.logInWithReadPermissions(['public_profile', 'email']);

    if (result.isCancelled) {
      throw new Error('User cancelled request'); // Handle this however fits the flow of your app
    }

    console.log(`Login success with permissions: ${result.grantedPermissions.toString()}`);

    // get the access token
    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
      throw new Error('Something went wrong obtaining the users access token'); // Handle this however fits the flow of your app
    }

    // create a new firebase credential with the token
    const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);

    // login with credential
    const currentUser = await firebase.auth().signInAndRetrieveDataWithCredential(credential);

    alert(JSON.stringify(currentUser.user.toJSON()))
  } catch (e) {
    console.error(e);
  }
}