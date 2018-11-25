import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { service } from './reducers/serviceReducer';

export default combineReducers( {
  firebase: firebaseReducer,
  service: service
} );
