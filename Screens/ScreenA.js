import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const style = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  button: {
    marginBottom: 15,
  }
});

export default class ScreenA extends React.Component {

  openDrawer () {
    this.props.navigation.openDrawer();
  }

  goToScreenB () {
    this.props.navigation.navigate('ScreenB');
  }

  render () {
    return (
      <View style={style.container}>
        <Text>I am Screen A</Text>
        <View style={style.button}>
          <Button
            style={style.button}
            onPress={this.goToScreenB.bind(this)}
            title="Go to Screen B"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
        <Button
          style={style.button}
          onPress={this.openDrawer.bind(this)}
          title="Open Drawer"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}