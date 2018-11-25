import firebase from 'firebase/app';
import config from "./keys";

firebase.initializeApp(config);

export const authRef = firebase.auth();
export default firebase;
