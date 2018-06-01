import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

const styles = StyleSheet.create({

  container: {
      flex: 1,
      paddingTop: 5
  },

  listItem: {
      height: 35,
      flexDirection: "row",
      backgroundColor: "white",
      marginBottom: 5,
      elevation: 2,
      alignItems: "center",
      padding: 5
  },

  colorPreview: {
      height: 20,
      width: 20,
      backgroundColor: 'green',
  }
})

export default class ScreenB extends React.Component {

  constructor () {
    super();
    this.state = {
      lists: [],
    };
  }

  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(lists => {
      this.setState({ lists });
    })
  }

  renderItem = (instance) => {
      const { item } = instance;
      return (
        <View style={styles.listItem} key={item.id}>
            <Text>{item.title}</Text>
            <View style={styles.colorPreview}/>
        </View>
      );
  }

  render () {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.lists}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}