import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const Header = (props) => {
  const {title} = props;

  return (
    <View style={headerStyle}>
      <Text style={textStyle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 30
  }
});

const {headerStyle, textStyle} = styles;

export { Header };
