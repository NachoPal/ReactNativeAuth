import React, {Component} from 'react'
import {View, Text} from 'react-native'
import firebase from 'firebase'

import { Header, Card, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm'


class App extends Component {

  state = {loggedIn: null};

  componentWillMount () {
    firebase.initializeApp({
      apiKey: "AIzaSyCIZzKQKuXVTEWbp3649j3cR_hYQRrg1KM",
      authDomain: "auth-b800a.firebaseapp.com",
      databaseURL: "https://auth-b800a.firebaseio.com",
      storageBucket: "auth-b800a.appspot.com",
      messagingSenderId: "142003508769"
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({loggedIn: true});
      }else {
        this.setState({loggedIn: false});
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>
            Log Out
          </Button>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return(
      <View>
        <Header title='Authentication'/>
        <Card>
          {this.renderContent()}
        </Card>
      </View>
    );
  }
}

export default App;