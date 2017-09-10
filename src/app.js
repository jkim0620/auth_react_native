import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = {
    loggedIn: null
  };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyDYdYbGe2vg6mVPuUvaU_iGQUw4k9kN-pQ",
      authDomain: "auth-3aac8.firebaseapp.com",
      databaseURL: "https://auth-3aac8.firebaseio.com",
      projectId: "auth-3aac8",
      storageBucket: "auth-3aac8.appspot.com",
      messagingSenderId: "73890567081"
    });

    firebase.auth().onAuthStateChanged((user) => { //When user signs in or signs out, this function will be called
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
         return (
           <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
           </CardSection>
         );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }


  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }

}

export default App;
