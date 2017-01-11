import React, {Component} from 'react'
import {View, Text} from 'react-native'

class Card extends Component {
  render (){
    return(
      <View style={cardStyle}>
        {this.props.children}
      </View>
    );
  }
}

const styles = {
  cardStyle: {
    height: 150,
    marginTop: 10
  }
};

const {cardStyle} = styles;

export default Card;
