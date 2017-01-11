import React, {Component} from 'react'
import {View, Text} from 'react-native'

import Header from './components/Header';
import Card from './components/Card';
import Button from './components/Button';

class App extends Component {
  render() {
    return(
      <View>
        <Header title='Auth'/>
        <Card>
          <Button />
        </Card>
      </View>
    );
  }
}

export default App;