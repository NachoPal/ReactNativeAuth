import React, { Component } from 'react';
import firebase from 'firebase';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
  state = { email: '', password: ''};

  onButtonPress() {
    const { email, password } = this.state;

    firebase.auth().signInWithEmailAndPassword(email, password);
  }

  render () {
    return(
      <Card>
        <CardSection>
          <Input
            label = 'Email'
            value={this.state.email}
            onChangeText={email => this.setState({email})}
            placeholder= 'user@gmail.com'
            autoCorrect={false}
            secureTextEntry={false}
          />
        </CardSection>

        <CardSection>
          <Input
            label = 'Password'
            value={this.state.password}
            onChangeText={password => this.setState({password})}
            placeholder= 'password'
            secureTextEntry={true}
          />
        </CardSection>

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Log in
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;