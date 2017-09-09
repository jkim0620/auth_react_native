import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyDYdYbGe2vg6mVPuUvaU_iGQUw4k9kN-pQ",
      authDomain: "auth-3aac8.firebaseapp.com",
      databaseURL: "https://auth-3aac8.firebaseio.com",
      projectId: "auth-3aac8",
      storageBucket: "auth-3aac8.appspot.com",
      messagingSenderId: "73890567081"
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
