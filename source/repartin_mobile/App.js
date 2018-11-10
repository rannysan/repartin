
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import { GoogleSigninButton } from 'react-native-google-signin';
import { googleLogin, facebookLogin } from './services/login';
import { LoginButton } from 'react-native-fbsdk';

export default class App extends Component {
  render() {
    return (
      <View >
        <Text>teste</Text>
        <Text >To get started, edit App.js</Text>
        <GoogleSigninButton
          style={{ width: 230, height: 48 }}
          size={GoogleSigninButton.Size.Standard}
          color={GoogleSigninButton.Color.Dark}
          onPress={googleLogin} />

        <Button title="Facebook" color="blue" onPress={facebookLogin} />
      </View>
    );
  }
}

