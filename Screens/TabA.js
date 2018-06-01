import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const style = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  }
});

export default class TabA extends React.Component {
  render () {
    return (
      <View style={style.container}>
        <Text>I am Tab A</Text>
      </View>
    );
  }
}