import React, {Component} from 'react'
import {View, Text} from 'react-native'
import firebase from 'firebase'

import { Header, Card, Button, CardSection } from './components/common';
import LoginForm from './components/LoginForm'


class App extends Component {
  componentWillMount () {
    firebase.initializeApp({
      apiKey: "AIzaSyCIZzKQKuXVTEWbp3649j3cR_hYQRrg1KM",
      authDomain: "auth-b800a.firebaseapp.com",
      databaseURL: "https://auth-b800a.firebaseio.com",
      storageBucket: "auth-b800a.appspot.com",
      messagingSenderId: "142003508769"
    })
  }

  render() {
    return(
      <View>
        <Header title='Auth'/>
        <LoginForm />
      </View>
    );
  }
}

export default App;