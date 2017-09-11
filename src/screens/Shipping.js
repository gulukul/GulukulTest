import React, { Component } from 'react';
import { Button, Text, TextInput, View, StyleSheet } from 'react-native';

export default class Shipping extends Component {
  static navigationOptions = {
    headerStyle: { position: 'absolute', top: 0 }
  }

  constructor(props) {
    super(props);
    // Complete
  }

  // Called when User Clicks Next
  onSubmit = (navigate) => {
    // 1. Alert the entire shipping address
    // 2. Navigate to Record page
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <View style={styles.name}>
          <Text>Name</Text>

          <TextInput />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  name: {
    margin: 50
  }
});