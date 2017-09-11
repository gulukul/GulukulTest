import React, { Component } from 'react';
import { Button, StyleSheet, View } from 'react-native';

export default class Login extends Component {
  static navigationOptions = {
    headerStyle: { position: 'absolute', top: 0 }
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.button}>
        <Button title="Login" onPress={() => navigate('Shipping')} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    margin: 50
  }
});